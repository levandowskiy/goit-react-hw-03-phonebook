import { Component } from "react";
import PropTypes from "prop-types";
import {Form} from "./ContactForm.styled";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    const isContactExists = contacts.find(
      (contact) => contact.name === event.target.name.value
    );

    if (isContactExists) {
      alert(`${isContactExists.name} is already in contacts`);
      return;
    }

    this.props.addContact(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <Form onSubmit={this.submitHandler}>
        <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputHandler}
            value={name}
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.inputHandler}
            value={number}
          />
          <button type="submit">Add contact</button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
