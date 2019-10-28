import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export class ThirdPage extends Component {
    render(props) {
        const{name,address,city,regNo}=this.props

        return (
                <div className="firstPage">
                    <h1>Name:{name}</h1>
                    <h1>Address:{address}</h1>
                    <h1>City:{city}</h1>
                    <h1>Registration Number:{regNo}</h1>

                    <Button type="primary" onClick={this.props.previous}>Previous</Button>
                    </div>
        )
    }
}

export default ThirdPage
