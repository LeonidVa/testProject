import React, {Component} from 'react'

import './menu-item.css';

const Arr = ['Главная', 'Клиенты', 'Сотрудники', 'Аналитика']

export default class MenuItem extends Component {

    elements = Arr.map((item) => {

        return (
            <li className='list-group-item categories'>
                <div className='logoOfCategory'>

                </div>
                <div className='nameOfCategory'>
                    {item}
                </div>
            </li>
        );
    });


    render() {
        return (
            <div>
                <ul className='list-group'>
                    <div>
                        {this.elements}
                    </div>
                </ul>
            </div>
        )
    }
}