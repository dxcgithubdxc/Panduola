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
    return (
        <ConnectedRouter history={history}>
        {/*Layout以外是登录、404等其他页面的所有路由*/}
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <App>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/playlist" exact component={PlayList} />
                        
                    </Switch>
                </App>
            </Switch>
        </ConnectedRouter>
    )
}

export default RouterConfig
