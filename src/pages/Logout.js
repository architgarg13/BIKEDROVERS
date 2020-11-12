import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";

export default class Logout extends Component {
    constructor(props){
        super(props)
       sessionStorage.removeItem("token")
       sessionStorage.removeItem("name")
    }
    render()
{
    return <Redirect to="/" />
}
}
