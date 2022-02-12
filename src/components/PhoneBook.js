import {Component} from 'react';
import {nanoid} from 'nanoid';

import PhonebookList from './PhoneBook/PhonebookList/PhonebookList';


export default class PhoneBook extends Component{
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
          ],
    };

    addTodo = name => {
        const contact = {id: nanoid(), name};
        this.setState(({contacts}) => ({contacts: [contact], ...contacts}));
    }

    render () {
        const {contacts} = this.state;
        console.log(contacts);
        const totalContacts = contacts.length;
        
        return (
        <div>
            <p> Phonebook Kasi</p>


            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />

            <PhonebookList contacts={contacts}/>
        </div>
        );
    }
}
