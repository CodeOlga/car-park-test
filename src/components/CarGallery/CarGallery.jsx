import CarCard from '../CarCard/CarCard';
import { MainContainer, GalleryWrap } from './CarGallery.styled';

const CarGallery = ({ cars }) => {
  return (
    <MainContainer>
      <GalleryWrap>

        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}

      </GalleryWrap>
    </MainContainer>
  );
}

export default CarGallery;
