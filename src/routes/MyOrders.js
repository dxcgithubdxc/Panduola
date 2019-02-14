import React from 'react';
import moment from'moment';
import {Row,Col,Input,Radio,DatePicker,Checkbox,Modal,Button,Icon,Select,message,Table,Pagination} from 'antd';
import styles from '../styles/MyOrders.css';
import *as programHost from '../utils/ajax';

const store = require('store');
export default class MyOrders extends React.Component {
	constructor(props) {
    super(props);
    this.state={
        currentPage:1,
        totalPage:0,
        pageSize:10,
        orderList:[],
        columns:[],
    }
  }
UNSAFE_componentWillMount(){
    const userName=store.get("username");
    if(!userName){
        window.location.href=window.origin;
        return;
    }
    const {currentPage,pageSize}=this.state;
    const content =this;
    // 主播获取自己的订单列表
    fetch(`${programHost.APIhost}/anchor/get/order/list/${currentPage}/10`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization':programHost.getAuth(`/anchor/get/order/list/${currentPage}/10`),// 除登录之外，获取登录的token都不需要username和password
        }),
        }).then((response) => {
        response.json().then((res) => {
            console.log('主播获取自己的订单列表',res);
            if(res.statusCode===107){
                res.resource.map((item,index)=>{item.key=item._id});
                content.setState({
                    orderList:res.resource,
                    totalPage:res.sum,
                });
            }
            },(data) => {
            console.log(data);
        });
        });
}
componentDidMount(){
    const columns=[
        {
            align:'center',
            title: '订单编号',
            dataIndex: 'orderNumber',
        },
        {
            align:'center',
            title: '下单人',
            dataIndex: 'userName',
        },
        {
            align:'center',
            title: '下单人电话',
            dataIndex: 'mobile',
        },
        {
            align:'center',
            title: '订单总价',
            dataIndex: 'gamePrice',
            render: (text,record)=>{return(<span>{record.gamePrice.toFixed(3)}元</span>)},
        },
        {
            align:'center',
            title: '手续费',
            dataIndex: 'shouxufei',
            render: (text,record)=>{return(<span>{record.shouxufei.toFixed(3)}元</span>)},
        },
        {
            align:'center',
            title: '实际利润',
            dataIndex: 'realIncome',
            render: (text,record)=>{return(<span>{record.realIncome.toFixed(3)}元</span>)},
        },
        {
            align:'center',
            title: '下单时间',
            dataIndex: 'createTime',
            render: (text,record)=>{
                const timeStr = moment(record.createTime).format('YYYY-MM-DD HH:mm:ss');
                return(<span>{timeStr}</span>)
            },
          },
          {
            align:'center',
            title: '订单状态',
            dataIndex: 'status',
            render: (text,record)=>{return(<span>{record.status}</span>)},
        },
    ];
    this.setState({columns});
}
changePage (page){
    console.log(page);
    const {totalPage}=this.state;
    if(page>=totalPage){this.setState({currentPage:totalPage});}
    else{ this.setState({currentPage:page});}
    const content=this;
    // 主播获取自己的订单列表
    fetch(`${programHost.APIhost}/anchor/get/order/list/${page}/10`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization':programHost.getAuth(`/anchor/get/order/list/${page}/10`),// 除登录之外，获取登录的token都不需要username和password
        }),
        }).then((response) => {
        response.json().then((res) => {
            console.log('主播获取自己的订单列表',res);
            if(res.statusCode===107){
                res.resource.map((item,index)=>{item.key=item._id});
                content.setState({
                    orderList:res.resource,
                    totalPage:res.sum,
                });
            }
            },(data) => {
            console.log(data);
        });
        });
  }
    render() {
        const {columns,orderList,currentPage,totalPage}=this.state;
        return ( <div className={styles.container}>
            <div className={styles.partTop}><span className={styles.partTitle}>▎我的订单</span></div>
            <div className={styles.tableDiv}>
                    <Table columns={columns} dataSource={orderList} pagination={false} />
                    <Pagination current={currentPage} onChange={(page)=>{this.changePage(page);}} total={totalPage}/>
                </div>
        </div>)
    }
}