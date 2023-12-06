import React, { Component } from 'react'
export default class ClassDemo extends Component {
    constructor(props)
    {
         super(props);
         this.state={count:0};

    };
    handeleIncrement=()=>
    {
        this.setState(prevState=>({count:prevState.count+1}));
    };
    handeleDecrement=()=>
    {
        if(this.state.count>0)
        {
            this.setState(prevState=>({count:prevState.count-1}));
            
        }
        else{
            
            this.setState(prevState=>({count:0}));
        }
    };
    addTo=()=>
    {
        if(this.state.count>0){
        alert(this.state.count+"added to cart sucessfully")
        }
        else{
            alert("please add")
        }
    };
  render() {
    return (
      <div>
      <table>
      <thead>
      <th>image</th><th>description</th><th>count</th><th>cart</th>
      </thead>
      <tbody>
      <tr>
        <td><img src={this.props.img}></img></td>
        <td>
            Name: {this.props.desc}
        </td>
        <td>
            price: {this.props.price}
        </td>
        <td>
            <button onClick={this.handeleIncrement}> + </button>{this.state.count}
            <button onClick={this.handeleDecrement}> - </button>
        </td>
        <td>
        <button onClick={this.addTo}>Add to cart</button>
        </td>
        </tr>
      </tbody>
      
      </table>
      </div>
    )
  }
}
