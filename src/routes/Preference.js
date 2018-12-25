import React from 'react';
import {Row,Col} from 'antd';
import LOLlogo1 from '../assets/LOLlogo1.png';
import LOLlogo2 from '../assets/LOLlogo2.png';
import PUBG1 from '../assets/PUBG1.png';
import PUBG2 from '../assets/PUBG2.jpg';
import example1 from '../assets/example1.jpg';
import styles from '../styles/Preference.css';
export default class Preference extends React.Component {
	constructor(props) {
    super(props);
        this.state={
            preferenceTypeList:[],
            selectedPreferenceNum:0,
            preferenceList:[],
        }
  }
    UNSAFE_componentWillMount(){
        console.log(this.props);
        const preferenceTypeList=[
            {img:'http://res.tuwan.com/templet/play/99/images/lol_logo.png',selectedImg:'http://res.tuwan.com/templet/play/99/images/lol_logo_hover.png',key:0,},
            {img:'http://res.tuwan.com/templet/play/99/images/pubg_logo.png',selectedImg:'http://res.tuwan.com/templet/play/99/images/pubg_logo_hover.png',key:1, },
        ];
        const preferenceList=[
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:0,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
            {preferenceItemImg:example1,preferenceItemName:'程思琪',position:'南通市',exampleHotSex:1,exampleHotAge:19,exampleHotTimes:123,exampleHotStation:'最强王者',},
        ];
        this.setState({preferenceTypeList,preferenceList});
    }
    selectPreference(item){
        this.setState({selectedPreferenceNum:item.key});
    }
    render() {
        const{preferenceTypeList,selectedPreferenceNum,preferenceList}=this.state;
        return (<div>
            <div className={styles.banner}/>
            <div className={styles.container}>
                <div className={styles.selectItem}>
                    {preferenceTypeList.map((item,index)=>{return(
                        <img src={selectedPreferenceNum===item.key?item.selectedImg:item.img} key={index}alt="" className={styles.selectItemImg} onClick={this.selectPreference.bind(this,item)}/>
                    )})}
                </div>
                <div className={styles.preferenceList}>
                    <Row gutter={6}>
                        {preferenceList.map((item,index)=>{return(
                            <Col span={4} style={{paddingBottom:'20px'}} key={index}>
                                <div className={styles.preferenceItem}>
                                    <img className={styles.preferenceItemImg} src={item.preferenceItemImg}alt=""/>
                                    <div className={styles.preferenceItemMsg}>
                                        <div className={styles.preferenceItemName}>{item.preferenceItemName}</div>
                                        <div className={styles.preferenceItemPP}>
                                            <div className={styles.preferenceItemPosition}><span style={{color:'#1dd3b8'}}>☺在线</span> | {item.position}</div>
                                            <div className={styles.preferenceItemPrice}>￥9.9/局</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )})}
                        
                    </Row>
                    
                </div>
            </div>
        </div>)
    }
}


