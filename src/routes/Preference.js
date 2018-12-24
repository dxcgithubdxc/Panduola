import React from 'react';
import styles from '../styles/Preference.css'
export default class Preference extends React.Component {
	constructor(props) {
    super(props);
        this.state={

        }
  }
    UNSAFE_componentWillMount(){
        console.log(this.props)
    }
    render() {
        return (<div>
            <div className={styles.banner}/>
            <div className={styles.container}>123123</div>

        </div>)
    }
}


