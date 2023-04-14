import React from 'react';
import { nanoid } from 'nanoid';
import Container from './Container/Container';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const localContact = localStorage.getItem('contacts')
    if (localContact) {
      this.setState({ contacts: JSON.parse(localContact) })
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      return true;
    }
    return false;
  }


  AddingContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (contacts.find(item => item.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    }
    const ContactId = nanoid();
    const contact = {
      name: name,
      id: ContactId,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  changeFIlter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== contactId),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm add={this.AddingContact} contacts={contacts} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFIlter} />
          <ContactList
            visibleContact={visibleContact}
            deleteContacts={this.deleteContacts}
          />
        </Container>
      </>
    );
  }
}