import React from 'react'
import { Redirect } from 'react-router-dom'

const IsLoggedIn = ComponentToProtect => {
    const Result = () => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            return <ComponentToProtect />
        } else {
            return <Redirect to="/login" />
        }
    }
    return Result
}

export default IsLoggedIn