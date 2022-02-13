import './PhonebookList.css';

const PhonebookElement = ({id, name, number, onDeleteContact}) => (
    <li key={id} className='pblist__item'>
        <p className='pblist__text'> * {name} &nbsp;&nbsp;&nbsp;&nbsp; {number}  </p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
);

export default PhonebookElement;