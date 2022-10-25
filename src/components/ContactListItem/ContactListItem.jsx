import React from 'react';
import PropTypes from 'prop-types';
import { ContactListButton, ContactListLi } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ContactListLi>
      {`${name}: ${number}`}
      <ContactListButton
        type="button"
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </ContactListButton>
    </ContactListLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
