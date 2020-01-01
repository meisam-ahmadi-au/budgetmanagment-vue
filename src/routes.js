import User from './components/User.vue';
import UserWithoutId from './components/UserWithoutId.vue';
import Home from './components/Home.vue';

export const routes = [
  {path: '', component: Home},
  {path: '/user', component: User},
  {path: '/user/:id', component: UserWithoutId},
];
