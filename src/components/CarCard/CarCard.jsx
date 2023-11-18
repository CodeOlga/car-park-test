import { Image } from './CarCard.styled';

const CarCard = ({ carDetails }) => {
  const { id, make, model, year, rentalPrice, address, rentalCompany, type, accessories, mileage, img } = carDetails;

  return (
    carDetails && (
      <>
        <div>
          <Image src={img} width="274px" alt="car" loading="lazy" />
        </div>

        <ul>
          <li>{make}</li>
          <li>{model}</li>
          <li>{year}</li>
          <li>{rentalPrice}</li>
          <li>{address}</li>
          <li>Ukraine</li>
          <li>{rentalCompany}</li>
          <li>{mileage}</li>
          <li>{type}</li>
          <li>{id}</li>
          <li>{accessories[0]}</li>
        </ul>
      </>
    )
  );
}

export default CarCard;

