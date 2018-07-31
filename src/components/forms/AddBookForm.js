import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import Button from '../base/Button';
import { Input } from '../base/Input';


class AddBookForm extends Component {
  state = {
    data: {
      image: '',
      title: '',
      author: '',
      price: 0.00
    },
    loading: false,
    errors: {}
  };

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: false
      })
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isURL(data.image)) errors.image = "Please enter a valid url";
    if (!data.price) errors.price = "Please enter amount"; else if (!Validator.isFloat(data.price, { min: 1, max: this.props.top })) errors.price = "Too expensive for a book";
    if (!data.author) errors.author = "Please enter a valid name";
    if (!data.title) errors.title = "Please enter a valid title";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && <Message negative>
          <Message.Header>OMG!! Something went wrong</Message.Header>
          <p>{errors.global}</p>
        </Message>}
        <Form.Field error={!!errors.author}>
          <label htmlFor="author">Author</label>
          <Input
            type="text"
            id="author"
            name="author"
            placeholder="Charles Burns"
            value={data.author}
            onChange={this.onChange}
          />
          {errors.author && <InlineError text={errors.author} />}
        </Form.Field>
        <Form.Field error={!!errors.title}>
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="El Borbah"
            value={data.title}
            onChange={this.onChange}
          />
          {errors.title && <InlineError text={errors.title} />}
        </Form.Field>
        <Form.Field error={!!errors.price}>
          <label htmlFor="price">Price</label>
          <Input
            type="number"
            id="price"
            min="0"
            name="price"
            placeholder="1"
            step='0.01'
            value={data.price}
            onChange={this.onChange}
            required
          />
          {errors.price && <InlineError text={errors.price} />}
        </Form.Field>
        <Form.Field error={!!errors.price}>
          <label htmlFor="image">Cover</label>
          <Input
            type="text"
            id="image"
            className="ctm-input"
            min="0"
            name="image"
            placeholder="place your hosted img url"
            value={data.image}
            onChange={this.onChange}
          />
          {errors.image && <InlineError text={errors.image} />}
        </Form.Field>
        <Button marTop='5em' text='Send' />
      </Form>
    )
  }
}

AddBookForm.propTypes = {
  submit: PropTypes.func.isRequired,
}


export default AddBookForm;