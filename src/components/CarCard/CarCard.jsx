import { CardWrap, ImageWrap, Image, List, Item, FirstLine, Title, Span, SvgSpan, SecondLine, ThirdLine, Button } from './CarCard.styled';

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
          <Item>{address.split(",")[1]}
            <SvgSpan>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
              </svg>
            </SvgSpan>
          </Item>
          <Item>{address.split(",")[2]}
            <SvgSpan>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
              </svg>
            </SvgSpan>
          </Item>
          <Item>{rentalCompany}
            <SvgSpan>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
              </svg>
            </SvgSpan>
          </Item>
        </SecondLine>
        <ThirdLine>
          <Item>{mileage}
            <SvgSpan>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
              </svg>
            </SvgSpan>
          </Item>
          <Item>{type}
            <SvgSpan>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
              </svg>
            </SvgSpan>
          </Item>
          <Item>{id}
            <SvgSpan>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
              </svg>
            </SvgSpan>
          </Item>
          <Item>{accessories[0]}
            <SvgSpan>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
              </svg>
            </SvgSpan>
          </Item>
        </ThirdLine>
      </List>
      <Button type='button'>Learn more</Button>
    </CardWrap >
  )
}

export default CarCard;

