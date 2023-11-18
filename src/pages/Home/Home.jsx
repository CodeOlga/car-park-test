import { Link } from 'react-router-dom';

import { HomeWrap, BackgroundImage, Title, Text, Span, Button } from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <BackgroundImage />
      <Title>Welcome to <Span>Car Rent</Span></Title>
      <Text>your trusted car rental solution in Ukraine</Text>
      <Link to="/catalog">
        <Button type='button'>Rental car</Button>
      </Link>
    </HomeWrap>
  )
};

export default Home;