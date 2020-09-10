import React from 'react';
import Header from './components/Header'
import { LoginComponent } from './components/Login';
import { RegisterComponent } from './components/Register';
import Footer from './components/Footer';
const App=()=>{
    const companyName='Pega';
    return <div>
      
         <Header/>
        <h1>Welcome to Pega</h1>
        <LoginComponent/>
        <RegisterComponent/>
        <Footer/>
        
        
    </div>;
}

export default App;