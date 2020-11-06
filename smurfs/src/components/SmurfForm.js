import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'

class SmurfForm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            height: ''

        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: '',
        })
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <label>Name:
                <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
            </label>
            <label>Age:
                <input type="number" name="age" onChange={this.onChange} value={this.state.age} />
            </label>
            <label>Height (in cm)
                <input type="text" name="height" onChange={this.onChange} value={this.state.height} />
            </label>
            <br />
            <br />
            <button>Add Smurf</button>
        </form>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {addSmurf}) (SmurfForm)