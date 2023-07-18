import PropTypes from 'prop-types';
import { ListItem, Btn } from './ContactList.styled';

export function ContactList({ contacts, handlerDelete }){
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <Btn onClick={() => handlerDelete(id)}>Delete</Btn>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handlerDelete: PropTypes.func.isRequired,
};


