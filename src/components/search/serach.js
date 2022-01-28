import React, {Component} from 'react'

import './search.css';

export default class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder='Поиск' className='searchInput'/>
            </div>
        )
    }
}