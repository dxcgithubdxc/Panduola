import React from 'react';
import moment from 'moment';
import styles from '../styles/Enter.css';
import {Row,Col,Input,Radio,DatePicker,Checkbox,Upload,Modal,Button,Icon,Select} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const {Option}=Select;
export default class Enter extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            nickName:'',
            sex:1,
            birthday:"",
            location:"",
            phoneNumber:"",
            QQNumber:"",
            natureList:[],
            checkedNatureList:[],
            natureSign:"",
            APPTopImg:"",// APP首页封面图
            fileList:[],// APP首页封面图fileList
            previewVisible:false,// APP首页封面预览图是否可见
            previewImg:"",// APP首页封面预览图
            stature:"",// 身高
            weight:"",
            job:"请选择",
            interests:"",
            glamourList:[],// 所有魅力部位
            checkedglamourList:[],// 选择的魅力部位
            fileList2:[],// 视频
            serviceList:[],// 所有游戏服务 gameServiceStatus:0 未开通 1审核中 2已开通
            gameServiceNum:0,
            stationImg:"",// 段位封面图
            fileList3:[],// 段位封面图fileList
            previewVisible3:false,// 段位预览图是否可见
            previewImg3:"",// 段位预览图
            LOLID:"",//LOL大区
            LOLArea:"请选择",//LOL大区
            LOLSection:"无段位",//LOL段位
            GKSection:"",//王者段位
        }
    }
    UNSAFE_componentWillMount(){
        console.log(this.props);
        const natureList=['特殊才艺','颜值担当','声音甜美','乖巧粘人','性感知心','激情四射',];
        const glamourList=["眼睛","鼻子","嘴巴","下巴","胸部","大腿","腰部","臀部","手","其他",];
        const serviceList=[
            {title:'线上LOL',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_31540.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_31540.png',gameServiceNum:1,gameServiceStatus:1,},
            {title:'绝地求生',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20014.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20014.png',gameServiceNum:2,gameServiceStatus:0,},
            {title:'王者荣耀',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20008.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20008.png',gameServiceNum:3,gameServiceStatus:1,},
            {title:'刺激战场',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20018.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20018.png',gameServiceNum:4,gameServiceStatus:0,},
            {title:'全军出击',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20019.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20019.png',gameServiceNum:5,gameServiceStatus:2,},
            {title:'荒野行动',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20016.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20016.png',gameServiceNum:6,gameServiceStatus:0,},
            {title:'第五人格',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20020.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20020.png',gameServiceNum:7,gameServiceStatus:0,},
            {title:'视频游戏',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20021.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20021.png',gameServiceNum:8,gameServiceStatus:0,},
            {title:'声优聊天',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20004.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20004.png',gameServiceNum:9,gameServiceStatus:0,},
            {title:'哄睡觉'  ,img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20012.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20012.png',gameServiceNum:10,gameServiceStatus:0,},
            {title:'叫醒'   ,img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20013.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20013.png',gameServiceNum:11,gameServiceStatus:0,},
            {title:'虚拟恋人',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20011.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20011.png',gameServiceNum:12,gameServiceStatus:0,},
            {title:'线上歌手',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20002.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20002.png',gameServiceNum:13,gameServiceStatus:0,},
            {title:'声音鉴定',img:'https://res.tuwan.com/templet/play/images/playinfo/apply_20021.png',selectedImg:'https://res.tuwan.com/templet/play/images/playinfo/apply_hover_20021.png',gameServiceNum:14,gameServiceStatus:0,},
        ];
        const GKSectionList=["倔强黄铜","秩序白银","荣耀黄金","尊贵铂金","永恒钻石","至尊星耀","最强王者","荣耀王者"];
        this.setState({natureList,glamourList,serviceList,});
    }
    //填写昵称
    inputNickName(e){ this.setState({nickName:e.target.value});}
    //选择性别
    changeSex(e){ this.setState({sex:e.target.value});}
    //填写所在地
    inputLocation(e){ this.setState({location:e.target.value});}
    //填写手机号
    inputPhoneNumber(e){ this.setState({phoneNumber:e.target.value});}
    //填写QQ号
    inputQQNumber(e){ this.setState({QQNumber:e.target.value});}
    //选择个性标签
    checkNatureList(list){this.setState({checkedNatureList:list}); }
    // 填写个性签名
    inputNatureSign(e){ this.setState({natureSign:e.target.value});}
    //上传APP首页封面图
    handleChange(file){
        console.log(file);
    }
    //预览APP首页封面图
    handlePreview(file){this.setState({ previewImg: file.url || file.thumbUrl,previewVisible: true,});}
    handleCancel(){this.setState({ previewVisible: false });}

    //上传段位封面图
    handleChange3(file){
        console.log(file);
    }
    //预览段位封面图
    handlePreview3(file){this.setState({ previewImg: file.url || file.thumbUrl,previewVisible: true,});}
    handleCancel3(){this.setState({ previewVisible: false });}
    //填写身高
    inputStature(e){ this.setState({stature:e.target.value});}
    //填写体重
    inputWeight(e){ this.setState({weight:e.target.value});}
    //填写爱好
    inputInterests(e){ this.setState({interests:e.target.value});}
    //选择职业
    selectJob(value){this.setState({job:value});}
    //选择魅力部位
    checkGlamourList(list){this.setState({checkedglamourList:list}); }
    //选择开通服务
    selectGameServiceNum(item){
        if(item.gameServiceStatus === 0){

            this.setState({gameServiceNum:item.gameServiceNum});
        }
        
    }
    // 填写LOLID
    inputLOLID(e){ this.setState({LOLID:e.target.value});}
    //选择LOL大区
    selectLOLArea(value){this.setState({LOLArea:value});}
    //选择LOL段位
    selectLOLSection(value){this.setState({LOLSection:value});}
    // 选择王者荣耀段位
    changeGKSection(e){ this.setState({GKSection:e.target.value});}
    //提交表单数据
    onSubmit(){
        console.log(123123);
    }
    render() {
        const{
            nickName,
            sex,
            location,
            phoneNumber,
            QQNumber,
            natureList,
            checkedNatureList,
            natureSign,
            fileList,APPTopImg,
            previewVisible,
            previewImg,
            stature,
            weight,
            job,
            interests,
            glamourList,
            checkedglamourList,
            fileList2,
            serviceList,
            gameServiceNum,
            stationImg,// 段位封面图
            fileList3,// 段位封面图fileList
            previewVisible3,// 段位预览图是否可见
            previewImg3,// 段位预览图
            LOLID,//LOLID
            LOLArea,//LOL大区
            LOLSection,//LOL段位
            GKSection,//王者段位
        }=this.state;
        return ( <div > 
            <div className={styles.container}>
                <div className={styles.partTop}><span className={styles.partTitle}>▎基本资料</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.partTopMust}>标题标*为必填项，请务必填写真实资料</span></div>
                {/* 基本资料必填内容 */}
                <div className={styles.partContent}>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>昵称：</div></Col>
                            <Col span={20}><div className={styles.partItemDiv}><Input placeholder="请填写昵称" className={styles.partItemInput} value={nickName} onChange={this.inputNickName.bind(this)} /></div></Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>性别：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}>
                                    <RadioGroup onChange={this.changeSex.bind(this)} value={sex}>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={0}>女</Radio>
                                    </RadioGroup>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>出生日期：</div></Col>
                            <Col span={20}><div className={styles.partItemDiv}><DatePicker locale={locale} placeholder="请选择日期"  defaultValue={moment('2019-01-01','YYYY-MM-DD')} format={'YYYY-MM-DD'} onChange={(date, dateString)=>{this.setState({birthday:dateString})}} /></div></Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>所在地（省市）：</div></Col>
                            <Col span={20}><div className={styles.partItemDiv}><Input placeholder="例：河南省郑州市" className={styles.partItemInput} value={location} onChange={this.inputLocation.bind(this)} /></div></Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>手机号：</div></Col>
                            <Col span={20}><div className={styles.partItemDiv}><Input placeholder="请输入手机号" className={styles.partItemInput} value={phoneNumber} onChange={this.inputPhoneNumber.bind(this)} /></div></Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>QQ：</div></Col>
                            <Col span={20}><div className={styles.partItemDiv}><Input placeholder="请输入QQ号" className={styles.partItemInput} value={QQNumber} onChange={this.inputQQNumber.bind(this)} /></div></Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={7}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>个性标签（请选择两项，多选则取前两项）：</div></Col>
                            <Col span={17}>
                                <div className={styles.partItemDiv}>
                                    <CheckboxGroup options={natureList} value={checkedNatureList} onChange={this.checkNatureList.bind(this)} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>个性签名：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}><Input placeholder="请输入个性签名" value={natureSign} onChange={this.inputNatureSign.bind(this)} /></div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>APP主页封面：</div></Col>
                            <Col span={4}>
                                <div className={styles.partItemDiv2}>
                                    <Upload
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview.bind(this)}
                                        onChange={this.handleChange.bind(this)}
                                    >
                                        <Button><Icon type="upload" />上传</Button>
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImg} />
                                    </Modal>
                                </div>
                            </Col>
                            {fileList.length >= 1 ?<Col span={4}><div className={styles.partItemDiv2}><img style={{width:100,height:100}} src={APPTopImg} alt="" /></div></Col>:""}
                            <Col span={12}><div className={styles.partItemDiv}>请上传您的主页封面照，建议大小为：750*1334</div></Col>
                        </Row>
                    </div>
                </div>
                {/* 选填资料 */}
                <div className={styles.partTop}><span className={styles.partTitle}>▎Tips</span>&nbsp;&nbsp;&nbsp;&nbsp;以下资料为选填内容，资料完整的陪玩导师优先获得首页推荐特权</div>
                <div className={styles.partContent}>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}>（选填）身高（cm）：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}><Input placeholder="身高" className={styles.partItemInput} value={stature} onChange={this.inputStature.bind(this)} /></div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}>（选填）体重（kg）：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}><Input placeholder="体重" className={styles.partItemInput} value={weight} onChange={this.inputWeight.bind(this)} /></div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}>（选填）兴趣爱好：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}><Input placeholder="请输入兴趣爱好" value={interests} onChange={this.inputInterests.bind(this)} /></div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}>（选填）职业：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}>
                                <Select defaultValue={job} className={styles.partItemInput} onChange={this.selectJob.bind(this)}>
                                    <Option value="学生">学生</Option>
                                    <Option value="上班族">上班族</Option>
                                    <Option value="主播">主播</Option>
                                    <Option value="医生">医生</Option>
                                    <Option value="护士">护士</Option>
                                    <Option value="模特">模特</Option>
                                    <Option value="教师">教师</Option>
                                    <Option value="公务员">公务员</Option>
                                    <Option value="个体经营">个体经营</Option>
                                    <Option value="其他">其他</Option>
                                </Select>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={8}><div className={styles.partItemDiv}>（选填）魅力部位（不超过3项，多选则取前3项）：</div></Col>
                            <Col span={16}>
                                <div className={styles.partItemDiv}>
                                    <CheckboxGroup options={glamourList} value={checkedglamourList} onChange={this.checkGlamourList.bind(this)} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}>（选填）上传视频：</div></Col>
                            <Col span={20}></Col>
                        </Row>
                    </div>
                </div>
                {/* 开通服务 */}
                <div className={styles.partTop}><span className={styles.partTitle}>▎开通服务</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.partTopMust}>标题标*为必填项，请务必填写真实资料（每人最多开通7项服务）</span></div>
                <div className={styles.partContent}>
                    <div className={styles.partItem}>
                        <Row>
                            {serviceList.map((item,index)=>{return(
                                <Col span={4} key={index}>
                                    <div className={styles.serviceItem}>
                                        <img className={styles.serviceItemImg} onClick={this.selectGameServiceNum.bind(this,item)} src={gameServiceNum===item.gameServiceNum||item.gameServiceStatus >= 1?item.selectedImg:item.img}alt=""/>
                                        <div className={styles.serviceItemName}>{item.title}</div>
                                        <div className={styles.serviceIteStatus} style={item.gameServiceStatus===0?{color:'#999999'}:item.gameServiceStatus===1?{color:'red'}:{color:'#1dd3b8'}}>{item.gameServiceStatus===0?"未开通":item.gameServiceStatus===1?"审核中":"已开通"}</div>
                                    </div>
                                </Col>
                            )})}
                        </Row>
                    </div>
                </div>
                <div className={styles.partItem}>
                    <Row>
                        <Col span={3}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>服务封面照：</div></Col>
                        {fileList3.length >= 1 ?<Col span={2}><div className={styles.partItemDiv2}><img style={{width:100,height:100}} src={stationImg} alt="" /></div></Col>:""}
                        <Col span={4}>
                            <div className={styles.partItemDiv2}>
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={fileList3}
                                    onPreview={this.handlePreview3.bind(this)}
                                    onChange={this.handleChange3.bind(this)}
                                >
                                    <Button><Icon type="upload" />上传</Button>
                                </Upload>
                                <Modal visible={previewVisible3} footer={null} onCancel={this.handleCancel3.bind(this)}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImg3} />
                                </Modal>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className={styles.partItemDiv2}>
                                <div style={{fontSize:'14px',lineHeight:'20px'}}> 
                                    申请娱乐服务时请上传您的段位截图（需包含个人ID）<br/>
                                    申请LOL游戏时填写线上LOL相关的描述。男段位要求：电一钻Ⅰ以上，其他区大师王者；女段位要求：黄金以上<br/>
                                    申请其他游戏时请上传您的段位截图（需包含个人ID）,并填写游戏相关的描述<br/>
                                   建议大小为：750*1334
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={styles.partItem}>
                    <Row>
                        <Col span={4}><div className={styles.partItemDiv}>（选填）服务描述：</div></Col>
                        <Col span={20}>123123</Col> 
                    </Row>
                </div>
                <div className={styles.partItem}>
                    <Row>
                        <Col span={4}><div className={styles.partItemDiv}>（选填）语音介绍：</div></Col>
                        <Col span={20}>123123</Col> 
                    </Row>
                </div>
                {/* LOL必要条件 */}
                <div style={gameServiceNum===1?{display:'block'}:{display:'none'}}>
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>游戏ID：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}><Input placeholder="请输入游戏ID" className={styles.partItemInput} value={LOLID} onChange={this.inputLOLID.bind(this)} /></div>
                            </Col>
                        </Row>
                    </div>
                    {/* 游戏大区 */}
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>所在大区：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}>
                                <Select defaultValue={LOLArea} className={styles.partItemInput} onChange={this.selectLOLArea.bind(this)}>
                                    <Option value="艾欧尼亚">艾欧尼亚</Option>
                                    <Option value="祖安">祖安</Option>
                                    <Option value="诺克萨斯">诺克萨斯</Option>
                                    <Option value="班德尔城">班德尔城</Option>
                                    <Option value="皮尔特沃夫">皮尔特沃夫</Option>
                                    <Option value="战争学院">战争学院</Option>
                                    <Option value="巨神峰">巨神峰</Option>
                                    <Option value="雷瑟守备">雷瑟守备</Option>
                                    <Option value="裁决之地">裁决之地</Option>
                                    <Option value="黑色玫瑰">黑色玫瑰</Option>
                                    <Option value="暗影岛">暗影岛</Option>
                                    <Option value="钢铁烈阳">钢铁烈阳</Option>
                                    <Option value="水晶之痕">水晶之痕</Option>
                                    <Option value="均衡教派">均衡教派</Option>
                                    <Option value="影流">影流</Option>
                                    <Option value="守望之海">守望之海</Option>
                                    <Option value="征服之海">征服之海</Option>
                                    <Option value="卡拉曼达">卡拉曼达</Option>
                                    <Option value="皮城戒备">裁决之地</Option>
                                    <Option value="比尔吉沃特">比尔吉沃特</Option>
                                    <Option value="德玛西亚">德玛西亚</Option>
                                    <Option value="弗雷尔卓德">弗雷尔卓德</Option>
                                    <Option value="无畏先锋">无畏先锋</Option>
                                    <Option value="恕瑞玛">恕瑞玛</Option>
                                    <Option value="扭曲丛林">扭曲丛林</Option>
                                    <Option value="巨龙之巢">巨龙之巢</Option>
                                </Select>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* 游戏段位 */}
                    <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}><span className={styles.partTopMust}>*</span>游戏段位：</div></Col>
                            <Col span={20}>
                                <div className={styles.partItemDiv}>
                                <Select defaultValue={LOLSection} className={styles.partItemInput} onChange={this.selectLOLSection.bind(this)}>
                                    <Option value="最强王者">最强王者</Option>
                                    <Option value="超凡大师">超凡大师</Option>
                                    <Option value="诺克萨斯">诺克萨斯</Option>
                                    <Option value="璀璨钻石I">璀璨钻石I</Option>
                                    <Option value="璀璨钻石II">璀璨钻石II</Option>
                                    <Option value="璀璨钻石III">璀璨钻石III</Option>
                                    <Option value="璀璨钻石IV">璀璨钻石IV</Option>
                                    <Option value="璀璨钻石V">璀璨钻石V</Option>
                                    <Option value="华贵铂金I">华贵铂金I</Option>
                                    <Option value="华贵铂金I">华贵铂金II</Option>
                                    <Option value="华贵铂金III">华贵铂金III</Option>
                                    <Option value="华贵铂金IV">华贵铂金IV</Option>
                                    <Option value="华贵铂金V">华贵铂金V</Option>
                                    <Option value="荣耀黄金I">荣耀黄金I</Option>
                                    <Option value="荣耀黄金II">荣耀黄金II</Option>
                                    <Option value="荣耀黄金III">荣耀黄金III</Option>
                                    <Option value="荣耀黄金IV">荣耀黄金IV</Option>
                                    <Option value="荣耀黄金V">荣耀黄金V</Option>
                                    <Option value="不屈白银I">不屈白银I</Option>
                                    <Option value="不屈白银II">不屈白银II</Option>
                                    <Option value="不屈白银III">不屈白银III</Option>
                                    <Option value="不屈白银IV">不屈白银IV</Option>
                                    <Option value="不屈白银V">不屈白银V</Option>
                                    <Option value="英勇黄铜I">英勇黄铜I</Option>
                                    <Option value="英勇黄铜II">英勇黄铜II</Option>
                                    <Option value="英勇黄铜III">英勇黄铜III</Option>
                                    <Option value="英勇黄铜IV">英勇黄铜IV</Option>
                                    <Option value="英勇黄铜V">英勇黄铜V</Option>
                                </Select>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* 王者必要条件 */}
                <div style={gameServiceNum===3?{display:'block'}:{display:'none'}}>
                <div className={styles.partItem}>
                        <Row>
                            <Col span={4}><div className={styles.partItemDiv}>（选填）游戏段位：</div></Col>
                            <Col span={20}><div className={styles.partItemDiv}>
                                    <RadioGroup onChange={this.changeGKSection.bind(this)} value={GKSection}>
                                        <Radio value="倔强黄铜">倔强黄铜</Radio>
                                        <Radio value="秩序白银">秩序白银</Radio>
                                        <Radio value="荣耀黄金">荣耀黄金</Radio>
                                        <Radio value="尊贵铂金">尊贵铂金</Radio>
                                        <Radio value="永恒钻石">永恒钻石</Radio>
                                        <Radio value="至尊星耀">至尊星耀</Radio>
                                        <Radio value="最强王者">最强王者</Radio>
                                        <Radio value="荣耀王者">荣耀王者</Radio>
                                    </RadioGroup>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* 提交表单按钮 */}
                <div className={styles.submitDiv}><Button type="primary" style={{width:250}} size="large" className={styles.submitBtn} onClick={this.onSubmit.bind(this)}>确认提交</Button></div>
            </div>
        </div>)
    }
}


