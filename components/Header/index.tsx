import { H1, LogoWrapper, StyledHeader } from './ui';

import Logo from './logo';

const Header = () => (
  <StyledHeader>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <H1>Property search tool</H1>
  </StyledHeader>
);

export default Header;
