import { Link } from 'react-router-dom';

import { HeaderWrap, Logo, Navigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Link to="/">
          <Logo>Car Rental</Logo>
        </Link>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to='/catalog'>Catalog</StyledNavLink>
          <StyledNavLink to='/favorites'>Favorites</StyledNavLink>
        </Navigation>
      </HeaderWrap>
    </>
  )
};

export default Header;