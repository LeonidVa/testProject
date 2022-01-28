import React, {Component} from 'react'

import './user.css';

export default class User extends Component {
    render() {
        return (
            <div className='appHeader'>
                <div
                    className='userName'>Петров В.А.
                </div>
                <div className='userLogo'>
                    <div className='userInicials'>
                        В.А.
                    </div>
                </div>
            </div>
        )
    }
}