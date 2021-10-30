import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import Register from '../pages/Register'

export default function PrivateRouter(props) {
    let { user } = useAuth();
    if (!user) return <Redirect to="/" />
    return (
        <Route {...props} />
    )
}
