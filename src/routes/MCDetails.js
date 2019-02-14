import React from 'react';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import { Row, Col, Icon, Modal,Input,InputNumber,Popover,DatePicker, Button,Tabs,message } from 'antd';
import styles from '../styles/MCDetails.css';
import *as programHost from '../utils/ajax';
import zb01 from '../assets/zb01.jpg';
import ewm1 from '../assets/ewm1.jpg';
const store=require('store');
const TabPane = Tabs.TabPane;
export default class MCDetails extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            MCDetail:{},//主播详情
            MCimgArr:[],
            selectedMCImg:'',
            giftsArr1:[],
            giftsArr2:[],
            giftsArr3:[],
            selectedGiftItem:{},
            sendGiftNum:1,
            gotGiftsList:[],
            placeOrderModalVisiable:false,
            orderTime:0,//开始日期
            orderPeriod:1,//约玩周期（小时数）
            remark:"",
            selectedGame:{},
            orderPrice:0,
            accountLeft:0,
            xingzuo:'',
        }
  }
    getAstro(m,d){
    return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2);
    }
    UNSAFE_componentWillMount(){
        const userName=store.get("username");
        const mcdetail=store.get('mcdetail');
        console.log('mcdetail',mcdetail);
        let xingzuoArr = mcdetail.birthday.split('-');
        this.setState({xingzuo:this.getAstro(xingzuoArr[1],xingzuoArr[2])})
        const content = this;
        content.setState({
            MCDetail:mcdetail
        });
        this.setState({MCimgArr:mcdetail.moreImg,selectedMCImg:mcdetail.moreImg[0]});
        // 前台页面获得所有的礼物信息
        fetch(`${programHost.APIhost}/user/get/gift/all`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth('/user/get/gift/all'),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
            response.json().then((res) => {
                console.log('前台页面获得所有的礼物信息',res);
                if(res.statusCode===107){
                    content.setState({
                        giftsArr1:res.resource.giftTyp1,
                        giftsArr2:res.resource.giftTyp2,
                        giftsArr3:res.resource.giftTyp3,
                        selectedGiftItem:res.resource.giftTyp1[0],
                    });
                }
                },(data) => {
                console.log(data)
            });
            });
        if(mcdetail&&userName!==undefined&&userName.username){
            const sbdata0={anchorId:mcdetail._id}
            //联网获取主播的礼物列表
            fetch(`${programHost.APIhost}/anchor/gift/contribution/list`, {
                method: 'POST',
                mode: 'cors',
                body:JSON.stringify(sbdata0),
                credentials: 'include',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization':programHost.getAuth('/anchor/gift/contribution/list'),// 除登录之外，获取登录的token都不需要username和password
                }),
                }).then((response) => {
                
                response.json().then((res) => {
                    console.log('主播的礼物列表',res);
                    if(res.statusCode===107){
                        //主播的礼物列表
                        content.setState({gotGiftsList:res.resource})
                    }
                    },(data) => {
                    console.log(data)
                });
                });
        }
        if(userName!==undefined&&userName.username){
            //联网获取userinfo
            fetch(`${programHost.APIhost}/user/info`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth('/user/info'),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
                response.json().then((res) => {
                    console.log('联网获取userinfo',res);
                    if(res.statusCode===107){content.setState({accountLeft:res.resource.diamonds});}
                },(err) => {
                    console.log('err',err);
            });
            });
        }
    }
    // 选择礼物
    checkGift(item){this.setState({selectedGiftItem:item}); }
    //赠送主播礼物
    sendGift(){
        const userName=store.get("username");
        if(!userName.username){message.warn('您还没登录，请先登录');return;}
        const {selectedGiftItem,MCDetail,sendGiftNum,accountLeft}=this.state;
        console.log('MCDetail',MCDetail);
        console.log('selectedGiftItem',selectedGiftItem);
        console.log('sendGiftNum',sendGiftNum);
        console.log(programHost.getAuth(`/user/giving/gift/anchor/${MCDetail._id}`) )
        if(sendGiftNum<1){message.warn('礼物数量至少为1个！！');return;}
        // if(accountLeft<)
        const content = this;
        const sbdata={
            giftId: selectedGiftItem._id,
            number: sendGiftNum,
        }
        console.log('sbdata',sbdata);
        fetch(`${programHost.APIhost}/user/giving/gift/anchor/${MCDetail._id}`, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(sbdata),
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth(`/user/giving/gift/anchor/${MCDetail._id}`),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
            response.json().then((res) => {
                    console.log(res);
                    if(res.statusCode===102){
                        message.success(res.message);
                        content.UNSAFE_componentWillMount();
                    }else{
                        message.warn(res.message);
                    }
                },(data) => {
                console.log(data)
            });
            });
    }
    //下单
    placeOrder(item){
        const userName=store.get("username");
        if(!userName||!userName.username){message.warn('您还没登录，请先登录');return;}
        this.setState({placeOrderModalVisiable:true,selectedGame:item}); 
    }
    //确认下单
    surePlaceOrder(){
        const {MCDetail,selectedGame,orderTime,orderPeriod}=this.state;
        console.log(orderPeriod);
        if(orderTime===0){message.warn('请选择约玩开始时间');return;}
        if(orderPeriod<1){message.warn('请填写约玩周期');return;}
        const content =this;
        const sbdata={
            "anchorId": MCDetail._id,
            "gameId": selectedGame._id,
            "dayTime": orderTime.toString(),
            "startTiem": orderTime.toString(),
            "number": Number(orderPeriod),
            "type": 1
          }
          console.log(sbdata);
            //确认下单约主播
            return fetch(`${programHost.APIhost}/order/alipay/payment`, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(sbdata),
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth('/order/alipay/payment'),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
            response.json().then((res) => {
                console.log(res);
                if(res.statusCode===107){
                    window.location.href=res.resource;
                }else{
                    message.warn(res.message);
                }
                },(data) => {
                console.log(data)
            });
            });
    }
    cancelPlaceOrder(){
        return this.emptyOrder();
    }
    emptyOrder(){
        this.setState({
            placeOrderModalVisiable:false,
            orderTime:"",
            orderPeriod:1,
            remark:"",
            orderPrice:0,
        })
    }
    render() {
        const {MCDetail,MCimgArr,xingzuo,selectedMCImg,giftsArr1,giftsArr2,giftsArr3,selectedGiftItem,sendGiftNum,gotGiftsList,placeOrderModalVisiable,orderTime,orderPeriod,orderPrice,remark,selectedGame,accountLeft}=this.state;
        const wxPlaceOrderContent = (
            <div>
              <img style={{width:145,height:145}} src={ewm1} alt="" />
            </div>
        );
        function disabledDate(current) {
            // Can not select days before today and today
            return current && current < moment().endOf('day');
        }
        
        return (<div>
            <div className={styles.container}>
            {/* 头部标签栏 */}
                <div className={styles.MCDetailHeader}>
                    <div className={styles.MCDetailMsg}>
                        <img className={styles.MCDetailAvtor} src={zb01} alt="" />
                            <div className={styles.MCDetailMsgContent}>
                            <div className={styles.MCDetailName}>{MCDetail.nickname}</div>
                            <div className={styles.MCDetailTitle}>信用值：<span style={{color:'red'}}>{MCDetail.creditValue}</span></div>
                        </div>
                    </div>
                    <div className={styles.MCDetail2}>
                        <div className={styles.xiadan}>
                            <Popover content={wxPlaceOrderContent} title="微信扫描即可下单" trigger="hover"><Button>微信下单</Button></Popover>
                        </div>
                        <div className={styles.MCDetailPS}>
                            {MCDetail.sex===0?
                            <span style={{display:'inline-block',width:40,borderRadius:5,textAlign:'center',background:'#ffabad',color:'white',marginRight:20}}>♀</span>:
                            <span style={{display:'inline-block',width:40,borderRadius:5,textAlign:'center',background:'#97bcf0',color:'white',marginRight:20}}>♂</span>
                            }
                            <span style={{fontSize:'14px',color:'#999'}}>坐标：{MCDetail.province}</span>
                        </div>
                    </div>
                </div>
                {/* 主题部分 */}
                <div className={styles.MCDetailContainer}>
                    <Row gutter={16}>
                    {/* 左边的主播图片、礼物、个人资料等 */}
                        <Col span={10}>
                        {/*主播图片  */}
                            <div className={styles.MCDetailImgs}>
                                <img className={styles.MCDetailImgBig} src={selectedMCImg} alt=""/>
                                <div className={styles.MCDetailImgSmallList}>
                                    <Row gutter={28}>
                                        {MCimgArr.map((item,index)=>{return(
                                            <Col span={6} key={index}>
                                                <img onClick={()=>{this.setState({selectedMCImg:item})}} className={selectedMCImg===item?styles.MCDetailImgSmallCheck:styles.MCDetailImgSmall} src={item} alt=""/>
                                            </Col>
                                        )})}
                                    </Row>
                                </div>
                            </div>
                            {/*送礼物  */}
                            <div className={styles.sendGifts}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="礼物" key="1">
                                        <div className={styles.sendGiftsItem}>
                                            <Row>
                                                {giftsArr1.map((item,index)=>{return(
                                                    <Col span={6} key={index}>
                                                        <Popover 
                                                             content={(<div>
                                                            <p>礼物名称：{item.name}</p>
                                                            <p>礼物价格：{item.price}钻石</p>
                                                            <p>礼物介绍：{item.note}</p>
                                                            </div>)}
                                                            title="礼物介绍"
                                                            trigger="hover"
                                                        >
                                                            <div className={selectedGiftItem._id===item._id?styles.giftDivCheck:styles.giftDiv} onClick={this.checkGift.bind(this,item)}>
                                                                <img src={item.icon} className={styles.giftImg} alt=""/>
                                                                <p className={styles.giftName}>{item.name}</p>
                                                                
                                                            </div>
                                                        </Popover>
                                                    </Col>
                                                )})}
                                            </Row>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="冠名" key="2">
                                        <div className={styles.sendGiftsItem}>
                                            <Row>
                                                {giftsArr2.map((item,index)=>{return(
                                                    <Col span={6} key={index}>
                                                        <Popover 
                                                             content={(<div>
                                                            <p>礼物名称：{item.name}</p>
                                                            <p>礼物价格：{item.price}钻石</p>
                                                            <p>礼物介绍：{item.note}</p>
                                                            </div>)}
                                                            title="礼物介绍"
                                                            trigger="hover"
                                                        >
                                                            <div className={selectedGiftItem._id===item._id?styles.giftDivCheck:styles.giftDiv} onClick={this.checkGift.bind(this,item)}>
                                                                <img src={item.icon} className={styles.giftImg} alt=""/>
                                                                <div className={styles.giftName}>{item.name}</div>
                                                            </div>
                                                        </Popover>
                                                    </Col>
                                                )})}
                                            </Row>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="活动礼" key="3">
                                        <div className={styles.sendGiftsItem}>
                                            <Row>
                                                {giftsArr3.map((item,index)=>{return(
                                                    <Col span={6} key={index}>
                                                        <Popover 
                                                             content={(<div>
                                                            <p>礼物名称：{item.name}</p>
                                                            <p>礼物价格：{item.price}钻石</p>
                                                            <p>礼物介绍：{item.note}</p>
                                                            </div>)}
                                                            title="礼物介绍"
                                                            trigger="hover"
                                                        >
                                                            <div className={selectedGiftItem._id===item._id?styles.giftDivCheck:styles.giftDiv} onClick={this.checkGift.bind(this,item)}>
                                                                <img src={item.icon} className={styles.giftImg} alt=""/>
                                                                <div className={styles.giftName}>{item.name}</div>
                                                            </div>
                                                        </Popover>
                                                    </Col>
                                                )})}
                                            </Row>
                                        </div>
                                    </TabPane>
                                </Tabs>
                                <div style={{height:30,lineHeight:'30px',fontSize:12}}>剩余钻石：{accountLeft}</div>
                                <div className={styles.inputGiftNum}>
                                    <Row>
                                        <Col span={8}>已选礼物：{selectedGiftItem.name}</Col>
                                        <Col span={8}><InputNumber min={1} defaultValue={1} vlue={sendGiftNum}  onChange={(val)=>{this.setState({sendGiftNum:val});}} /></Col>
                                        <Col span={8}><Button onClick={()=>{this.sendGift();}}>赠送</Button></Col>
                                    </Row>
                                </div>
                            </div>
                            {/*查看主播个人信息 */}
                            <div className={styles.MCSelfMsg}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="个人资料" key="1">
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>身高：</Col><Col span={4}>{MCDetail.height}CM</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>星座：</Col><Col span={18}>{xingzuo}座</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>职业：</Col><Col span={18}>{MCDetail.occupation}</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>魅力部位：</Col><Col span={18}>{MCDetail.charmPosition[0]}、{MCDetail.charmPosition[1]}、{MCDetail.charmPosition[2]}</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}> <Row><Col span={6}>个性标签：</Col><Col span={18}>{MCDetail.labels[0]}、{MCDetail.labels[1]}</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>兴趣爱好：</Col><Col span={18}>{MCDetail.interest}</Col></Row></div>
                                </TabPane>
                            </Tabs>
                            </div>
                        </Col>
                        {/* 右边的主播申请的游戏详情 */}
                        <Col span={14}>
                            {/* 礼物榜单 */}
                            <div className={styles.gotGifts}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="礼物榜单" key="1">
                                        <Row>
                                            {gotGiftsList.map((item,index)=>{return(
                                                <Col span={3} key={index}>
                                                    <Popover 
                                                        content={(<div>
                                                        <p>礼物名称：{item.name}</p>
                                                        <p>礼物价格：{item.price}钻石</p>
                                                        <p>礼物介绍：{item.note}</p>
                                                        </div>)}
                                                        title="礼物介绍"
                                                        trigger="hover"
                                                    >
                                                        <div className={styles.gotGiftIem}>
                                                            <img src={item.icon} className={styles.gotGiftIemImg} alt=""/>
                                                            <div className={styles.gotGiftIemMun}>{item.name}</div>
                                                        </div>
                                                    </Popover>
                                                </Col>
                                            )})}
                                        </Row>
                                    </TabPane>
                                </Tabs>
                            </div>
                            {/* 服务详情 */}
                            <div className={styles.gameItem}>
                                <Tabs defaultActiveKey={MCDetail.gameList[0]._id} >
                                {MCDetail.gameList.map((item,index)=>{return(
                                    <TabPane tab={item.title} key={item._id}>
                                        <div className={styles.gameItemTitleMsg}>
                                            <Row>
                                                <Col span={4}>
                                                    <div className={styles.gameItemTitleMsg1}>
                                                        <img src={item.selectedImg} className={styles.gameItemTitleMsgImg} alt="" />
                                                        <div className={styles.gameItemTitleAudio}>
                                                            <div className={styles.gameItemTitleAudioContent}>25</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={8}>
                                                    <div className={styles.gameItemTitleMsg1}>
                                                       <div className={styles.gameItemTitleStation}>{item.name}</div>
                                                       <div className={styles.gameItemTitleO}>{item.roteLabel}</div>
                                                       <div className={styles.gameItemTitleO}>接单次数：{item.orderNum?item.orderNum:0}次</div>
                                                    </div>
                                                </Col>
                                                <Col span={4}></Col>
                                                <Col span={3}></Col>
                                                <Col span={5}>
                                                    <div className={styles.gameItemTitleMsg1}>
                                                       <div className={styles.gameItemTitlePrice}><span style={{fontSize:30,color:'red'}}>￥{item.price}</span>/次</div>
                                                       <div className={styles.gameItemTitlePrice}><Button type="primary" size="large" onClick={this.placeOrder.bind(this,item)}>下单约Ta</Button></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            <div className={styles.gameIntroducetitle}><span style={{fontSize:20,fontWeight:'bold'}}>服务介绍</span>/INTRODUCE</div>
                                            <div className={styles.gameIntroduceContent}>
                                                <div className={styles.gameIntroduceText}>羡慕那些敢爱敢恨的人</div>
                                                <div className={styles.gameIntroduceText}>羡慕那些敢爱敢恨的人</div>
                                                <div className={styles.gameIntroduceText}>羡慕那些敢爱敢恨的人</div>
                                                <div className={styles.gameIntroduceText}>羡慕那些敢爱敢恨的人</div>
                                            </div>
                                        </div>
                                    </TabPane>
                                )})}
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* 下单的Modal */}
            <Modal
                title="下单信息"
                okText="确认"
                cancelText="取消"
                visible={placeOrderModalVisiable}
                onOk={()=>{this.surePlaceOrder()}}
                onCancel={()=>{this.cancelPlaceOrder()}}
            >
                <div className={styles.plactOrderMsg}>
                    <Row>
                        <Col span={3}>导师：</Col>
                        <Col span={3}><img src="http://img3.tuwandata.com/uploads/play/201803/359133-05054952.jpeg?.jpg" className={styles.oederImg} alt="" /></Col>
                        <Col span={3}>{MCDetail.supervisorName}</Col>
                        <Col span={4}/>
                        <Col span={3}>服务：</Col>
                        <Col span={3}><img src={selectedGame.selectedImg} className={styles.oederImg} alt="" /></Col>
                        <Col span={4}><span>{selectedGame.title}</span></Col>
                    </Row>
                </div>
                <div className={styles.plactOrderFormItem}>
                    <Row>
                        <Col span={8}>下单日期：</Col>
                        <Col span={16}>
                            <DatePicker
                                locale={locale}
                                onChange={(val,date)=>{console.log(date); console.log(moment(date).valueOf());  this.setState({orderTime:moment(date).valueOf()})}}
                                format="YYYY-MM-DD HH:mm:ss"
                                disabledDate={disabledDate}
                                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                            />
                        </Col>
                    </Row>
                </div>
                <div className={styles.plactOrderFormItem}>
                    <Row>
                        <Col span={8}>约玩周期（小时）：</Col>
                        <Col span={16}><InputNumber min={1} defaultValue={1} value={orderPeriod}  onChange={(val)=>{this.setState({orderPeriod:val,orderPrice:selectedGame.price*val-0});}} /></Col>
                    </Row>
                </div>
                <div className={styles.plactOrderFormItem}>
                    <Row>
                        <Col span={8}>给导师留言：</Col>
                        <Col span={16}><Input value={remark} onChange={(e)=>{this.setState({remark:e.target.value});}} /></Col>
                    </Row>
                </div>
                <div className={styles.plactOrderFormItem}>
                    <Row>
                        <Col span={18}></Col>
                        <Col span={6}>总价：{selectedGame.price*Number(orderPeriod)}元</Col>
                    </Row>
                </div>
                <div className={styles.plactOrderFormItem}>
                    <Row>
                        <Col span={18}></Col>
                        <Col span={6}>折扣：0元</Col>
                    </Row>
                </div>
                <div className={styles.plactOrderFormItem}>
                    <Row>
                        <Col span={18}></Col>
                        <Col span={6}>实付：<span style={{color:'red'}}>{orderPrice}</span>元</Col>
                    </Row>
                </div>
            </Modal>
        </div>)
    }
}


