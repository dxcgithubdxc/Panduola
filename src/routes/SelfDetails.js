import React from 'react';
import {Row,Col,Input,Radio,DatePicker,Checkbox,Upload,Modal,Button,Icon,Select} from 'antd';
import zb01 from '../assets/zb01.jpg';
import *as programHost from '../utils/ajax';
import styles from '../styles/SelfDetails.css';
import { message } from 'antd';
const store=require('store');
export default class SelfDetails extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            editSafeCenterVisible:false,
            fileList:[],
            userInfo:{},
            avtor:"", //touxiang
            previewImg:'',
            userId:'',
            previewVisible:false,
            upToken:'',
            nickName:"",// 昵称
            QQNumber:"",// QQ
            username:"",
            phoneNumber:"",// 电话
            oldPassword:"",// 原密码
            newPassword:"",// 新密码
            newPassword2:"",// 确认新密码
        }
    }
    UNSAFE_componentWillMount(){
        //根据userName查询头像、username
        const userName=store.get("username");
        if(userName){
            const content =this;
            //七牛uptoken
            fetch(`https://www.neptune66.cn/zhaoliangji/admin/goods/getPanDuoLaQiNiuUpToken`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    // 'Authorization':programHost.getAuth('/user/apply/info'),// 除登录之外，获取登录的token都不需要username和password
                }),
                }).then((response) => {
                response.json().then((res) => {
                    console.log(res);
                    if(res.code===1){
                        content.setState({upToken:res.data.upToken});
                    }
                    },(data) => {
                    console.log(data)
                });
            });
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
                    content.setState({
                        userId:res.resource._id,
                        avtor:res.resource.headerImg,
                        nickName:res.resource.nickname,
                        QQNumber:res.resource.qq,
                        username:res.resource.username,
                        phoneNumber:res.resource.mobile,
                    });
                }
                },(data) => {
                console.log(data)
            });
            });
        }
       
    }
    //上传头像
    handleChange(file){ console.log(file); this.setState({fileList:file.fileList,avtor:file.file.status==="done"?"http://panduola.media.neptune66.cn/"+file.file.response.hash:""})}
    handlePreview(file){this.setState({ previewImg: file.url || file.thumbUrl,previewVisible: true,});}
    handleCancel(){this.setState({ previewVisible: false });}
    //确认修改基本信息
    sureReviseBasic(){
        const{avtor,nickName,QQNumber,userId}=this.state;
        const content = this;
        const sbdata={
            "headerImg":avtor,
            "qq":QQNumber,
        };
        console.log(sbdata);
        fetch(`${programHost.APIhost}/user/${userId}`, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(sbdata),
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth(`/user/${userId}`),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
            console.log(response);
            response.json().then((res) => {
                console.log(res);
                if(res.statusCode===105){
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
    //确认修改安全中心
    sureReviseSafe(){
        const{phoneNumber,oldPassword,newPassword,newPassword2,userId}=this.state;
        if(oldPassword===''||oldPassword===' '){message.warn('请填写原密码');return;}
        if(newPassword===''||newPassword2===''||newPassword===' '||newPassword2===' '){message.warn('请填写新密码');return;}
        if(newPassword!==newPassword2){message.warn('二次新密码输入不一样！！');return;}
        const content = this;
        const sbdata={
            "oldpwd":oldPassword,
            "password":newPassword,
        };
        console.log(sbdata);
        fetch(`${programHost.APIhost}/user/${userId}`, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(sbdata),
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth(`/user/${userId}`),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
            console.log(response);
            response.json().then((res) => {
                console.log(res);
                if(res.statusCode===105){
                    message.success(res.message);
                    content.emptyState();
                    content.UNSAFE_componentWillMount();
                }else{
                    message.warn(res.message);
                }
                },(data) => {
                console.log(data)
            });
            });
        
    }
    //取消修改安全中心
    cancelRevise(){
        return this.emptyState();
    }
    //清空安全中心表单
    emptyState(){
        this.setState({
            editSafeCenterVisible:false,
            oldPassword:"",
            newPassword:"",
            newPassword2:"",
        })
    }
    render() {
        const{
            upToken,userInfo,previewImg,fileList,avtor,editSafeCenterVisible,
            nickName,QQNumber,username,phoneNumber,oldPassword,newPassword,newPassword2
        }=this.state;
        return ( <div > 
            <div className={styles.container}>
            {/* 基本资料 */}
                <div className={styles.pageTitle}>▎基本资料</div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}><img className={styles.selfDetailsImg} alt="" src={avtor}/></Col>
                        <Col span={4}>
                            <Upload
                                action='http://upload-z1.qiniup.com'
                                data={{token:upToken}}
                                fileList={fileList}
                               listType="picture-card"
                               onPreview={this.handlePreview.bind(this)}
                               onChange={this.handleChange.bind(this)}
                            >
                               {this.state.fileList.length >= 1 ? null :<div><Icon type="plus" /><div className="ant-upload-text">选择图片</div></div>}
                            </Upload>
                            <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                                <img  style={{ width: '100%' }} alt='' src={previewImg} />
                            </Modal>
                        </Col>
                        <Col span={16}>支持jpg、gif、png、或bmp格式的图片，文件必须小于1M</Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>QQ号：</Col>
                        <Col span={20}><Input value={QQNumber} onChange={(e)=>{this.setState({QQNumber:e.target.value});}} size="large" className={styles.selfDetailsItemInput}/></Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <div style={{textAlign:'center'}}><Button size="large" className={styles.submitButton}onClick={()=>{this.sureReviseBasic()}} type="primary">点击修改基本信息</Button></div>
                </div>
                {/* 安全中心 */}
                <div className={styles.pageTitle}>▎安全中心</div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>用户名：</Col>
                        <Col span={20}>{username}</Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>昵称：</Col>
                        <Col span={20}>{nickName}</Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>手机号：</Col>
                        <Col span={20}>{phoneNumber}</Col>
                    </Row>
                </div>
                
                <div className={styles.selfDetailsItem}>
                    <Row>
                        <Col span={4}>密码：</Col>
                        <Col span={20}>************</Col>
                    </Row>
                </div>
                <div className={styles.selfDetailsItem}>
                    <div style={{textAlign:'center'}}><Button size="large" className={styles.submitButton} type="primary" onClick={()=>{this.setState({editSafeCenterVisible:true})}}>修改密码</Button></div>
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
                   <Col span={19}><Input disabled value={phoneNumber} onChange={(e)=>{this.setState({phoneNumber:e.target.value});}} className={styles.selfDetailsItemInput}/></Col>
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


