import React from 'react';
import { Carousel,Row, Col } from 'antd';
import *as programHost from '../utils/ajax';
import styles from '../styles/Home.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';
import zb01 from '../assets/zb01.jpg';
import zb02 from '../assets/zb02.jpg';
import zb03 from '../assets/zb03.jpg';
import zb05 from '../assets/zb05.jpg';
import zb06 from '../assets/zb06.jpg';
import zb07 from '../assets/zb07.jpg';
import zb08 from '../assets/zb08.jpg';
import newShow1 from '../assets/newShow1.jpg';
import newShow2 from '../assets/newShow2.jpg';
import newShow3 from '../assets/newShow3.jpg';
import newShow4 from '../assets/newShow4.jpg';
import newShow5 from '../assets/newShow5.jpg';
import newShow6 from '../assets/newShow6.jpg';
import example1 from '../assets/example1.jpg';
import { message } from 'antd';
const store=require('store');
export default class Home extends React.Component {
	constructor(props) {
        super(props);
        this.state={
        a:1,
        bannerImgArr:[],
        homeHotRecommendArr:[],
        newShowArr:[],
        exampleHotArr:[],
        exampleGiftArr:[],
        }
           
    }
    UNSAFE_componentWillMount(){
        const content = this;
        //获取热门主播列表
        fetch(`${programHost.APIhost}/user/view/anchor/list/1/8`, {
            method: 'GET',
            dataType: 'json',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'text/plain;charset=UTF-8',
            }),
        }).then((res) => {
            res.json().then((data) => {
            console.log(data);
            content.setState({homeHotRecommendArr:data.resource});
            });
        });
        fetch(`${programHost.APIhost}/user/consumption/rank/1/10`, {
            method: 'POST',
            dataType: 'json',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'text/plain;charset=UTF-8',
            }),
        }).then((res) => {
            res.json().then((data) => {
            console.log(data);
            if(data.resource.length===0){
                message.warn('还没有产生用户消费榜单！！');
            }else{
                // Todo：设置用户消费榜单

            }
            
            });
        });
        const newShowArr =[
             {newShowImage:newShow1,newShowName:'jiajia',newShowPosition:'上海',newShowSex:1,newShowAge:21,},
             {newShowImage:newShow2,newShowName:'jiajia',newShowPosition:'上海',newShowSex:1,newShowAge:22,},
             {newShowImage:newShow3,newShowName:'jiajia',newShowPosition:'上海',newShowSex:1,newShowAge:25,},
             {newShowImage:newShow4,newShowName:'jiajia',newShowPosition:'上海',newShowSex:1,newShowAge:23,},
             {newShowImage:newShow5,newShowName:'jiajia',newShowPosition:'上海',newShowSex:0,newShowAge:24,},
             {newShowImage:newShow6,newShowName:'jiajia',newShowPosition:'上海',newShowSex:'fmale',newShowAge:26,},
        ];
        const exampleHotArr=[//热度榜
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
        ];
        const exampleGiftArr=[//礼物榜
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:1,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:0,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:1,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:1,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:0,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:1,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:1,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:0,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:1,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:0,exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
        ];
        const exampleRichArr=[//富豪榜
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
            {exampleRichImg:example1,exampleRichName:'xifeng',exampleRichNumber:10086,},
        ];
        this.setState({
            bannerImgArr:[banner1,banner2,banner3,banner4,banner5],
            // homeHotRecommendArr,
            newShowArr,
            exampleHotArr,
            exampleGiftArr,
            exampleRichArr,
        });
    }
    componentDidMount(){}
    updateHomeHotRecommend(){
        console.log('换一批');
    }
    //查看主播个人主页
    toDetails(item){
        console.log(item);
        const{history}=this.props;
        // 获取主播的信息
        fetch(`${programHost.APIhost}/user/get/anchor/info/${item._id}`, {
            method: 'GET',
            dataType: 'json',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'text/plain;charset=UTF-8',
            }),
        }).then((res) => {
            res.json().then((data) => {
            store.set("mcdetail",data.resource);
            history.push({pathname:'/mcdetails'});
            });
        });
        
    }
    render() {
        const {bannerImgArr,homeHotRecommendArr,newShowArr,exampleHotArr,exampleGiftArr,exampleRichArr}=this.state;
        // console.log(exampleRichArr);
        return (<div >
            {/**Banner轮播图*/}
            <div className={styles.carouselContainer}>
                <div className={styles.bannerContainer}>
                    <Carousel autoplay>
                        {bannerImgArr.map((item,index)=>{ return(<div key={index}><img className={styles.carouselItem} alt="" src={item}/></div>)})}
                    </Carousel>
                </div>
            </div>
            {/*页面主体*/}
            <div className={styles.container}>
            {/**热门推荐*/}
                <div className={styles.homeHotRecommend}>
                    <div className={styles.homeHotRecommendText}>热门推荐</div>
                    <div className={styles.changeHomeHotRecommend}onClick={this.updateHomeHotRecommend.bind(this)}>换一批</div>
                </div>
                {/**热门推荐列表*/}
                <Row gutter={20}>
                    {homeHotRecommendArr.map((item,index)=>{return(
                        <Col span={6} key={index} className={styles.homeHotRecommendCol}>
                            <div className={styles.homeSupervisor} onClick={()=>{this.toDetails(item);}}>
                                <div className={styles.homeSupervisorTitle}>{item.game?item.game.service_gameLevel:666}</div>
                                <img className={styles.homeSupervisorImg} alt="" src={zb01} />
                                <div className={styles.homeSupervisorText}>
                                    <div className={styles.homeSupervisorTextTop}>
                                        <div className={styles.homeSupervisorName}>{item.nickname}</div>
                                        <div className={styles.homeSupervisorTips1}>{item.labels[0]}</div>
                                        <div className={styles.homeSupervisorTips2}>{item.labels[1]}</div>
                                    </div>
                                    <div className={styles.homeSupervisorTextBottom}>
                                        <div className={styles.homeSupervisorItem}>{item.game?item.game.title:666}</div>
                                        <div className={styles.homeSupervisorPrice}><span style={{fontSize:'30px'}}>{item.game?item.game.price:666}</span>元/小时</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )})}
                </Row>
                {/**新秀推荐*/}
                <div className={styles.newShow}>
                    <div className={styles.newShowTitle}>新秀推荐</div>
                    <div className={styles.newShowList}>
                        <Row gutter={16}>
                            {newShowArr.map((item,index)=>{return(
                                <Col span={4} key={index}>
                                    <div className={styles.newShowItem}>
                                        <img className={styles.newShowImage} src={item.newShowImage} alt="" />
                                        <div className={styles.newShowName}>{item.newShowName}</div>
                                        <div className={styles.newShowItemText}>
                                        <div className={styles.newShowItem1}>
                                            <div className={styles.newShowPosition1}>{item.newShowPosition}</div>
                                        </div>
                                        <div className={styles.newShowItem1}>
                                            <div className={item.newShowSex===0?styles.newShowPositionMale:styles.newShowPositionFamale}>{item.newShowSex===0?'♂':'♀'}{item.newShowAge}</div>
                                        </div>
                                        </div>
                                    </div>
                                </Col>
                            )})}
                        </Row>
                    </div>
                </div>
                {/*榜单*/}
                <div className={styles.exampleList}>
                    <Row gutter={20}>
                        {/*热搜榜*/}
                        <Col span={8}>
                            <div className={styles.example}>
                                <div className={styles.exampleTitle}><i className={styles.icon1}></i>热度榜</div>
                                    {exampleHotArr.map((item,index)=>{return(
                                        <div className={styles.exampleItem} key={index}>
                                            <img className={styles.exampleItemImg} alt="" src={item.exampleHotImg}/>
                                            <div className={styles.exampleItemDetail}>
                                                <div className={styles.exampleItemDetail0}>
                                                    <div className={styles.exampleName}>{item.exampleHotName}</div>
                                                    <div className={item.exampleHotSex===0?styles.exampleMale:styles.exampleFamale}>{item.exampleHotSex===0?'♂':'♀'}{item.exampleHotAge}</div>
                                                    <div className={styles.examplePosition}>{item.exampleHotPosition}</div>
                                                </div>
                                                <div className={styles.exampleItemDetail0}>
                                                    <div className={styles.exampleStation}>{item.exampleHotStation}</div>
                                                    <div className={styles.exampleTimes}>接单：{item.exampleHotTimes}次</div>
                                                </div>
                                            </div>
                                        </div>
                                    )})}
                            </div>
                        </Col>
                        {/*礼物榜*/}
                        <Col span={8}>
                            <div className={styles.example}>
                                <div className={styles.exampleTitle}><i className={styles.icon2}></i>礼物榜</div>
                                    {exampleGiftArr.map((item,index)=>{return(
                                        <div className={styles.exampleItem} key={index}>
                                            <img className={styles.exampleItemImg} alt="" src={item.exampleGiftImg}/>
                                            <div className={styles.exampleItemDetail}>
                                                <div className={styles.exampleItemDetail0}>
                                                    <div className={styles.exampleName}>{item.exampleGiftName}</div>
                                                    <div className={item.exampleGiftSex===0?styles.exampleMale:styles.exampleFamale}>{item.exampleGiftSex===0?'♂':'♀'}{item.exampleGiftAge}</div>
                                                    <div className={styles.examplePosition}>{item.exampleGiftPosition}</div>
                                                </div>
                                                <div className={styles.exampleItemDetail0}>
                                                    <div className={styles.exampleStation}>{item.exampleGiftStation}</div>
                                                    <div className={styles.exampleTimes}>礼物值：{item.exampleGiftNumber}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )})}
                            </div>
                        </Col>
                        {/*消费榜*/}
                        <Col span={8}>
                            <div className={styles.example}>
                                <div className={styles.exampleTitle}><i className={styles.icon3}></i>消费榜</div>
                                    {exampleRichArr.map((item,index)=>{return(
                                        <div className={styles.exampleItem} key={index}>
                                            <img className={styles.exampleItemImg} alt="" src={item.exampleRichImg}/>
                                            <div className={styles.exampleItemDetail}>
                                                <div className={styles.richName}>{item.exampleRichName}</div>
                                                <div className={styles.richNumber}>
                                                    <div className={styles.richNumberItem}>{item.exampleRichNumber}</div>
                                                    <div style={{marginRight:'0px',textAlign:'right',color:'#f2394c',fontSize:'11px',}}>贡献</div>
                                                </div>
                                            </div>
                                        </div>
                                    )})}
                                    
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>{/*页面主体*/}
        </div>)
    }
}

