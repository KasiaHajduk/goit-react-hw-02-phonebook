import {Component} from 'react';
import {nanoid} from 'nanoid';


export default class App extends Component{

    render () {
        return (
        <div>
            <p> Phonebook</p>

            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </div>
        );
    }
}
