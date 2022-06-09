import React, {Component} from 'react'

export default class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        sum: 0
    }
    setNum = (e) => {
        this.setState({ [e.target.name]: e.target.value});
      }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.sum)
        this.setState({
            num1: '',
            num2: '',
            sum: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }
    render() {
        return(
            <div className="caclulator">
            <h1>Add with React!</h1>

            <form onSubmit={this.calculate}>
                <input type="number" 
                    name="num1"
                    value={this.state.num1}
                    onChange={this.setNum}
                />
                <span>+</span>
                <input type="number" 
                    name="num2"
                    value={this.state.num2}
                    onChange={this.setNum}
                />
                <button 
                    onClick={this.handleSubmit}
                    type='submit'
                >
                    =
                </button>
                <h3>{this.state.sum}</h3>
            </form>
        </div>
        )
    }
}