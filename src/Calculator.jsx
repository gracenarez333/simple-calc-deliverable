import React, {Component} from 'react'

export default class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        sum: 0,
        operator: '+'
    }
    setNum = (e) => {
        const changedInput = {
            [e.target.name]: Number(e.target.value)
        }
        this.setState(changedInput);
      }
    handleCalc = (e) => {
       e.preventDefault()
       this.setState(prevState => {
           let result = 0
           switch (this.state.operator) {
               case '+':
                   result = prevState.num1 + prevState.num2
                   break
               case '-':
                   result = prevState.num1 - prevState.num2
                   break
               case '*':
                   result = prevState.num1 * prevState.num2
                   break
               case '/':
                   result = prevState.num1 / prevState.num2
                   break
                   default:
                       console.warn(`${this.state.operator} is not a math function`)
           }
           return {sum: result}
       })
    }

    handleOperatorChange = e => {
        console.log(e)
        this.setState({ operator: e.target.value })
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
                <select 
                name='operator'
                onChange={this.handleOperatorChange}
                >
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='*'>*</option>
                    <option value='/'>/</option>
                </select>
                <input type="number" 
                    name="num2"
                    value={this.state.num2}
                    onChange={this.setNum}
                />
                <button 
                    onClick={this.handleCalc}
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