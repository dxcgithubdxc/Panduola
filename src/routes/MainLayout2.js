import React from 'react';
import { Layout, Menu, Icon, Modal } from 'antd';
import { Link} from 'dva/router';
import *as programHost from '../utils/ajax';
import styles from '../styles/MainLayout2.css';
import zb01 from '../assets/zb01.jpg';
const {Header, Content,Sider} = Layout;
const store=require('store');
export default class MainLayout2 extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            defaultSelectedKeys:"",
            atvator:zb01,
            userInfo:{},
        }
  }
    UNSAFE_componentWillMount(){
        console.log(this.props);
        var pathname=this.props.location.pathname;
        this.setState({defaultSelectedKeys:pathname});
        //根据userName查询头像、username
        const userName=store.get("username");
        if(userName!==undefined&&userName.username){
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
    showModal(){
        Modal.confirm({
            title: '确定要退出登录吗？',
            content: '将会退出入驻系统',
            okText:'确认',
            cancelText:'取消',
            onOk() {
                const userName=store.get("username");
                if(userName!==undefined&&userName.username){
                    store.remove("username");
                    window.location.href=window.location.origin;
                }
            },
            onCancel() {},
          });
    }
    render() {
        
        const {children}=this.props;
        const {defaultSelectedKeys,atvator,userInfo}=this.state;
        return (<div style={{height:'100%'}}>
            <Layout style={{height:'100%'}}>
                <Sider breakpoint="lg" >
                    <div className={styles.logo}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultSelectedKeys]}>
                        <Menu.Item key="1"><Link to="/myorders"><Icon type="solution" /><span>我的订单</span></Link></Menu.Item>
                        <Menu.Item key="/selfdetails"><Link to="/selfdetails"><Icon type="user" /> <span >个人资料</span></Link></Menu.Item>
                        
                        <Menu.Item key="/enter"><Link to="/enter"><Icon type="user" /><span >我的导师资料</span></Link></Menu.Item>
                        <Menu.Item key="/home"><Link to="/home"><Icon type="poweroff" /><span >返回首页</span></Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Menu  mode="horizontal" style={{ lineHeight: '63px', float: 'right',paddingRight:'20px' }}>
                            <Menu.Item key="userImg"><img src={userInfo.headerImg} alt="" style={{height:'50px',width:'50px',borderRadius:'50%'}} /></Menu.Item>
                            <Menu.Item key="username"><Icon type="idcard" /><span>{userInfo.username}</span></Menu.Item>
                            <Menu.Item key="id"><Icon type="money-collect" /><span>钻石:{userInfo.diamonds}</span></Menu.Item>
                            <Menu.Item key="logout" onClick={this.showModal.bind(this)}><Icon type="logout" /><span>退出登录</span></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>)
    }
}


