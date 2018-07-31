import React from 'react';
import styled from 'styled-components';

const BookCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: .5em;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 1em;
  cursor: pointer;
  & > .money{
    font-weight: bold;
    font-size: 1.1em;
  }
  & > span > .small{
    font-size: .8em;
    color: grey;
  }
  
`

const Card = ({book, showCard}) => (
  <BookCard key={book.id} onClick={() => showCard(book)}>
      <span>
        <div>{book.title}</div>
        <div className="small">{book.author}</div>
      </span>
      <span className='money'>{parseFloat(book.price).toFixed(2)}€</span>
    </BookCard>
);

export default Card;















