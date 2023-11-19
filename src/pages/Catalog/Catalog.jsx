import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarGallery from "../../components/CarGallery/CarGallery";
import SearchForm from "../../components/SearchForm/SearchForm";
// import Loader from "../../components/Loader/Loader";
import { fetchCars, fetchCarsMore } from "../../redux/operations";
import { selectCars, selectIsLoading, selectError } from "../../redux/selectors"; // Исправлен путь к селекторам
import { Button } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 12 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    dispatch(fetchCarsMore({ page: nextPage, limit: 12 }));
  };

  return (
    <>
      <SearchForm />
      <CarGallery cars={cars} />
      {isLoading && !error && <p>Loading...</p>}
      {!isLoading && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </>
  );
};

export default Catalog;

