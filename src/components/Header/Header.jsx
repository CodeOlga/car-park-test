import { HeaderWrap, Logo, Navigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Logo>Car Rent</Logo>
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