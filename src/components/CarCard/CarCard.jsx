import { CardWrap, ImageWrap, Image, List, Item, FirstLine, Title, Span, SecondLine, ThirdLine, Button } from './CarCard.styled';

const CarCard = ({ carDetails }) => {
  if (!carDetails) {
    return null;
  }
  const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, accessories, mileage } = carDetails;

  return (
    <CardWrap>
      <ImageWrap>
        <Image src={img} width="274px" alt="car" loading="lazy" />
      </ImageWrap>

      <List>
        <FirstLine>
          <Title>
            {make} <Span>{model}</Span>, {year}
          </Title>
          <Item>{rentalPrice}</Item>
        </FirstLine>

        <SecondLine>
          <Item>{address.split(",")[1]}</Item>
          <Item>{address.split(",")[2]}</Item>
          <Item>{rentalCompany}</Item>
        </SecondLine>
        <ThirdLine>
          <Item>{mileage}</Item>
          <Item>{type}</Item>
          <Item>{id}</Item>
          <Item>{accessories[0]}</Item>
        </ThirdLine>
      </List>
      <Button type='button'>Learn more</Button>
    </CardWrap >
  )
}

export default CarCard;

