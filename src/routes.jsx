
import Homepage from './pages/Home';
import ActorsPage from './pages/Actors';
import MoviePage from './pages/Movie';
import DirectorsPage from './pages/Directors';
import ErrorPage from './components/ErrorPage';

const routesConfiq = [
   {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
   },
   {
    path:'/actors',
    element: <ActorsPage />
   },
   {
    path: '/movie/:id',
    element: <MoviePage />
   },
   {
    path: '/directors',
    element: <DirectorsPage />
   },

];

export default routesConfiq;