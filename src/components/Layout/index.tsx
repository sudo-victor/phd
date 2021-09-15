import React from 'react';
import {Container, Main} from './styles';

import Header from '../Header';

type LayoutProps = {
  title: string;
  hasPlus?: boolean;
  handlePlus?: () => any;
  hasGoBack?: boolean;
  handleGoBack?: () => any;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  hasPlus,
  handlePlus,
  hasGoBack,
}) => {
  return (
    <Container>
      <Header
        title={title}
        hasPlus={hasPlus}
        handlePlus={handlePlus}
        hasGoBack={hasGoBack}
      />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
