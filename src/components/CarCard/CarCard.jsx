import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectFavorites } from '../../redux/selectors';
import { addFavorite, deleteFavorite } from '../../redux/favoritesSlice';
import { CardWrap, ImageWrap, Image, FavoriteButton, List, Item, FirstLine, Title, Span, SvgSpan, SecondLine, ThirdLine, Button } from './CarCard.styled';

const CarCard = ({ carDetails }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  if (!carDetails) {
    return null;
  }

  const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, accessories, mileage } = carDetails

  const handleAddFavorite = () => {
    dispatch(addFavorite(carDetails));
  };

  const handleRemoveFavorite = () => {
    dispatch(deleteFavorite(carDetails));
  };

  const isFavorite = favorites.find(function (item) {
    return item.id === carDetails.id;
  });

  return (
    <CardWrap>
      <ImageWrap>
        <Image src={img} width="274px" alt="car" loading="lazy" />
        {isFavorite ? (
          <FavoriteButton type="button" onClick={handleRemoveFavorite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" fill="#3470FF" stroke="#3470FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </FavoriteButton>
        ) : (
          <FavoriteButton type="button" onClick={handleAddFavorite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </FavoriteButton>
        )}
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