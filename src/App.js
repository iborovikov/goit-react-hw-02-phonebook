import { Component } from 'react';
import './App.css';
import Form from './Components/Form/Form'
import Filter from './Components/Filter/filter'
import Contacts from './Components/Contacts/Contacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  };

  onInputChange = (name, value) => {
    this.setState(
      { [name]: value }
    )
  };

  resetInput = () => {
    this.setState({
      filter: '',
      name: '',
      number: ''
    });
  };

  onFormSubmit = () => {
    const id = shortid.generate();
    this.setState((prevState) =>
      prevState.contacts.push({
        name: prevState.name,
        number: prevState.number,
        id
      })
    )
    this.resetInput()
  };

  render() {


    const normalizedContact = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(normalizedContact))
    return (
      <>
        <h1>Phonebook</h1>
        <Form name={this.state.name} number={this.state.number} onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter onInputChange={ this.onInputChange } filter={this.state.filter} />
        <Contacts contacts={visibleContacts} />
      </>
    )
  };
  
   
  
}


export default App;
