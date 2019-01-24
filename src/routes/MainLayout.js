import React, { Component } from 'react'
import { Layout, Menu, Icon ,Dropdown,Tabs, Modal, Button,Row, Col,Input,message, } from 'antd';
import { Link} from 'dva/router';
import *as programHost from '../utils/ajax';
import styles from '../styles/MainLayout.css';
import ewm1 from '../assets/ewm1.jpg';
import consume1 from '../assets/consume1.jpg';
import consume2 from '../assets/consume2.jpg';
import consume3 from '../assets/consume3.jpg';
import consume4 from '../assets/consume4.jpg';

const TabPane = Tabs.TabPane;
const { Header, Content, Footer } = Layout;
let myInterval;
const store=require('store');
export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys:"/home",
      loginModalVisible: false,
      phoneNumber:"",//手机号
      username:"",//用户名
      password:"",//密码
      identityCode:"",//验证码
      loginType:"0",//"0"是登录，"1"是注册
      dumiao:false,
      dumiaoText:"",
    };
  }
  UNSAFE_componentWillMount(){
    console.log(this.props);
    //设置选中的页面路由
    const pathname=this.props.location.pathname;
    if(pathname=='/'){
      this.setState({defaultSelectedKeys:'/home'});
    }else{
      this.setState({defaultSelectedKeys:pathname});
    }
    
  }
  componentDidMount(){}
   downloadAPP(){
    console.log(123);
  }
  Enter(){
    const userName=store.get("username");
    console.log("@@@@@@",userName);
    if(!userName){this.setState({loginModalVisible:true});return;}
    else{
      window.location.href=`${window.location.origin}/enter`;
    }
  }
  //获取验证码
  getIdentityCode(){
    const {phoneNumber}=this.state;
    if(phoneNumber.length!==11){
      message.warn('手机号格式错误！！');
      return;
    }
    const content = this;
    let dumiaoNum =60;
    // this.Dumiao();
    this.setState({
      dumiao:true,
      dumiaoText:`剩余时间${dumiaoNum}s`
    });
    myInterval=setInterval(function(){
      dumiaoNum--;
      console.log(dumiaoNum);
      content.setState({dumiaoText:`剩余时间${dumiaoNum}s`});
      if(dumiaoNum<=0){
        dumiaoNum =0;
        content.setState({
          dumiaoText:"",
          dumiao:false,
        });
        clearInterval(myInterval);
      }
    },1000);
    const sbdata ={mobile:phoneNumber};
    //联网，获取验证码
    return fetch(`${programHost.APIhost}/sms/reg`, {
      method: 'POST',
      dataType: 'json',
      body:JSON.stringify(sbdata),
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization':programHost.getAuth('/sms/reg'),// 获取登录的token
      }),
    }).then((response) => {
      console.log(response);
      response.json().then((res) => {
          console.log(res);
          if(res.statusCode===101){  message.success(res.message);}
          else{message.warn(res.message);}
          clearInterval(myInterval);
        },(data) => {
        console.log(data)
      });
    });
  }
  //确认按钮
  handleOk(){
    const{loginType,username,password}=this.state;
    if(username=== ""||password === ""){ message.warning('请填写完整信息!!');return;}
    clearInterval(myInterval);
    return loginType === "0" ? this.Login():this.Register();
  }
  //登录
  Login(){
    const{username,password}=this.state;
    const content =this;
    //联网
    return fetch(`${programHost.APIhost}/user/login`, {
      method: 'GET',
      // dataType: 'json',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization':programHost.getAuth('/user/login',username,password),// 获取登录的token
      }),
    }).then((response) => {
      console.log(response);
      response.json().then((res) => {
          console.log(res);
          if(res.statusCode===101){
            store.set("username",{username:username,password:programHost.cryptoPassword(password)});// 本地存username和加密后的password
            content.emptyState();
            message.success(res.message);
          }else{
            message.warn(res.message);
          }
        },(data) => {
        console.log(data)
      });
    });
  }
  //注册 
  Register(){
    const{username,password,phoneNumber,identityCode}=this.state;
    if(phoneNumber.length===0){message.warning('请填写手机号!!');return;}
    if(phoneNumber.length!==11){message.warning('手机号格式错误!!');return;}
    if(identityCode.length===0){message.warning('请填写验证码!!');return;}
    const content =this;
    const sbdata={
      "mobile": phoneNumber,
      "username": username,
      "password": password,
      "state": 1,
      "VerificationCode": identityCode,
    };
    console.log(sbdata);
    console.log(JSON.stringify(sbdata));
    fetch(`${programHost.APIhost}/user/register`, {
      method: 'POST',
      body:JSON.stringify(sbdata),
      dataType: 'json',
      headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
      }),
    }).then((response) => {
      console.log(response);
      response.json().then((res) => {
          console.log(res);
          console.log(store);
          if(res.statusCode===101){
            store.set("username",{username:username,password:programHost.cryptoPassword(password)});// 本地存username和加密后的password
            content.emptyState();
            message.success('注册成功!!');
          }else{
            message.warn(res.message);
          }
        },(data) => {
        console.log(data)
      });
    });
  }
  //取消按钮
  handleCancel(){
      //联网
    const content =this;
    content.emptyState();
  }
  //清空注册或登录的表单信息
  emptyState(){
    this.setState({
      loginModalVisible:false,
      phoneNumber:"",//手机号
      username:"",//用户名
      password:"",//密码
      identityCode:"",//验证码
      loginType:"0",//0是登录，1是注册
      dumiao:false,
      dumiaoText:"",
      logined:false,
    });
    clearInterval(myInterval);
  }
  render() {
    const { children} = this.props;
    const{defaultSelectedKeys,loginModalVisible,phoneNumber,username,password,identityCode,loginType,dumiaoText,dumiao}=this.state;
    const menu=(<div className={styles.downloadAPP} onClick={this.downloadAPP.bind(this)}>
      <img className={styles.appImg} alt="" src={ewm1}/>
      <div className={styles.appText}>扫描关注微信公众号</div>
      </div>);
    return (<div>
      <Layout className="layout">
      {/**导航条 */}
        <div className={styles.headerBg}>
          <Header style={{background:'#fff',width:'1420px', margin:' 0 auto'}}>
            <div className={styles.logo}/>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={[defaultSelectedKeys]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/home"><Link to="/home">主页</Link></Menu.Item>
              <Menu.Item key="/playlist"><Link to="/playlist">约陪玩</Link></Menu.Item>
              <Menu.Item key="/preference"><Link to="/preference">特惠专区</Link></Menu.Item>
              <Menu.Item key="/recharge"><Link to="/recharge">充值</Link></Menu.Item>
                
              {
                store.get("username")?<Menu.Item key="setting:8"><Link to="/enter"><Icon type="team" />会员中心</Link></Menu.Item>:<Menu.Item key="setting:7" onClick={()=>{this.setState({loginModalVisible:true})}}><Icon type="user" />注册/登录</Menu.Item>
                }
              <Dropdown key="setting:a" overlay={menu} placement="bottomLeft">
                  <Button>微信公众号</Button>
                </Dropdown>
              <Menu.Item key="/enter" onClick={()=>{this.Enter();}}><Icon type="flag" />申请入驻</Menu.Item>
            </Menu>
          </Header>
        </div>
        {/**页面主体部分 */}
        <Content><div className={styles.main}>{children}</div></Content>
        {/**页脚 */}
        <div className={styles.footerBg}>
          <Footer style={{textAlign: 'center',background:'#535353',maxWidth:'1420px',minWidth:'1200px',margin:'0 auto',padding:'24px 0'}}>
            <Row>
              <Col span={6}><img alt="" src={consume1}/></Col>
              <Col span={6}><img alt="" src={consume2}/></Col>
              <Col span={6}><img alt="" src={consume3}/></Col>
              <Col span={6}><img alt="" src={consume4}/></Col>
            </Row>
            <Row>
              <Col span={8}>
                <div className={styles.footerSecond}>
                    <i className={styles.footerIcon1}></i>客服电话：13339119422&nbsp;&nbsp;咨询时间：7X24小时
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.footerSecond}>
                    <i className={styles.footerIcon2}></i>客服QQ：800184580&nbsp;&nbsp;咨询时间：7X24小时
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.footerSecond}>
                  <Row>
                    <Col span={8}><a className={styles.footerHelp}>帮助中心</a></Col>
                    <Col span={8}><a className={styles.footerHelp}>服务保障</a></Col>
                    <Col span={8}><a className={styles.footerHelp}>陪玩守则</a></Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <div className={styles.copyRight}>皖ICP备18021779号&nbsp;Copyright 2019PDLWAN.COM Corporation,All Rights Reserved</div>
          </Footer>
        </div>
      </Layout>
      <Modal
          title="登录/注册"
          cancelText="取消"
          okText="确认"
          visible={loginModalVisible}
          onOk={()=>{this.handleOk()}}
          onCancel={()=>{this.handleCancel()}}
        >
          <Tabs
            activeKey={loginType}
            onChange={(key)=>{
              this.setState({
                loginType:key, 
                phoneNumber:"",//手机号
                username:"",//用户名
                password:"",//密码
                identityCode:"",//验证码
                loginType:key,//0是登录，1是注册
                dumiao:false,
                dumiaoText:"",
              });
              clearInterval(myInterval);
            }}
            
          >
            <TabPane tab="登录" key="0">
              <div className={styles.loginItem}>
               <Row>
                 <Col span={4}>账号：</Col>
                 <Col span={20}><Input value={username}onChange={(e)=>{this.setState({username:e.target.value})}} className={styles.loginInput}/></Col>
               </Row>
              </div>
              <div className={styles.loginItem}>
               <Row>
                 <Col span={4}>密码：</Col>
                 <Col span={20}><Input type="password" value={password}onChange={(e)=>{this.setState({password:e.target.value})}} className={styles.loginInput}/></Col>
               </Row>
              </div>
              {/* <div className={styles.loginItem}>
               <Row>
                 <Col span={4}>验证码：</Col>
                 <Col span={12}><Input value={identityCode}onChange={(e)=>{this.setState({identityCode:e.target.value})}} className={styles.loginInput}/></Col>
                 <Col span={4}><Button type="primary" disabled={dumiao} onClick={this.getIdentityCode.bind(this)}>{dumiao===true?dumiaoText:"获取验证码"}</Button></Col>
               </Row>
              </div> */}
             
            </TabPane>
            <TabPane tab="注册" key="1">
              <div className={styles.loginItem}>
               <Row>
                 <Col span={4}>手机号：</Col>
                 <Col span={20}><Input value={phoneNumber}onChange={(e)=>{this.setState({phoneNumber:e.target.value})}} className={styles.loginInput}/></Col>
               </Row>
              </div>
              <div className={styles.loginItem}>
               <Row>
                 <Col span={4}>账号：</Col>
                 <Col span={20}><Input value={username}onChange={(e)=>{this.setState({username:e.target.value})}} className={styles.loginInput}/></Col>
               </Row>
              </div>
              <div className={styles.loginItem}>
               <Row>
                 <Col span={4}>密码：</Col>
                 <Col span={20}><Input type="password" value={password}onChange={(e)=>{this.setState({password:e.target.value})}} className={styles.loginInput}/></Col>
               </Row>
              </div>
              <div className={styles.loginItem}>
               <Row>
                 <Col span={4}>验证码：</Col>
                 <Col span={12}><Input value={identityCode}onChange={(e)=>{this.setState({identityCode:e.target.value})}} className={styles.loginInput}/></Col>
                 <Col span={4}><Button type="primary" disabled={dumiao} onClick={this.getIdentityCode.bind(this)}>{dumiao===true?dumiaoText:"获取验证码"}</Button></Col>
               </Row>
              </div>
            </TabPane>
          </Tabs>
        </Modal>
    </div>)
  }
}


