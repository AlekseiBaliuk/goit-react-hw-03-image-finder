import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookButton,
} from './ContactForm.styled';

class ContactForm extends Component {
  static propTypes = {
    onSubmitData: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    this.props.onSubmitData(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <PhonebookLabel>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </PhonebookLabel>
        <PhonebookLabel>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </PhonebookLabel>
        <PhonebookButton type="submit">Add Contact</PhonebookButton>
      </PhonebookForm>
    );
  }
}

export default ContactForm;
