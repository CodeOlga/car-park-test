import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarGallery from "../../components/CarGallery/CarGallery";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchCars, fetchCarsMore } from "../../redux/operations";
import { selectCars, selectIsLoading } from "../../redux/selectors";
import { Button } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 12 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    dispatch(fetchCarsMore({ page: nextPage, limit: 12, append: true }));
  };

  const isEndOfCollection = cars.length % 12 !== 0;

  return (
    <>
      <SearchForm />
      <CarGallery cars={cars} />
      {!isLoading && !isEndOfCollection && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </>
  );
};

export default Catalog;

