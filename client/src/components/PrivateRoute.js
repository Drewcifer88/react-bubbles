import React, { Component } from 'react';
import { Route , Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (localStorage.getItem('token')) {
                return <Component {...props}/>
            } else {
                reutrn <Redirect to="/login" />
            }
        }} 
        />
    )
}
export default PrivateRoute;