import React from 'react';
import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Item from './Item.component';
import Empty from './Empty.component';

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
`;

const ALL_ITEMS_QUERY = gql`
  {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

function Items() {
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data?.items?.length < 1) return <Empty />;
  return (
    <Center>
      <ItemsList>
        {data.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ItemsList>
    </Center>
  );
}

export default Items;
