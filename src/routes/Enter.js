import React from 'react';
import styles from '../styles/Enter.css';
import {Row,Col,Input,Radio,DatePicker,Checkbox,Upload,Modal,Button,Icon} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
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

        }
    }
    UNSAFE_componentWillMount(){
        console.log(this.props);
        const natureList=['特殊才艺','颜值担当','声音甜美','乖巧粘人','性感知心','激情四射',];
        this.setState({natureList})
    }
    //填写昵称
    inputNickName(e){ this.setState({nickName:e.target.value});}
    //选择性别
    changeSex(e){ this.setState({sex:e.target.value});}
    //选择生日
    changeBirthday(date, dateString) {this.setState({birthday:dateString})}
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
    render() {
        const{nickName,sex,location,phoneNumber,QQNumber,natureList,checkedNatureList,natureSign,fileList,APPTopImg,previewVisible,previewImg}=this.state;
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
                            <Col span={20}><
                                div className={styles.partItemDiv}>
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
                            <Col span={20}><div className={styles.partItemDiv}><DatePicker locale={locale} placeholder="请选择日期" onChange={this.changeBirthday.bind(this)} /></div></Col>
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
                                <div className={styles.partItemDiv}>
                                <Input placeholder="请输入个性签名" value={natureSign} onChange={this.inputNatureSign.bind(this)} />
                                </div>
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
                                        {fileList.length >= 1 ? <img src={APPTopImg} alt="" />:<Button><Icon type="upload" />上传</Button>}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImg} />
                                    </Modal>
                                </div>
                            </Col>
                            <Col span={16}><div className={styles.partItemDiv}>请上传您的主页封面照，建议大小为：750*1334</div></Col>
                        </Row>
                    </div>
                </div>
                {/* 选填资料 */}
                <div className={styles.partTop}><span className={styles.partTitle}>▎Tips</span>&nbsp;&nbsp;&nbsp;&nbsp;以下资料为选填内容，资料完整的陪玩导师优先获得首页推荐特权</div>
            </div>
        </div>)
    }
}


