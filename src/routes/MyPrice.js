import React from 'react';
import styles from '../styles/MyPrice.css';
import {Upload,Icon,Modal} from 'antd';
export default class IndexPage extends React.Component {
	constructor(props) {
    super(props);
    this.state={
        upToken:'',
        APPTopImg:'',
        fileList:[],
        previewVisible:false,
        previewImg:'',
    }
  }
UNSAFE_componentWillMount(){
    const store = require('store');
    const content=this;
    fetch('http://localhost:3000/getQiniuToken'
    // , {
        // method: 'GET',
        // mode: 'no-cors',
        // credentials: 'include',
        // headers: new Headers({
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json;charset=UTF-8',
        // }),
        // }
        ).then((response) => {
        console.log(response);
        response.json().then((res) => {
            console.log(res);
            content.setState({upToken:res.upToken});
            },(data) => {
            console.log(data)
        });
        });
}

handleChange(file) { console.log(file); this.setState({fileList:file.fileList,APPTopImg:file.file.status==="done"?" "+file.file.response.hash:""})}
handlePreview(file){this.setState({ previewImg: file.url || file.thumbUrl,previewVisible: true,});}
handleCancel(){this.setState({ previewVisible: false });}
    render() {
        return ( <div className={styles.container}>
    <img style={{width:100,height:100}} src={this.state.APPTopImg} alt="" />
           <Upload
            action='http://upload.qiniup.com'
            data={{
                token:this.state.upToken
            }}
            listType="picture-card"
            fileList={this.state.fileList}
            onPreview={this.handlePreview.bind(this)}
            onChange={this.handleChange.bind(this)}
        >
            {this.state.fileList.length >= 1 ? null :<div><Icon type="plus" /><div className="ant-upload-text">选择文件</div></div>}
        </Upload>
        {/*大图预览*/}
        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
        <img  style={{ width: '100%' }} alt='' src={this.state.previewImg} />
        </Modal>
        </div>)
    }
}


