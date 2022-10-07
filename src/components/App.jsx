import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contacs from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './ContactForm/ContactForm.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  hendleAddContact = contact => {
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };

  hendleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const optimizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(optimizedFilter)
    );
    // console.log(this.state.contacts);
    return (
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <h1>Phonebook</h1>
          <ContactForm hendleAddContact={this.hendleAddContact} />

          <h2>Contacts</h2>
          <Filter filter={this.state.filter} onFilter={this.hendleFilter} />

          <Contacs contacts={filteredContacts} />
        </div>
      </div>
    );
  }
}
