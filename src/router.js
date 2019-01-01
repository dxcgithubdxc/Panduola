import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/App'

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
     const IndexPage = dynamic({
        app,
        component: () => import('./routes/IndexPage')
    })
     const Home = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/Home')
    })
    const PlayList = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/PlayList')
    })
    const Enter = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/Enter')
    })
    const Preference = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/Preference')
    })
    const SelfDetails = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/SelfDetails')
    })
    const MCDetails = dynamic({
        app,
        models: () => [import('./models/users')],
        component: () => import('./routes/MCDetails')
    })
    // const BussnissRecord = dynamic({
    //     app,
    //     models: () => [import('./models/users')],
    //     component: () => import('./routes/BussnissRecord')
    // })
    // const SelfOrder = dynamic({
    //     app,
    //     models: () => [import('./models/users')],
    //     component: () => import('./routes/SelfOrder')
    // })
    return (
        <ConnectedRouter history={history}>
        {/*Layout以外是登录、404等其他页面的所有路由*/}
            <Switch>
                <App>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/playlist" exact component={PlayList} />
                    <Route path="/enter" exact component={Enter} />
                    <Route path="/preference" exact component={Preference} />
                    <Route path="/selfdetails" exact component={SelfDetails} />
                    <Route path="/mcdetails" exact component={MCDetails} />
                    {/* <Route path="/bussnissrecord" exact component={BussnissRecord} />
                    <Route path="/selforder" exact component={SelfOrder} /> */}
                    
                    
                </App>
            </Switch>
            
        </ConnectedRouter>
    )
}

export default RouterConfig
