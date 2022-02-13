import './PhonebookList.css';
import PhonebookElement from './PhonebookElement';

// const PhonebookList = ({contacts, onDeleteContact}) => (
//     <ul className='PbList'>
//         {contacts.map(({id, name, number}) => (
//             <li key={id} className='PbList__item'>
//                 <p className='PbList__text'>{name} - {number}</p>
//                 <button onClick={() => onDeleteContact(id)}>Delete</button>
//             </li>
//         ))}
//     </ul>
// );


const PhonebookList = ({contacts, onDeleteContact}) => (
    <ul className='pblist'>
        {contacts.map(({id, name, number}) => (
            <PhonebookElement 
                id={id} 
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}/>
        ))}
    </ul>
);


export default PhonebookList;
