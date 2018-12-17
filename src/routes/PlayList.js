import React from 'react';
import { Carousel,Row, Col } from 'antd';
import styles from '../styles/PlayList.css';
import icon2 from '../assets/icon_2.png';
export default class PlayList extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            gameServiceList:[],
            selectedGameServiceIndex:1,
        }
    }
    UNSAFE_componentWillMount(){
        const gameServiceList=[
            {title:'线上LOL',backgroundPosition:'-254px 0px',selectedBackgroundPosition:'-254px -80px',gameServiceNum:1,},
            {title:'决地求生',backgroundPosition:'-856px 0px',selectedBackgroundPosition:'-856px -80px',gameServiceNum:2,},
            {title:'王者荣耀',backgroundPosition:'-491px 0px',selectedBackgroundPosition:'-491px -80px',gameServiceNum:3,},
            {title:'刺激战场',backgroundPosition:'-1068px  0px',selectedBackgroundPosition:'-1068px -80px',gameServiceNum:4,},
            {title:'全军出击',backgroundPosition:'-1137px 0px',selectedBackgroundPosition:'-1137px -80px',gameServiceNum:5,},
            {title:'荒野行动',backgroundPosition:'-927px  0px',selectedBackgroundPosition:'-927px -80px',gameServiceNum:6,},
            {title:'第五人格',backgroundPosition:'-1358px 0px',selectedBackgroundPosition:'-1358px -80px',gameServiceNum:7,},
            {title:'视频游戏',backgroundPosition:'-8px 0px',selectedBackgroundPosition:'-8px -80px',gameServiceNum:8,}
        ];
        this.setState({
            gameServiceList,
        })
    }
    componentDidMount(){
    
    }
    selectGameService(index){
        console.log(index);
        this.setState({selectedGameServiceIndex:index});
    }
    render() {
        const {gameServiceList,selectedGameServiceIndex}=this.state;
        console.log(gameServiceList);
        return ( <div > 
            <div className={styles.container}>
                <div className={styles.playItemsList}>
                    <div className={styles.gameServices}>
                        <Row>
                            <Col span={4}><div className={styles.serviceTitle}>游戏服务</div></Col>
                            <Col span={20}>
                                {gameServiceList.map((item,index)=>{return(
                                    <div className={styles.gameItem} key={index} onClick={this.selectGameService.bind(this,item.gameServiceNum)}>
                                        <i style={selectedGameServiceIndex===item.gameServiceNum?{width:60,height:60,background:'url(https://res.tuwan.com/templet/play/playlist/images/icon.png?030885) no-repeat',backgroundPosition:item.selectedBackgroundPosition}:{width:60,height:60,background:'url(https://res.tuwan.com/templet/play/playlist/images/icon.png?030885) no-repeat',backgroundPosition:item.backgroundPosition}}/>
                                        <br/>
                                        <span style={selectedGameServiceIndex===item.gameServiceNum?{color:'#fa6543'}:{}}>{item.title}</span>
                                        
                                    </div>
                                )})}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>)
    }
}


