import React, {Component} from 'react'

import './filter.css';

const Arr = ['Дата от', 'Дата до', 'Имя клиента', 'Телефон', 'Дата от', 'Дата до', 'Имя клиента', 'Телефон']


export default class Filter extends Component {
    state = {
        filtered: false,
    };

    onButtonClick = () => {
        this.setState(({filtered}) => {
            return {
                filtered: !filtered
            };
        });
        console.log(this.state)
    };

    elements = Arr.map((item) => {

        return (
            <div className='item'>
                <input placeholder={item} className='inputFilter'/>
            </div>
        );
    });


    render() {
        const {filtered} = this.state
        let classNames = 'itemFilters';
        if (filtered) {
            classNames += ' displayFlex'
        }

        return (
            <React.Fragment>
                <div className='buttonSearchDiv'>
                    <button className='btnSearch'
                            onClick={this.onButtonClick}
                    >
                        <img src={require('./gear.png')} alt=""
                             className='imageGear'
                        />
                    </button>
                </div>
                <div className={classNames}>

                    {this.elements}
                </div>

            </React.Fragment>
        )
    }
}