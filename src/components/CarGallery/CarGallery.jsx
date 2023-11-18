import CarCard from '../CarCard/CarCard';

const CarsGallery = ({ cars }) => {
  return (
    <>
      <ul>
        {cars?.map(({ id, make, model, year, rentalPrice, address, rentalCompany, type, accessories, mileage, img }) => (

          <li key={id}>
            <CarCard key={id}
              id={id}
              make={make}
              model={model}
              year={year}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
              type={type}
              accessories={accessories}
              mileage={mileage}
              img={img} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CarsGallery;


