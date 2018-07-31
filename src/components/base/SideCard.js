import React from 'react';
import styled from 'styled-components';

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2em;
`;


const SideCard = ({book}) => {
  return (
    <BookCard>
      <h1>{book.title}</h1>
      <img src={book.image} alt="cover"/>
    </BookCard>
  );
}

export default SideCard;
