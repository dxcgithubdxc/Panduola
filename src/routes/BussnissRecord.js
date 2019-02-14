import React from 'react';
import styles from '../styles/BussnissRecord.css';

const store = require('store');
export default class BussnissRecord extends React.Component {
	constructor(props) {
    super(props);
    this.state={}
  }
UNSAFE_componentWillMount(){
    const userName=store.get("username");
    if(!userName){
        window.location.href=window.origin;
        return;
    }
}
    render() {
        return ( <div className={styles.container}>
            <div className={styles.partTop}><span className={styles.partTitle}>▎我的交易记录</span></div>
                <div className={styles.tableDiv}></div>
        </div>)
    }
}


