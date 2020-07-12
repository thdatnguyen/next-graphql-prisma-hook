import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Form from './styles/Form';
import Error from './ErrorMessage.component';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
  ) {
    createItem(title: $title, description: $description, price: $price) {
      id
      title
    }
  }
`;

function CreateItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [image, setImage] = useState('');
  // const [largeImage, setLargeImage] = useState('');
  const [price, setPrice] = useState(0);
  const [createItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(typeof parseInt(price));
    createItem({ variables: { title, description, price: parseInt(price) } });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Error error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter a description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
}

export default CreateItem;
