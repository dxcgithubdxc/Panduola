import React from 'react';
import {Row,Col,Input,Radio,DatePicker,Checkbox,Upload,Modal,Button,Icon,Select} from 'antd';
import zb01 from '../assets/zb01.jpg';
import *as programHost from '../utils/ajax';
import styles from '../styles/SelfDetails.css';
const store=require('store');
export default class SelfDetails extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            previewVisible:false,
            editSafeCenterVisible:false,
            fileList:[],
            userInfo:{},
            avtor:"",
            previewImg:"",
            nickName:"",
            QQNumber:"",
            phoneNumber:"",
            oldPassword:"",
            newPassword:"",
            newPassword2:"",
        }
    }
    UNSAFE_componentWillMount(){
        //根据userName查询头像、username
        const userName=store.get("username");
        if(userName){
            const content =this;
            //联网获取userinfo
            return fetch(`${programHost.APIhost}/user/info`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth('/user/info'),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
            console.log(response);
            response.json().then((res) => {
                console.log(res);
                if(res.statusCode===107){
                    content.setState({userInfo:res.resource});
                }
                },(data) => {
                console.log(data)
            });
            });
        }
       
    }
    //上传头像
    handleChange(file){
        console.log(file);
    }
    //预览头像
    handlePreview(file){this.setState({ previewImg: file.url || file.thumbUrl,previewVisible: true,});}
    handleCancel(){this.setState({ previewVisible: false });}
    //确认修改基本信息
    sureReviseBasic(){
        const{avtor,nickName,QQNumber}=this.state;
    }
    //确认修改安全中心
    sureReviseSafe(){
        const{phoneNumber,oldPassword,newPassword,newPassword2}=this.state;
        // console.log()
    }
    //取消修改安全中心
    cancelRevise(){
        return this.emptyState();
    }
    //清空安全中心表单
    emptyState(){
        this.setState({
            editSafeCenterVisible:false,
            phoneNumber:"",
            oldPassword:"",
            newPassword:"",
            newPassword2:"",
        })
    }
    render() {
        const{userInfo,fileList,previewVisible,previewImg,editSafeCenterVisible,nickName,QQNumber,phoneNumber,oldPassword,newPassword,newPassword2}=this.state;
        return ( <div > 
            <div className={styles.container}>
            {/* 基本资料 */}
                <div className={styles.pageTitle}>▎基本资料</div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}><img className={styles.selfDetailsImg} alt="" src={zb01}/></Col>
                        <Col span={4}>
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview.bind(this)}
                                onChange={this.handleChange.bind(this)}
                            >
                               {fileList.length >=1 ? null : <Button><Icon type="upload" />上传</Button>} 
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                                <img alt="example" style={{ width: '100%' }} src={previewImg} />
                            </Modal>
                        </Col>
                        <Col span={16}>支持jpg、gif、png、或bmp格式的图片，文件必须小于1M</Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>昵称：</Col>
                        <Col span={20}><Input value={nickName} onChange={(e)=>{this.setState({nickName:e.target.value});}} size="large" className={styles.selfDetailsItemInput}/></Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>QQ号：</Col>
                        <Col span={20}><Input value={QQNumber} onChange={(e)=>{this.setState({QQNumber:e.target.value});}} size="large" className={styles.selfDetailsItemInput}/></Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <div style={{textAlign:'center'}}><Button size="large" className={styles.submitButton} type="primary">点击修改基本信息</Button></div>
                </div>
                {/* 安全中心 */}
                <div className={styles.pageTitle}>▎安全中心</div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>用户名：</Col>
                        <Col span={20}>{userInfo.username}</Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>手机号：</Col>
                        <Col span={20}>{userInfo.mobile}</Col>
                    </Row>
                </div>
                
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>密码：</Col>
                        <Col span={20}>************</Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <div style={{textAlign:'center'}}><Button size="large" className={styles.submitButton} type="primary" onClick={()=>{this.setState({editSafeCenterVisible:true})}}>点击修改</Button></div>
                </div>
            </div>
            {/*  */}
            <Modal
          title="修改安全中心"
          cancelText="取消"
          okText="确认"
          visible={editSafeCenterVisible}
          onOk={()=>{this.sureReviseSafe()}}
          onCancel={()=>{this.cancelRevise()}}
        >
           <div className={styles.editSafeCenterItem}>
               <Row>
                   <Col span={5}>手机号：</Col>
                   <Col span={19}><Input value={phoneNumber} onChange={(e)=>{this.setState({phoneNumber:e.target.value});}} className={styles.selfDetailsItemInput}/></Col>
               </Row>
           </div>
           <div className={styles.editSafeCenterItem}>
               <Row>
                   <Col span={5}>原密码：</Col>
                   <Col span={19}><Input value={oldPassword} onChange={(e)=>{this.setState({oldPassword:e.target.value});}} type="password" className={styles.selfDetailsItemInput}/></Col>
               </Row>
           </div>
           <div className={styles.editSafeCenterItem}>
               <Row>
                   <Col span={5}>新密码：</Col>
                   <Col span={19}><Input value={newPassword} onChange={(e)=>{this.setState({newPassword:e.target.value});}} type="password" className={styles.selfDetailsItemInput}/></Col>
               </Row>
           </div>
           <div className={styles.editSafeCenterItem}>
               <Row>
                   <Col span={5}>确认新密码：</Col>
                   <Col span={19}><Input value={newPassword2} onChange={(e)=>{this.setState({newPassword2:e.target.value});}} type="password" className={styles.selfDetailsItemInput}/></Col>
               </Row>
           </div>
        </Modal>
        </div>)
    }
}


