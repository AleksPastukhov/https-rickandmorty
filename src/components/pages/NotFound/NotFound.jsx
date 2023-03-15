import { MainPage } from './NotFound.styled';
import { useParams, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  console.log(location);
  console.log(useParams());
  return (
    <MainPage>
      <b>404</b>
      <p>Sorry, we couldn't find that page :(</p>
    </MainPage>
  );
};

export default NotFound;
