import CarCard from '../CarCard/CarCard';
import { MainContainer, GalleryWrap } from './CarGallery.styled'

const CarGallery = ({ cars }) => {
  return (
    <MainContainer>
      <GalleryWrap>

        {cars?.map(({ id, make, model, year, rentalPrice, address, rentalCompany, type, accessories, mileage, img }) => (
          <li key={id}>
            <CarCard carDetails={{
              id,
              img,
              make,
              model,
              year,
              rentalPrice,
              address,
              rentalCompany,
              type,
              accessories,
              mileage,
            }} />
          </li>
        ))}

      </GalleryWrap>
    </MainContainer>
  );
}

export default CarGallery;


