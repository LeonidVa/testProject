import React, {Component} from 'react'
import MenuItem from "../menu-item/menu-item";
import CompanyLogo from "../company-logo/company-logo";

import './menu.css';

export default class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <CompanyLogo/>
                <MenuItem/>
            </div>
        )
    }
}