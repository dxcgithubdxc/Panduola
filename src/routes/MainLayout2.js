import React from 'react';
import { Layout, Menu, Icon, Modal } from 'antd';
import { Link} from 'dva/router';
import styles from '../styles/MainLayout2.css';
import zb01 from '../assets/zb01.jpg';
console.log(styles);
const {Header, Content,Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class MainLayout2 extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            defaultSelectedKeys:"",
            atvator:zb01,
        }
  }
    UNSAFE_componentWillMount(){
        console.log(this.props);
        var pathname=this.props.location.pathname;
        this.setState({defaultSelectedKeys:pathname});
   
    }
    showModal(){
        Modal.confirm({
            title: '确定要退出登录吗？',
            content: '将会退出入驻系统',
            onOk() {
                window.location.href=window.location.origin;
            },
            onCancel() {},
          });
    }
    render() {
        
        const {children}=this.props;
        const {defaultSelectedKeys,atvator}=this.state;
        return (<div style={{height:'100%'}}>
            <Layout style={{height:'100%'}}>
                <Sider
                breakpoint="lg"
                >
                    <div className={styles.logo}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultSelectedKeys]}>
                        <Menu.Item key="1"><Icon type="solution" /><span>我的订单</span></Menu.Item>
                        <Menu.Item key="2"><Icon type="file-done" /><span >交易记录</span></Menu.Item>
                        <Menu.Item key="3"><Link to=""><Icon type="user" /> <span >个人资料</span></Link></Menu.Item>
                        <Menu.Item key="/enter"><Link to="/enter"><Icon type="user" /><span >我的导师资料</span></Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Menu
                           style={{ lineHeight: '63px', float: 'right',paddingRight:'20px' }}
                            mode="horizontal"
                        >
                            <Menu.Item key="userImg"><img src={atvator} alt="" style={{height:'50px',width:'50px',borderRadius:'50%'}} /></Menu.Item>
                            <Menu.Item key="userName"><Icon type="user" /><span>绅士扮演者v</span></Menu.Item>
                            <Menu.Item key="userId"><Icon type="idcard" /><span>UID:123123</span></Menu.Item>
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


