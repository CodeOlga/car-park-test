import { HomeWrap, BackgroundImage, Title, Text, Span, Button } from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <BackgroundImage />
      <Title>Welcome to <Span>Car Rent</Span></Title>
      <Text>your trusted car rental solution in Ukraine</Text>
      <Button type='button'>Rental car</Button>
    </HomeWrap>
  )
};

export default Home;