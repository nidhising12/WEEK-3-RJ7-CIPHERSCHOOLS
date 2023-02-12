import React, { Component } from 'react'
import { testAPI } from '../apis/testApi'


class SumNumbers extends Component {
    state ={
        firstNumber:0,
        secondNumber :0,
        sum:0,
        sumString: "The Component has not rendered"
    }
    componentDidMount(){
        console.log("We are in Component Did Mount ")
        testAPI(5,6).then((sum) => {
            this.setSum(sum);
        })
    }

    componentDidUpdate(){
        console.log("Component Updated")
        this.setState({...this.state, sumString: `The sum is: ${this.state.sum}`});
    }

    setSum =( sum, firstNumber,secondNumber) => {
        if(typeof sum != "undefined"){
            this.setState({...this.state, sum})
        }
        else{
            this.setState({...this.state, sum: this.state.firstNumber + this.state.secondNumber})
        }
        
    }

    render(){
        return(
            <div>
                <input type="number" 
                placeholder='Enter the First Number'
                onChange={(e) => 
                {this.setState({
                    ...this.state, firstNumber:parseInt(e.target.value),
                })
                }}
                value={this.state.firstNumber}
                />

                <input type="number"
                    placeholder='Enter the First Number'
                    onChange={(e) => {
                        this.setState({
                            ...this.state, secondtNumber: parseInt(e.target.value),
                        })
                    }} 
                    value={this.state.secondtNumber}

                    />

                    <button onClick={(e) => this.setSum }> Add Number</button>
                    <h3>The sum is: {this.state.sum}</h3>
            </div>
        )
    }
}

export default SumNumbers;