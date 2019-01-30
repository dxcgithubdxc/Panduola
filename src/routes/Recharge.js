import React from 'react';
import {Button,Row,Col,Tabs,InputNumber,Input,message} from 'antd';
import *as programHost from '../utils/ajax';
import styles from '../styles/Recharge.css';
const store=require('store');
export default class Recharge extends React.Component {
	constructor(props) {
    super(props);
        this.state={
            accountLeft:'',
            rechargeTypeList: [
                {
                    title:'微信支付',
                    img:'//res.tuwan.com/templet/teach/play/recharge/images/wechat.jpg',
                    selectedImg:'//res.tuwan.com/templet/teach/play/recharge/images/wechat_hover.jpg?1 ',
                    typeId:0,
                },
                {
                    title:'支付宝支付',
                    img:'//res.tuwan.com/templet/teach/play/recharge/images/alipay.jpg',
                    selectedImg:'//res.tuwan.com/templet/teach/play/recharge/images/alipay_hover.jpg ',
                    typeId:1,
                }
            ],
            rechargeNumberList:['5','30','50','100','300','500'],
            rechargeNumber:'5',//用户选择的金额
            rechargeNumber2:' ',//用户输入的金额
            rechargeType:0,//0是微信 1是支付宝
        }
  }
    UNSAFE_componentWillMount(){
        console.log(this.props);
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
                    content.setState({accountLeft:res.resource.diamonds});
                }
                },(data) => {
                console.log(data)
            });
            });
        }
        
    }
    componentDidMount(){}
    setRechargeNumber(item){
        this.setState({rechargeNumber2:' ',rechargeNumber:item});
    }
    selectRechargeType(item){
        this.setState({rechargeType:item.typeId});
    }
    rechargeDimond(){
        const userName=store.get("username");
        if(!userName){message.warn('您还没登录，请先登录');return;}
        const{rechargeNumber2,rechargeNumber,rechargeType}=this.state;
        if(Number(rechargeNumber2)===0&&Number(rechargeNumber)===0){message.warn('请选择充值金额！！');return}
        if(rechargeType===0){message.warn('微信支付暂时不能用，请选择支付宝充值');return;}
        // console.log('rechargeNumber2:',Number(rechargeNumber2),'rechargeNumber:',Number(rechargeNumber));
        const sbdata= {
                "tranpwd":"string",
                "total_fee": Number(rechargeNumber2)===0?Number(rechargeNumber):Number(rechargeNumber2),
                "type": rechargeType,
              }
        // console.log(programHost.getAuth('/chongzhi/alipay/payment'));
         fetch(`${programHost.APIhost}/chongzhi/alipay/payment`, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(sbdata),
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization':programHost.getAuth('/chongzhi/alipay/payment'),// 除登录之外，获取登录的token都不需要username和password
            }),
            }).then((response) => {
            console.log(response);
            response.json().then((res) => {
                console.log(res);
                if(res.statusCode===107){
                    // window.open(res.resource,'_blank');
                    window.location.href=res.resource;
                }
                },(data) => {
                console.log(data)
            });
            });
    }
    render() {
        const {accountLeft,rechargeNumberList,rechargeNumber,rechargeNumber2,rechargeTypeList,rechargeType}=this.state;
        return (<div>
            <div className={styles.container}>
                <div className={styles.partTitle}>▎钻石充值</div>
                <div className={styles.czItem}>
                    <Row>
                        <Col span={2}>账户余额：</Col>
                        <Col span={22}><span style={{fontSize:24,fontWeight:600}}>{accountLeft}&nbsp;钻石</span></Col>
                    </Row>
                </div>
                <div className={styles.czItem}>
                    <Row>
                        <Col span={2}>充值货币：</Col>
                        <Col span={22}>
                        {rechargeNumberList.map((item,index)=>{return(
                            <Button style={{marginRight:20}} type={rechargeNumber===item?"primary":"default"} onClick={this.setRechargeNumber.bind(this,item)}key={index}>{item}元</Button>
                        )})}
                        <Input
                            placeholder= "手动输入金额（元）"
                            onClick={()=>{this.setState({rechargeNumber:''})}} 
                            value={rechargeNumber2} 
                            onChange={(e)=>{console.log(parseInt(e.target.value,0));this.setState({rechargeNumber:'',rechargeNumber2:isNaN(parseInt(e.target.value,0))?'0':e.target.value})}} 
                            style={{width:200}} 
                        />
                        </Col>
                    </Row>
                </div>
                <div className={styles.czItem}>
                    <Row>
                        <Col span={2}>充值钻石：</Col>
                        <Col span={22}><span style={{fontSize:24,fontWeight:600,color:'red'}}>{rechargeNumber!==""?Number(rechargeNumber)*10:rechargeNumber2!==""?Number(rechargeNumber2)*10:0}钻石</span><span style={{color:'#999999'}}>&nbsp;(兑换比例：1元=10钻石)</span></Col>
                    </Row>
                </div>
                <div className={styles.czItem}>
                    <Row>
                        <Col span={2}>充值方式：</Col>
                        <Col span={22}>
                        {rechargeTypeList.map((item,index)=>{return(
                            <img src={rechargeType===item.typeId?item.selectedImg:item.img} alt=""key={index} style={{marginRight:22,cursor:'pointer'}}onClick={this.selectRechargeType.bind(this,item)}/>
                        )})}
                        </Col>
                    </Row>
                </div>
                <div className={styles.czItem}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={22}><Button type="primary"size="large" onClick={()=>{this.rechargeDimond();}}>立即充值</Button></Col>
                    </Row>
                </div>
            </div>
        </div>)
    }
}

