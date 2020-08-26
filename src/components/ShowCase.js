import React, { Component } from 'react';
import { UserConsumer, UserContext }  from './UserContext';

class AddItem extends Component {
    state = {
        value: ''
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    addItem = () => {
        if (this.state.value) {
            this.context.addToShowcase(this.state.value);
            this.setState({ value: '' });
        }
    };

    render() {
        return (
            <div className="d-flex my-3">
                <input
                  type='text'
                  className='form-control mr-2'
                  value={this.state.value}
                  onChange={this.handleChange}
                />

                <button
                  onClick={this.addItem}
                  className='btn btn-sm btn-primary btn-block'
                  >
                     Add item 
                  </button>
                
            </div>
        );
    }
}

AddItem.contextType = UserContext;

const ItemList = ({ items }) => {
    return (
        <UserConsumer>
             {({user}) => (
                <ul className="list-group">
                {user.languages.map( lang => (
                <li className="list-group-item" key={lang} >
                    {lang}
                </li>
                ))}
                </ul>
            )}
            
        </UserConsumer>
    );
};


//Main component

const Showcase = () => {
    return ( 
         
        <UserConsumer>
           {({user}) =>(
               <div>
               <h3>{user.name} Showcase:</h3>
               <AddItem />
               <ItemList />
               </div> 
           )}
        </UserConsumer>
    );
};

export default Showcase;
