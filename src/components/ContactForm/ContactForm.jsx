import { Component } from 'react';

import PropTypes from 'prop-types';
import { AddBtn, Form } from './ContactForm.styled';

export class ContactForm extends Component {
    static propTypes = {
        add: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
    state = {
        name: '',
        number: '',
    };

    handleInputNameChange = e => {
        this.setState({ name: e.currentTarget.value });
    };

    handleInputTelChange = e => {
        this.setState({ number: e.currentTarget.value });
    };

    handleFormSubmit = e => {
        e.preventDefault();

        this.props.add({ ...this.state });
        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <>
                <Form action="" onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleInputNameChange}
                            value={this.state.name}
                            placeholder='Petro Ivanovich'
                        />
                    </label>
                    <label htmlFor="number">
                        <p>Number</p>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.handleInputTelChange}
                            value={this.state.number}
                            placeholder='+380971112233'
                        />
                    </label>

                    <AddBtn type="submit">Add contact</AddBtn>
                </Form>
            </>
        );
    }
}