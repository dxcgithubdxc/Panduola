import React from 'react';
export default class IndexPage extends React.Component {
	constructor(props) {
    super(props);
    this.state={}
  }
UNSAFE_componentWillMount(){
  const{history}=this.props;
  const path={pathname: '/home'}
  history.push(path);
}
    render() {return ( <div > </div>)}
}


