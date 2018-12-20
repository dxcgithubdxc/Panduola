import React from 'react';
export default class Enter extends React.Component {
	constructor(props) {
    super(props);
    this.state={}
  }
UNSAFE_componentWillMount(){
  console.log(this.props)
}
    render() {
        return ( <div > 
            <div>Enter</div>
        </div>)
    }
}


