import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from '../shared/breadcrumbs/Breadcrumbs'
import { IRoute } from './routes.interfaces'

interface IRoutesProps {}

export const Routes: React.FC<IRoutesProps> = (props) => {
    return (
        <>
            <Switch>
                {Object.keys(routes).map((key) => {
                    const route = routes[key]

                    return (
                        <Route
                            key={key}
                            exact={route.exact}
                            path={route.path}
                            render={(props) => buildComponent(route)}
                        />
                    )
                })}
                <Route path={'/'}>
                    {/* 
                    The base path will only be used for logging in
                 */}
                    <Redirect to={routes.Dashboard.path} />
                </Route>
            </Switch>
        </>
    )
}

const buildComponent = (route: IRoute) => {
    return (
        <route.layout>
            <route.component {...route} />
        </route.layout>
    )
}
