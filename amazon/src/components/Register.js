import React,{Component} from 'react';

export class RegisterComponent extends Component{
   constructor(){
    super();
   }
   render(){
       return <div>
           <h1>Register</h1>
           <h2><input type = "text" placeholder="User Name" name="username" onChange={this.handleInputChange}/></h2>
           <h2><input type = "text" placeholder="Age" name="age" onChange={this.handleInputChange}/></h2>
           <h2><input type = "text" placeholder="gender" name="gender" onChange={this.handleInputChange}/></h2>
           <h2><input type = "checkbox" placeholder="terns and conditions" name="terms" onChange={this.handleInputChange}/></h2>
           <h2><input type = "button" placeholder="Register" name="register" onChange={this.handleInputChange}/></h2>
           </div>
   }
}

