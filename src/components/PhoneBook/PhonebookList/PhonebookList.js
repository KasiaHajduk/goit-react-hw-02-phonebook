import './PhonebookList.css';
import PhonebookElement from './PhonebookElement';


// function PhonebookList (contacts, filter, onDeleteContact) {
//     // const contacts = props.contacts;
//     // const filter = props.filter;
//     // const deleteContact = props.onDeleteContact;
//     const normalizedFilter = filter.toLowerCase();
//     const tempContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
//     return (
//         <ul className='PbList'>
//             {tempContacts.map((contact) => (
//             <PhonebookElement contact = {contact} onDeleteContact={onDdeleteContact}/> ))}
//     </ul>
//     )
// };

const PhonebookList = ({contacts, onDeleteContact}) => (
    <ul className='PbList'>
        {contacts.map(({id, name, number}) => (
            <li key={id} className='PbList__item'>
                <p className='PbList__text'>{name} - {number}</p>
                <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);


export default PhonebookList;
