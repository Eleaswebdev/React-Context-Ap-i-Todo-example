import React from 'react';
import { UserConsumer }  from './UserContext';

 {/* logout function taken as props */}
const LoggedInNav = () => {  
    return (
        <UserConsumer>
            {/* here user not taken as props , its taken from context api state object*/}
            {({user, logout}) => (   
                <div>
                <p>
                    Hello {user.name}, Your Loggedin with {user.email}{''}
                </p>
                <ul className="list-unstyled list-inline-item">
                    <li className="list-inline-item">Dashboard</li>
                    <li className="list-inline-item" onClick={logout}>Logout</li>
                </ul>
                </div>
            )}
          
        </UserConsumer>
    );
}

const LoggedOutNav = () => {
    return (
        <>
         <UserConsumer>
            {({ login }) =>(
                <div>
                <p>Please click the login button below</p>
                <ul className="list-unstyled list-inline-item">
                    <li className="list-inline-item" onClick={login}>Login</li>
                    <li className="list-inline-item">Register</li>
                </ul>
                </div>
            )}
            
        </UserConsumer>
        </>
       
    );
}

const BasicNav = () =>{

    return (
        <UserConsumer>
            {({ isAuthenticated }) => (
                <>
                {isAuthenticated && <LoggedInNav />}
                {!isAuthenticated && <LoggedOutNav />}
              
                </>
            )}
        </UserConsumer>
    );

};

export default BasicNav;