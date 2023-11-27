// import CarCard from '../CarCard/CarCard';
// import { MainContainer, GalleryWrap } from './CarGallery.styled';

// const CarGallery = ({ cars }) => {
//   return (
//     <MainContainer>
//       <GalleryWrap>

//         {cars.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}

//       </GalleryWrap>
//     </MainContainer>
//   );
// }

// export default CarGallery;

// ===========GPT==============
// import CarCard from '../CarCard/CarCard';
// import { MainContainer, GalleryWrap } from './CarGallery.styled';
// import { useSelector } from 'react-redux';
// import { selectCars, selectFilteredCars } from '../../redux/selectors';

// const CarGallery = () => {
//   const allCars = useSelector(selectCars);
//   const filteredCars = useSelector(selectFilteredCars);

//   const carsToDisplay = filteredCars.length > 0 ? filteredCars : allCars;

//   return (
//     <MainContainer>
//       <GalleryWrap>
//         {carsToDisplay.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}
//       </GalleryWrap>
//     </MainContainer>
//   );
// }

// export default CarGallery;

// ========Pet============
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
