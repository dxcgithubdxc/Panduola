import React from 'react';
import styles from '../styles/MyOrders.css';

const store = require('store');
export default class MyOrders extends React.Component {
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
    render() {return ( <div className={styles.container}>myorders</div>)}
}