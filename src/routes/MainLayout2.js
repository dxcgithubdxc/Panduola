import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const {Header, Content, Footer, Sider} = Layout;
export default class MainLayout2 extends React.Component {
	constructor(props) {
    super(props);
    this.state={}
  }
UNSAFE_componentWillMount(){
  console.log(this.props);
//   const{history}=this.props;
//   const path={pathname: '/enter'}
//   history.push(path);
}
    render() {
        
        const {children}=this.props;
        return (<div style={{height:'100%'}}>
            <Layout style={{height:'100%'}}>
                <Sider
                breakpoint="lg"
                >
                    <div style={{ height: '32px', background: 'white',margin: '16px'}} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">6666</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
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


