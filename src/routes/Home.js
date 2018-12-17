import React from 'react';
import { Carousel,Row, Col } from 'antd';
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
        console.log(this.props);
        const homeHotRecommendArr=[
            {title:'最强王者',supervisorName:'瞳瞳', palyItem:'英雄联盟', price:'200',tips:['激情四射','颜值担当'],image:zb01,},
            {title:'超凡大师',supervisorName:'大司马', palyItem:'绝地求生', price:'1314',tips:['技术大师','逗比闲聊'],image:zb02,},
            {title:'无畏青铜',supervisorName:'德云色', palyItem:'哄睡觉', price:'478',tips:['激情四射','颜值担当'],image:zb03,},
            {title:'荣耀黄金',supervisorName:'PDD', palyItem:'虚拟恋人', price:'456',tips:['激情四射','颜值担当'],image:zb05,},
            {title:'不屈白银',supervisorName:'卢本伟', palyItem:'刺激战场', price:'666',tips:['激情四射','颜值担当'],image:zb05,},
            {title:'华贵白金',supervisorName:'周淑怡', palyItem:'配唱歌', price:'777',tips:['激情四射','颜值担当'],image:zb06,},
            {title:'璀璨钻石',supervisorName:'骚男', palyItem:'无畏先锋', price:'999',tips:['激情四射','颜值担当'],image:zb07,},
            {title:'英勇黑铁',supervisorName:'浪子彦', palyItem:'穿越火线', price:'1456',tips:['激情四射','颜值担当'],image:zb08,},
        ];
        const newShowArr =[
             {newShowImage:newShow1,newShowName:'jiajia',newShowPosition:'上海',newShowSex:'famale',newShowAge:21,},
             {newShowImage:newShow2,newShowName:'jiajia',newShowPosition:'上海',newShowSex:'famale',newShowAge:22,},
             {newShowImage:newShow3,newShowName:'jiajia',newShowPosition:'上海',newShowSex:'famale',newShowAge:25,},
             {newShowImage:newShow4,newShowName:'jiajia',newShowPosition:'上海',newShowSex:'famale',newShowAge:23,},
             {newShowImage:newShow5,newShowName:'jiajia',newShowPosition:'上海',newShowSex:'male',newShowAge:24,},
             {newShowImage:newShow6,newShowName:'jiajia',newShowPosition:'上海',newShowSex:'fmale',newShowAge:26,},
        ];
        const exampleHotArr=[
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'famale',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'male',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'male',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'male',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'male',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'famale',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'famale',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'male',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'famale',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {exampleHotImg:example1,exampleHotName:'程思琪',exampleHotPosition:'南通市',exampleHotSex:'famale',exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
        ];
        const exampleGiftArr=[
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'famale',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'male',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'famale',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'famale',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'male',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'famale',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'famale',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'male',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'famale',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
            {exampleGiftImg:example1,exampleGiftName:'程思琪',exampleGiftPosition:'南通市',exampleGiftSex:'male',exampleGiftAge:19,exampleGiftNumber:123,exampleGiftStation:'最强王者',},
        ];
        const exampleRichArr=[
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
            homeHotRecommendArr,
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
    render() {
        const {bannerImgArr,homeHotRecommendArr,newShowArr,exampleHotArr,exampleGiftArr,exampleRichArr}=this.state;
        console.log(exampleRichArr);
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
                            <div className={styles.homeSupervisor}>
                                <div className={styles.homeSupervisorTitle}>{item.title}</div>
                                <img className={styles.homeSupervisorImg} alt="" src={item.image} />
                                <div className={styles.homeSupervisorText}>
                                    <div className={styles.homeSupervisorTextTop}>
                                        <div className={styles.homeSupervisorName}>{item.supervisorName}</div>
                                        <div className={styles.homeSupervisorTips1}>{item.tips[0]}</div>
                                        <div className={styles.homeSupervisorTips2}>{item.tips[1]}</div>
                                    </div>
                                    <div className={styles.homeSupervisorTextBottom}>
                                        <div className={styles.homeSupervisorItem}>{item.palyItem}</div>
                                        <div className={styles.homeSupervisorPrice}><span style={{fontSize:'30px'}}>{item.price}</span>元/小时</div>
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
                                            <div className={item.newShowSex==='male'?styles.newShowPositionMale:styles.newShowPositionFamale}>{item.newShowSex==='male'?'♂':'♀'}{item.newShowAge}</div>
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
                                                    <div className={item.exampleHotSex==='male'?styles.exampleMale:styles.exampleFamale}>{item.exampleHotSex==='male'?'♂':'♀'}{item.exampleHotAge}</div>
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
                                                    <div className={item.exampleGiftSex==='male'?styles.exampleMale:styles.exampleFamale}>{item.exampleGiftSex==='male'?'♂':'♀'}{item.exampleGiftAge}</div>
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

