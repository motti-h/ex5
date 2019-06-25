import { Product, Category, User, UserCredential, UserRole } from '../models';
import {  } from '../models';
import products from './products.json';
import categories from './categories.json';

import users from './users.json';

interface Store {
  products: Product[];
  categories: Category[]; 
  users: User[];
  credentials: UserCredential[];
}

const store: Store = {
  products,
  categories,
  users,
  credentials: [
    { email: 'a', password: 'a', userId: 1, roles: [UserRole.Contributor] },
    { email: 'b', password: 'b', userId: 2, roles: [UserRole.Contributor] },
    { email: 'c', password: 'c', userId: 3, roles: [UserRole.Admin] },
    { email: 'd', password: 'd', userId: 4, roles: [UserRole.Reader] },
  ],
};

export { store };