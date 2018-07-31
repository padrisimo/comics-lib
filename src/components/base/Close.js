import React from 'react';
import styled from 'styled-components';

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 1em 0 1em;
  cursor: pointer;
  font-size: 1.4rem;
`;


const Close = ({text, close}) => (
  <CloseBtn onClick={close} text={text}>{text}</CloseBtn>
);

export default Close;
