import React, { Component, createContext } from 'react';

import BasicNav from './BasicNav';
import ShowCase from './ShowCase';
import {UserProvider, UserConsumer} from './UserContext';


class MainApp extends Component {

    
    render() {
         {/* In Context.Provider value name should be value all time */ }
        return (
            <UserProvider 
           
            >  
               <div className="container">
                <div className="row">
                  <UserConsumer>
                  {( {isAuthenticated} ) => (
                        <div className="col-sm-6 offset-sm-3">
                        <h1>Context api example</h1>
                        <hr />

                        <BasicNav />
                        <hr />
                        { isAuthenticated &&(
                            <ShowCase                            
                            />
                        )}
                        </div>
                   )}
                  </UserConsumer>
                </div>
            </div> 
            </UserProvider>
            
        );
    }
}

export default MainApp;