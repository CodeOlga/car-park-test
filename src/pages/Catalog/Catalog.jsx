import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarGallery from "../../components/CarGallery/CarGallery";
import SearchForm from "../../components/SearchForm/SearchForm";
import { fetchCars } from "../../redux/operations";
import { selectCars, selectIsLoading } from "../../redux/selectors";
import { Button } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCars(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
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

