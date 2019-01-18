import React from 'react';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import { Row, Col, Icon, Modal,Input,InputNumber,Popover,DatePicker, Button,Tabs } from 'antd';
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
            giftsArr:[],
            selectedGiftItem:{},
            sendGiftNum:0,
            gotGiftsList:[],
            placeOrderModalVisiable:false,
            orderTime:"",
            orderPeriod:1,
            remark:"",
            selectedGame:"",
            orderPrice:0,
        }
  }
    UNSAFE_componentWillMount(){
        const mcdetail=store.get('mcdetail');
        const content = this;
        //获取热门主播列表
        fetch(`${programHost.APIhost}/user/get/anchor/info/${mcdetail._id}`, {
            method: 'GET',
            dataType: 'json',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'text/plain;charset=UTF-8',
            }),
        }).then((res) => {
            res.json().then((data) => {
            console.log(data);
            content.setState({MCDetail:data.resource});
            });
        });
        const imgArr=[
            'https://tuwanpicshare.oss-cn-qingdao.aliyuncs.com/dyimage/359133_QTjZGPXebk_1536076178724.jpg?.jpg',
            'https://tuwanpicshare.oss-cn-qingdao.aliyuncs.com/dyimage/359133_nBWNbhpsC3_1541194282782.jpg?.jpg',
            'http://img3.tuwandata.com/uploads/play/201803/359133-05054952.jpeg?.jpg',
            'http://img3.tuwandata.com/uploads/play/201803/359133-03091147.jpeg?.jpg',
        ];
        const giftArr=[
            [
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:1},
                {title:'烟火',img:'http://img3.tuwandata.com/uploads/play/1142101545745926.png',giftIndex:2},
                {title:'平安果',img:'http://img3.tuwandata.com/uploads/play/1869951544500364.png',giftIndex:3},
                {title:'玫瑰',img:'http://img3.tuwandata.com/uploads/play/1898151532696070.png',giftIndex:4},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:5},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:6},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:7},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:8},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:9},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:10},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:11},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:12},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:13},
            ],
            [
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:14},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:15},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:16},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:17},
            ],
            [
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:18},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:19},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:20},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:21},
                {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:22},
            ],
        ];
        const giftsList=[
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:1,num:2},
            {title:'烟火',img:'http://img3.tuwandata.com/uploads/play/1142101545745926.png',giftIndex:2,num:2},
            {title:'平安果',img:'http://img3.tuwandata.com/uploads/play/1869951544500364.png',giftIndex:3,num:2},
            {title:'玫瑰',img:'http://img3.tuwandata.com/uploads/play/1898151532696070.png',giftIndex:4,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:5,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:6,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:7,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:8,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:9,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:10,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:11,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:12,num:2},
            {title:'香吻',img:'http://img3.tuwandata.com/uploads/play/1629711503976254.png',giftIndex:13,num:2},
        ];
        this.setState({MCimgArr:imgArr,selectedMCImg:imgArr[0],giftsArr:giftArr,selectedGiftItem:giftArr[0][0],gotGiftsList:giftsList});
        
    }
    // 选择礼物
    checkGift(item){this.setState({selectedGiftItem:item}); }
    placeOrder(item){
        this.setState({placeOrderModalVisiable:true,selectedGame:item});
    }
    surePlaceOrder(){

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
        const {MCDetail,MCimgArr,selectedMCImg,giftsArr,selectedGiftItem,sendGiftNum,gotGiftsList,placeOrderModalVisiable,orderTime,orderPeriod,orderPrice,remark,selectedGame}=this.state;
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
                    {/* <div className={styles.MCDetailMsg}>
                        <img className={styles.MCDetailAvtor} src={MCDetail.image} alt="" />
                            <div className={styles.MCDetailMsgContent}>
                            <div className={styles.MCDetailName}>{MCDetail.supervisorName}</div>
                            <div className={styles.MCDetailTitle}>信用值：<span style={{color:'red'}}>{MCDetail.title}</span></div>
                        </div>
                    </div> */}
                    <div className={styles.MCDetail2}>
                        <div className={styles.xiadan}>
                            <Popover content={wxPlaceOrderContent} title="微信扫描即可下单" trigger="hover"><Button>微信下单</Button></Popover>
                        </div>
                        {/* <div className={styles.MCDetailPS}>
                            {MCDetail.sex===0?
                            <span style={{display:'inline-block',width:40,borderRadius:5,textAlign:'center',background:'#ffabad',color:'white',marginRight:20}}>♀</span>:
                            <span style={{display:'inline-block',width:40,borderRadius:5,textAlign:'center',background:'#97bcf0',color:'white',marginRight:20}}>♂</span>
                            }
                            <span style={{fontSize:'14px',color:'#999'}}>坐标：{MCDetail.MCPosition}</span>
                        </div> */}
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
                                       )})}</Row>
                                </div>
                            </div>
                            {/*送礼物  */}
                            <div className={styles.sendGifts}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="礼物" key="1">
                                        <div className={styles.sendGiftsItem}>
                                            <Row>
                                                {giftsArr[0].map((item,index)=>{return(
                                                    <Col span={6} key={index}>
                                                        <Popover content={(<div>{item.title}</div>)} title="礼物介绍" trigger="hover">
                                                            <div className={selectedGiftItem.giftIndex===item.giftIndex?styles.giftDivCheck:styles.giftDiv} onClick={this.checkGift.bind(this,item)}>
                                                                <img src={item.img} className={styles.giftImg} alt=""/>
                                                                <div className={styles.giftName}>{item.title}</div>
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
                                                {giftsArr[1].map((item,index)=>{return(
                                                    <Col span={6} key={index}>
                                                        <Popover content={(<div>{item.title}</div>)} title="礼物介绍" trigger="hover">
                                                            <div className={selectedGiftItem.giftIndex===item.giftIndex?styles.giftDivCheck:styles.giftDiv} onClick={this.checkGift.bind(this,item)}>
                                                                <img src={item.img} className={styles.giftImg} alt=""/>
                                                                <div className={styles.giftName}>{item.title}</div>
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
                                                {giftsArr[2].map((item,index)=>{return(
                                                    <Col span={6} key={index}>
                                                        <Popover content={(<div>{item.title}</div>)} title="礼物介绍" trigger="hover">
                                                            <div className={selectedGiftItem.giftIndex===item.giftIndex?styles.giftDivCheck:styles.giftDiv} onClick={this.checkGift.bind(this,item)}>
                                                                <img src={item.img} className={styles.giftImg} alt=""/>
                                                                <div className={styles.giftName}>{item.title}</div>
                                                            </div>
                                                        </Popover>
                                                    </Col>
                                                )})}
                                            </Row>
                                        </div>
                                    </TabPane>
                                </Tabs>
                                <div style={{height:30,lineHeight:'30px',fontSize:12}}>剩余钻石：0</div>
                                <div className={styles.inputGiftNum}>
                                    <Row>
                                        <Col span={8}>已选礼物：{selectedGiftItem.title}</Col>
                                        <Col span={8}><InputNumber min={1} defaultValue={1} vlue={sendGiftNum}  onChange={(val)=>{this.setState({sendGiftNum:val});}} /></Col>
                                        <Col span={8}><Button>赠送</Button></Col>
                                    </Row>
                                </div>
                            </div>
                            {/*查看主播个人信息 */}
                            <div className={styles.MCSelfMsg}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="个人资料" key="1">
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>身高：</Col><Col span={4}>176CM</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>星座：</Col><Col span={18}>摩羯座</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>职业：</Col><Col span={18}>其他</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>魅力部位：</Col><Col span={18}>耳朵、嘴唇</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}> <Row><Col span={6}>个性标签：</Col><Col span={18}>情感知心、激情四射</Col></Row></div>
                                    <div className={styles.MCSelfMsgItem}><Row><Col span={6}>兴趣爱好：</Col><Col span={18}>听音乐</Col></Row></div>
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
                                                    <Popover content={<div>123123</div>} title="礼物详情">
                                                        <div className={styles.gotGiftIem}>
                                                            <img src='http://img3.tuwandata.com/uploads/play/1629711503976254.png' className={styles.gotGiftIemImg} alt=""/>
                                                            <div className={styles.gotGiftIemMun}>1</div>
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
                                {/* <Tabs defaultActiveKey={MCDetail.palyItem[0]} >
                                {MCDetail.palyItem.map((item,index)=>{return(
                                    <TabPane tab={item} key={item}>
                                        <div className={styles.gameItemTitleMsg}>
                                            <Row>
                                                <Col span={4}>
                                                    <div className={styles.gameItemTitleMsg1}>
                                                        <img src="http://res.tuwan.com/templet/play/teacher/images/sound_3.png" className={styles.gameItemTitleMsgImg} alt="" />
                                                        <div className={styles.gameItemTitleAudio}>
                                                            <div className={styles.gameItemTitleAudioContent}>25</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={8}>
                                                    <div className={styles.gameItemTitleMsg1}>
                                                       <div className={styles.gameItemTitleStation}>{item}</div>
                                                       <div className={styles.gameItemTitleO}>树荫</div>
                                                       <div className={styles.gameItemTitleO}>接单次数：1330次</div>
                                                    </div>
                                                </Col>
                                                <Col span={4}></Col>
                                                <Col span={4}></Col>
                                                <Col span={4}>
                                                    <div className={styles.gameItemTitleMsg1}>
                                                       <div className={styles.gameItemTitlePrice}><span style={{fontSize:30,color:'red'}}>￥140</span>/次</div>
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
                                </Tabs> */}
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
                        {/* <Col span={3}><img src={MCDetail.image}className={styles.oederImg} alt="" /></Col>
                        <Col span={3}>{MCDetail.supervisorName}</Col> */}
                        <Col span={4}/>
                        <Col span={3}>服务：</Col>
                        <Col span={3}><img src="http://res.tuwan.com/templet/play/teacher/images/sound_3.png" className={styles.oederImg} alt="" /></Col>
                        <Col span={4}><span>{selectedGame}</span></Col>
                    </Row>
                </div>
                <div className={styles.plactOrderFormItem}>
                    <Row>
                        <Col span={8}>下单日期：</Col>
                        <Col span={16}>
                            <DatePicker
                                locale={locale}
                                onChange={(val,date)=>{this.setState({orderTime:date})}}
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
                        <Col span={16}><InputNumber min={1} defaultValue={1} value={orderPeriod}  onChange={(val)=>{this.setState({orderPeriod:val,orderPrice:140*val-0});}} /></Col>
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
                        <Col span={6}>总价：{140*Number(orderPeriod)}元</Col>
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


