import { useSelector } from 'react-redux';

import CarGallery from '../../components/CarGallery/CarGallery';
import { selectFavorites } from '../../redux/selectors';
import { FavoritesWrap, NoResultsImage } from './Favorites.styled';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);

  return (
    <FavoritesWrap>
      {favoriteCars.length === 0 && <NoResultsImage />}
      <CarGallery cars={favoriteCars} />
    </FavoritesWrap>
  );
};

export default Favorites;
