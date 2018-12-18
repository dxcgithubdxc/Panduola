import React, { Component } from 'react'
import { Layout, Menu, Icon ,Dropdown, Popover , Modal, Button,Row, Col } from 'antd';
import { Link} from 'dva/router';
import styles from '../styles/MainLayout.css';
import ewm1 from '../assets/ewm1.png';
import consume1 from '../assets/consume1.jpg';
import consume2 from '../assets/consume2.jpg';
import consume3 from '../assets/consume3.jpg';
import consume4 from '../assets/consume4.jpg';
export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys:"/home",
    };
  }
  UNSAFE_componentWillMount(){
    console.log(this.props);
    //设置选中的页面路由
    var pathname=this.props.location.pathname;
    this.setState({defaultSelectedKeys:pathname})
  }
  componentDidMount(){}
   downloadAPP(){
    console.log(123);
  }
 
  render() {
    const { children} = this.props;
    const{defaultSelectedKeys}=this.state;
    const { Header, Content, Footer } = Layout;
    const menu=(<div className={styles.downloadAPP} onClick={this.downloadAPP.bind(this)}>
      <img className={styles.appImg} alt="" src={ewm1}/>
      <div className={styles.appText}>扫码下载APP</div>
      </div>);
    return (<div>
      <Layout className="layout">
      {/**导航条 */}
        <Header style={{background:'#fff'}}>
          <div className={styles.logo}/>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[defaultSelectedKeys]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/home"><Link to="/home">主页</Link></Menu.Item>
            <Menu.Item key="/playlist"><Link to="/playlist">约陪玩</Link></Menu.Item>
            <Menu.Item key="setting:3">约战队</Menu.Item>
            <Menu.Item key="setting:4">特惠专区</Menu.Item>
            <Menu.Item key="setting:5">充值</Menu.Item>
              <Dropdown key="setting:a" overlay={menu} placement="bottomLeft">
                <Button icon="download">APP下载</Button>
              </Dropdown>
            <Menu.Item key="setting:6"><Icon type="flag" />申请入驻</Menu.Item>
            <Menu.Item key="setting:7"><Icon type="user" />注册会员</Menu.Item>
            <Menu.Item key="setting:8"><Icon type="team" />会员中心</Menu.Item>
          </Menu>
        </Header>
        {/**页面主体部分 */}
        <Content><div className={styles.main}>{children}</div></Content>
        {/**页脚 */}
        <Footer style={{  textAlign: 'center',background:'#535353' }}>
          <Row>
            <Col span={6}><img alt="" src={consume1}/></Col>
            <Col span={6}><img alt="" src={consume2}/></Col>
            <Col span={6}><img alt="" src={consume3}/></Col>
            <Col span={6}><img alt="" src={consume4}/></Col>
          </Row>
          <Row>
            <Col span={8}>
              <div className={styles.footerSecond}>
                  <i className={styles.footerIcon1}></i>客服电话：010-68608228咨询时间：7X24小时
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.footerSecond}>
                  <i className={styles.footerIcon2}></i>客服QQ：800184580咨询时间：7X24小时
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
          <div className={styles.copyRight}>(京)字第05536号Copyright 2014-2020 TUWAN Corporation,All Rights Reserved</div>
        </Footer>
      </Layout>
    </div>)
  }
}


