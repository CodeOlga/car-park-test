import { useSelector } from 'react-redux';
import CarGallery from '../../components/CarGallery/CarGallery';
import { selectFavorites } from '../../redux/selectors';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);

  return (
    <>
      {favoriteCars.length === 0 && <p>Oops, you don't have favorite cars</p>}
      <CarGallery cars={favoriteCars} />
    </>
  );
};

export default Favorites;

// //=====================
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { persistor } from '../../redux/store';

// import { fetchFavorites, addFavorite, deleteFavorite } from '../../redux/favoritesSlice';
// import { selectFavorites } from '../../redux/selectors';
// import CarGallery from '../../components/CarGallery/CarGallery';

// const Favorites = () => {
//   const dispatch = useDispatch();
//   const favoriteCars = useSelector(selectFavorites);

//   useEffect(() => {
//     // Получение начальных данных после восстановления хранилища
//     persistor.subscribe(() => {
//       dispatch(fetchFavorites()); // Действие fetchFavorites загружает избранные машины
//     });
//   }, [dispatch]);

//   return (
//     <div>
//       <CarGallery
//         cars={favoriteCars}
//         onAddFavorite={(car) => dispatch(addFavorite(car))}
//         onDeleteFavorite={(carId) => dispatch(deleteFavorite(carId))}
//       />
//     </div>
//   );
// };

// export default Favorites;
