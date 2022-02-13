
function PhonebookElement (props, onDeleteContact) {
    const contact = props.contact; 
    
    return (
        <li key={contact.id} className='PbList__item'>
            <p className='PbList__text'>{contact.name} - {contact.number}</p>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
    )
};

export default PhonebookElement;