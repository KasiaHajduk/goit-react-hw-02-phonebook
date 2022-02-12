import './PhonebookList.css';

// const PhonebookList = ({contacts}) => {
//     return (
//     <ul className='PbList'>
//         {contacts.map(({id, name, number}) => 
//         <li key={id} className='PbList__item'>
//             <p className='PbList__text'>{name} - {number}</p>
//         </li>)}
//     </ul>
//     )
// };


function PhonebookList (props) {
    const contacts = props.contacts;
    return (
    <ul className='PbList'>
        {contacts.map((contact) => 
        <li key={contact.id} className='PbList__item'>
            <p className='PbList__text'>{contact.name} - {contact.number}</p>
        </li>)}
    </ul>
    )
};

export default PhonebookList;
