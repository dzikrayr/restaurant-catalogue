/* eslint-disable linebreak-style */
/* eslint-disable no-dupe-keys */
/* eslint-disable linebreak-style */
import RestaurantsList from '../views/pages/resto-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/favorite';

const routes = {
  '/': RestaurantsList, // default page
  '/resto-list': RestaurantsList,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
