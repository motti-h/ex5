import { Router } from 'express';
import { productRouter } from './productsRouter';
import { categoryRouter } from './categoryRouter';
import { loginRouter } from './loginRouter';
interface RouteConfig {
  prefix: string;
  router: Router;
}

const config: { [k: string]: RouteConfig } = {
  products: {
    prefix: 'api/products',
    router: productRouter,
  },
  category: {
    prefix: 'api/categories',
    router: categoryRouter,
  },
  login: {
    prefix: 'api/login',
    router: loginRouter,
  },
};

export { config };
