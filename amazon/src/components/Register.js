
import React,{Component} from 'react';


 export class RegisterComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            firstname:"",
            lastname:"",
            email:"",
            age:"",
            gender:"",
            terms:""
        }
    }

    handleInputchange=(e)=>{
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
    }

    render(){
        return <div>
            <form>
                <div><label for="username">Username</label>
                <input type="text" placeholder="username" name="username" id="username" onChange={this.handleInputchange}/>
                <p> {this.state.username}</p>
                </div>
                <br />

                <div><label for="firstname">Firstname</label>
                <input type="text" placeholder="firstname" name="firstname" id="firstname" onChange={this.handleInputchange}/>
                <p> {this.state.firstname}</p>
                </div>
                <br />

                <div><label for="lastname">Lastname</label>
                <input type="text" placeholder="lastname" name="lastname" id="lastname" onChange={this.handleInputchange}/>
                <p> {this.state.lastname}</p>
                </div>
                <br />

                <div><label for="email">Email</label>
                <input type="email" placeholder="email" name="email" id="email" onChange={this.handleInputchange}/>
                <p> {this.state.email}</p>
                </div>
                <br />
                
                <div><label for="age">Age</label>
                <input type="text" placeholder="age" name="age" id="age" onChange={this.handleInputchange}/>
                </div>
                <br />

                <div><label for="gender">Gender</label></div>
                <div>
                <input type="radio" name="gender" if="gender" value="male" checked />
                <label >
                    Male
                </label>
                <input type="radio" name="gender" value="female" checked />
                <label >
                    Female
                </label>
                </div>

                <div><label for="terms">Terms and Conditions</label>
                <input type="checkbox" name="terms" id="terms" />
                <label>
                I agree to the  terms and Conditions
                </label>
                </div>
                </form>
        </div>;
    }
}

export default RegisterComponent;