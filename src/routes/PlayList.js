import React from 'react';
import { Button,Row, Col } from 'antd';
import styles from '../styles/PlayList.css';
import zb01 from '../assets/zb01.jpg';
import zb02 from '../assets/zb02.jpg';
import zb03 from '../assets/zb03.jpg';
import zb05 from '../assets/zb05.jpg';
import zb06 from '../assets/zb06.jpg';
import zb07 from '../assets/zb07.jpg';
import zb08 from '../assets/zb08.jpg';

export default class PlayList extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            gameServiceList:[],//游戏服务
            amuseServiceList:[],//娱乐服务
            selectedServiceIndex:1,//选中的服务类型1-14
            roteTypeList:[],//等级分类列表0是全部
            selectedGradeTyleIndex:0,//选中的等级分类
            supervisorSexList:[],//导师性别列表 0是女神 1是男神 2是全部
            selectedSupervisorSex:2,//选中的导师性别
            sortServiceList:[],//服务排序 0-2 0是热门 1是新人 2是全部
            selectedSsortService:2,
            servicerList:[],//主播列表
        }
    }
    UNSAFE_componentWillMount(){
        const servicerList=[
            {title:'最强王者',supervisorName:'瞳瞳', palyItem:'英雄联盟', price:'200',tips:['激情四射','颜值担当'],image:zb01,},
            {title:'超凡大师',supervisorName:'大司马', palyItem:'绝地求生', price:'1314',tips:['技术大师','逗比闲聊'],image:zb02,},
            {title:'无畏青铜',supervisorName:'德云色', palyItem:'哄睡觉', price:'478',tips:['激情四射','颜值担当'],image:zb03,},
            {title:'荣耀黄金',supervisorName:'PDD', palyItem:'虚拟恋人', price:'456',tips:['激情四射','颜值担当'],image:zb05,},
            {title:'不屈白银',supervisorName:'卢本伟', palyItem:'刺激战场', price:'666',tips:['激情四射','颜值担当'],image:zb05,},
            {title:'华贵白金',supervisorName:'周淑怡', palyItem:'配唱歌', price:'777',tips:['激情四射','颜值担当'],image:zb06,},
            {title:'璀璨钻石',supervisorName:'骚男', palyItem:'无畏先锋', price:'999',tips:['激情四射','颜值担当'],image:zb07,},
            {title:'英勇黑铁',supervisorName:'浪子彦', palyItem:'穿越火线', price:'1456',tips:['激情四射','颜值担当'],image:zb08,},
        ];
        const gameServiceList=[
            {
                title:'线上LOL',
                backgroundPosition:'-254px 0px',
                selectedBackgroundPosition:'-254px -80px',
                gameServiceNum:1,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,},{title:'御姐音',key:8,},{title:'妈音',key:9,},
                ],
            },
            {
                title:'决地求生',
                backgroundPosition:'-856px 0px',
                selectedBackgroundPosition:'-856px -80px',
                gameServiceNum:2,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    
                ],
            },
            {
                title:'王者荣耀',
                backgroundPosition:'-491px 0px',
                selectedBackgroundPosition:'-491px -80px',
                gameServiceNum:3,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,}
                ],
            },
            {
                title:'刺激战场',
                backgroundPosition:'-1068px  0px',
                selectedBackgroundPosition:'-1068px -80px',
                gameServiceNum:4,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,},{title:'御姐音',key:8,}
                ],
            },
            {
                title:'全军出击',
                backgroundPosition:'-1137px 0px',
                selectedBackgroundPosition:'-1137px -80px',
                gameServiceNum:5,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},
                ],
            },
            {
                title:'荒野行动',
                backgroundPosition:'-927px  0px',
                selectedBackgroundPosition:'-927px -80px',
                gameServiceNum:6,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,}
                ],
            },
            {
                title:'第五人格',
                backgroundPosition:'-1358px 0px',
                selectedBackgroundPosition:'-1358px -80px',
                gameServiceNum:7,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,}
                ],
            },
            {
                title:'视频游戏',
                backgroundPosition:'-8px 0px',
                selectedBackgroundPosition:'-8px -80px',
                gameServiceNum:8,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,},{title:'御姐音',key:8,},{title:'妈音',key:9,},
                ],
            }
        ];
        const amuseServiceList=[
            {
                title:'声优聊天',
                backgroundPosition:'-176px 0px',
                selectedBackgroundPosition:'-176px -80px',
                gameServiceNum:9,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,},{title:'御姐音',key:8,},{title:'妈音',key:9,},
                ],
            },
            {
                title:'哄睡觉',
                backgroundPosition:'-787px 0px',
                selectedBackgroundPosition:'-787px -80px',
                gameServiceNum:10,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,},{title:'御姐音',key:8,},{title:'妈音',key:9,},
                ],
            },
            {
                title:'线上歌手',
                backgroundPosition:'-96px 0px',
                selectedBackgroundPosition:'-96px -80px',
                gameServiceNum:11,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,},{title:'御姐音',key:8,},{title:'妈音',key:9,},
                ],
            },
            {
                title:'叫醒',
                backgroundPosition:'-720px 0px',
                selectedBackgroundPosition:'-720px -80px',
                gameServiceNum:12,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,}
                ],
            },
            {
                title:'虚拟恋人',
                backgroundPosition:'-650px 0px',
                selectedBackgroundPosition:'-650px -80px',
                gameServiceNum:13,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'御姐音',key:8,},{title:'妈音',key:9,},
                ],
            },
            {
                title:'声音鉴定',
                backgroundPosition:'-1277px 0px',
                selectedBackgroundPosition:'-1277px -80px',
                gameServiceNum:14,
                roteTypeList:[
                    {title:'全部',key:0,},{title:'青受音',key:1,},{title:'青年音',key:2,},{title:'青叔音',key:3,},{title:'大叔音',key:4,},
                    {title:'少萝音',key:5,},{title:'少女音',key:6,},{title:'少御音',key:7,},{title:'御姐音',key:8,},{title:'妈音',key:9,},
                ],
            },
        ];
        const supervisorSexList=[{title:'全部',key:2},{title:'女神',key:0},{title:'男神',key:1},];
        const sortServiceList=[{title:'综合排序',key:2},{title:'热门',key:0},{title:'新人',key:1},];
        this.setState({
            gameServiceList,
            amuseServiceList,
            roteTypeList: gameServiceList[0].roteTypeList,
            supervisorSexList,
            sortServiceList,
            servicerList,
        })
    }
    componentDidMount(){
    
    }
    //选择游戏服务
    selectGameService(item){
        this.setState({
            selectedServiceIndex:item.gameServiceNum,
            roteTypeList:item.roteTypeList,
            selectedGradeTyleIndex:item.roteTypeList[0].key,
        });
    }
    // 选择娱乐服务
    selectAmuseService(item){
        console.log(item);
        this.setState({
            selectedServiceIndex:item.gameServiceNum,
            roteTypeList:item.roteTypeList,
            selectedGradeTyleIndex:item.roteTypeList[0].key,
        });
    }
    selectedGradeTyle(item){
        this.setState({selectedGradeTyleIndex:item.key});
    }
    selectedSupervisorSex(key){
        this.setState({selectedSupervisorSex:key});
    }
    selectedSsortService(key){
        this.setState({selectedSsortService:key});
    }
    render() {
        const {
            gameServiceList,
            selectedServiceIndex,
            amuseServiceList,
            roteTypeList,
            selectedGradeTyleIndex,
            supervisorSexList,
            selectedSupervisorSex,
            sortServiceList,
            selectedSsortService,
            servicerList,
        }=this.state;
        return ( <div > 
            <div className={styles.container}>
                {/* 各项服务列表 */}
                <div className={styles.playItemsList}>
                    {/* 游戏服务 */}
                    <div className={styles.gameServices}>
                        <Row>
                            <Col span={4}><div className={styles.serviceTitle}>游戏服务</div></Col>
                            <Col span={20}>
                                {gameServiceList.map((item,index)=>{return(
                                    <div className={styles.gameItem} key={index} onClick={this.selectGameService.bind(this,item)}>
                                        <i className={styles.selectI} style={selectedServiceIndex===item.gameServiceNum?{backgroundPosition:item.selectedBackgroundPosition}:{backgroundPosition:item.backgroundPosition}}/>
                                        <br/>
                                        <span style={selectedServiceIndex===item.gameServiceNum?{color:'#fa6543'}:{}}>{item.title}</span>
                                    </div>
                                )})}
                            </Col>
                        </Row>
                    </div>
                    {/* 娱乐服务 */}
                    <div className={styles.gameServices}>
                        <Row>
                            <Col span={4}><div className={styles.serviceTitle}>娱乐服务</div></Col>
                            <Col span={20}>
                                {amuseServiceList.map((item,index)=>{return(
                                    <div className={styles.gameItem} key={index} onClick={this.selectAmuseService.bind(this,item)}>
                                        <i className={styles.selectI} style={selectedServiceIndex===item.gameServiceNum?{backgroundPosition:item.selectedBackgroundPosition}:{backgroundPosition:item.backgroundPosition}}/>
                                        <br/>
                                        <span style={selectedServiceIndex===item.gameServiceNum?{color:'#fa6543'}:{}}>{item.title}</span>
                                    </div>
                                )})}
                            </Col>
                        </Row>
                    </div>
                    {/* 等级分类 */}
                    <div className={styles.gameServices}>
                        <Row>
                            <Col span={4}><div className={styles.serviceTitle}>等级分类</div></Col>
                            <Col span={20}>
                                {roteTypeList.map((item,index)=>{return(
                                    <div className={styles.gameItem2} key={index} onClick={this.selectedGradeTyle.bind(this,item)}>
                                       <div className={styles.selectTip} style={selectedGradeTyleIndex===item.key?{background:'#fa6543',color:'white'}:{color:'#666666'}}>{item.title}</div>
                                    </div>
                                )})}
                            </Col>
                        </Row>
                    </div>
                    {/* 导师性别 */}
                    <div className={styles.gameServices}>
                        <Row>
                            <Col span={4}><div className={styles.serviceTitle}>导师性别</div></Col>
                            <Col span={20}>
                                {supervisorSexList.map((item,index)=>{return(
                                    <div className={styles.gameItem2} key={index} onClick={this.selectedSupervisorSex.bind(this,item.key)}>
                                       <div className={styles.selectTip} style={selectedSupervisorSex===item.key?{background:'#fa6543',color:'white'}:{color:'#666666'}}>{item.title}</div>
                                    </div>
                                )})}
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* 排序按钮 */}
                <div className={styles.sortServiceDiv}>
                    {sortServiceList.map((item,index)=>{return(
                        <Button type={selectedSsortService===item.key?"primary":""} size="large" className={styles.sortBtn} key={index} onClick={this.selectedSsortService.bind(this,item.key)}>{item.title}</Button>
                    )})}
                </div>
                {/* 主播列表 */}
                <Row gutter={20}>
                 <Col span={19}>
                     <Row>
                        {servicerList.map((item,index)=>{return(
                            <Col span={6} className={styles.serviceSpan} key={index}>
                                <div className={styles.serviceItem}>
                                    <img className={styles.serviceImg} alt="" src={zb01}/>
                                    <div className={styles.serviceMsg}>
                                        <div className={styles.serviceMsg1}>
                                            <div className={styles.serviceItemName}>阿银</div>
                                            <div className={styles.serviceItemTip}>少女音</div>
                                        </div>
                                        <div className={styles.serviceMsg1}>
                                            <div className={styles.serviceSexAge} style={{backgroundColor:'#eed7ca'}}>♂♀12</div>
                                            <div className={styles.servicePosition}>维吾尔族哈萨克斯他爸</div>
                                            <div className={styles.servicePrice}>35元/小时</div>
                                        </div>
                                        <div className={styles.serviceMsg2}>
                                            <i className={styles.serviceOnline}></i><span>在线</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )})}
                     </Row>
                 </Col>
                 <Col span={5}>
                    <div className={styles.bangList}>
                        <div className={styles.hotList}>234234</div>
                    </div>
                    <div className={styles.bangList}>
                        <div className={styles.hotList}>234234</div>
                    </div>
                    <div className={styles.bangList}>
                        <div className={styles.hotList}>234234</div>
                    </div>
                 </Col>
                </Row>
            </div>
        </div>)
    }
}


