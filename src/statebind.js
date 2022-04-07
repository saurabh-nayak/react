import * as axios from 'axios';
import React, { Component } from 'react'

class statebind extends Component {
    constructor(props) {
      super(props)
      this.state = {
         'name':'saurabh',
         'subject':'Physics',
         'marks':50
      }
    }
  render() {
    return (
      <div>
        <form onSubmit={(event)=>
            {
                console.log('clicked');event.preventDefault();
                axios.post('http://localhost:8080/run', this.state).then(response=>{ console.log(response)});
            }
            }>
          <input id='i1' value={this.state.name} className='form-control' type='text' name='name' onChange={(name)=>
            {
             this.setState({name:name.target.value});
            }}/>
             <input id='i2' value={this.state.subject} className='form-control' type='text' name='subject' onChange={(subject)=>
            {
             this.setState({subject:subject.target.value});
            }}/>
             <input id='i3' value={this.state.marks} className='form-control' type='text' name='marks' onChange={(marks)=>
            {
             this.setState({marks:marks.target.value});
            }}/>
        {/* <h2>{this.state.name}</h2>
        <h2>{this.state.subject}</h2>
        <h2>{this.state.marks}</h2> */}
        <input type='submit' className='btn btn-primary' value='Submit'/>
        </form>
      </div>
    )
  }
  submit(event){
      
      return false;
    // Axios.post('http://localhost:8080/run', this.state).then(response=>{ console.log(response)});
  }
}

export default statebind