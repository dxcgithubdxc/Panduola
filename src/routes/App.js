import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

import NProgress from 'nprogress'// 进度条
import 'nprogress/nprogress.css'

import MainLayout from './MainLayout';
import MainLayout2 from './MainLayout2'

let lastHref;

   class App extends Component {
    render() {
        let { loading, children, location } = this.props;
        const { href } = window.location;
        if (lastHref !== href) {
            NProgress.start()
            if (!loading.global) {
                NProgress.done()
                lastHref = href
            }
        }
        return location.pathname==='/enter'||location.pathname==='/selfdetails'||location.pathname==='/bussnissrecord'||location.pathname==='/selforder'?
        (<MainLayout2 location={location}>{children}</MainLayout2>):
        ( <MainLayout location={location}>{children}</MainLayout>);
        
    }
}

App.propTypes = {}

export default withRouter(
    connect(({ app, loading }) => ({
        app,
        loading
    }))(App)
)
