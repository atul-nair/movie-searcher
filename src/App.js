import React from 'react'
import Signup from './components/Signup.js';
import Dashboard from './components/Dashboard.js';
import Login from './components/Login.js';
import {Container} from 'react-bootstrap';
import {AuthProvider} from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

 export default function App() {

     return (
        

            <Container fluid style={{ padding: "200px 0", margin: "0 auto", maxWidth: "450px", }}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <Route exact path= "/" component={Dashboard}/>
                            <Route path= "/signup" component={Signup} />
                            <Route path= "/login" component={Login} />
                        </Switch>
                    </AuthProvider>

                </Router>
                
    
            </Container>

        


         
         
       

     )
   
 }
 