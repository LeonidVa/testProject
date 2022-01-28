import React, {Component} from 'react'
import User from "../user/user";
import Search from "../search/serach";
import './app-header.css';


export default class AppHeader extends Component {
    render() {
        return (
            <div className='appHeader'>
                    <Search/>
                    <User/>
            </div>

        )
    }
}