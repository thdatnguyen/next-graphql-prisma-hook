// @flow
import * as React from 'react';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';

function Item({ item: { id, title, price, description, image } }) {
  return (
    <ItemStyles>
      {image && <img src={image} alt={title} />}
      <Title>
        <Link
          href={{
            pathname: '/item',
            query: { id },
          }}
        >
          <a>{title}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(price)}</PriceTag>
      <p>{description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: { id },
          }}
        >
          <a>Edit</a>
        </Link>
        <button>Add To Cart</button>
        <button>Delete</button>
      </div>
    </ItemStyles>
  );
}

export default Item;
