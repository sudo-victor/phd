import React from 'react';

import {Container, Text} from './styles';

type ItemProps = {
  text: string;
};

const Item: React.FC<ItemProps> = ({text}) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Item;
