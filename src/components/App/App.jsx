import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    // console.log(data);
    const newArray = this.state.contacts.map(contact => contact.name);
    if (newArray.includes(data.name)) {
      return alert(`${data.name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [
        { id: nanoid(), name: data.name, number: data.number },
        ...prevState.contacts,
      ],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmitData={this.formSubmitHandler} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
