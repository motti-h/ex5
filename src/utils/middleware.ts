import { Response, Request, NextFunction, RequestHandler } from 'express';
import { Product } from '../models';
import passport from 'passport';
import { UserRole, UserCredential } from '../models';
import * as validation from '../validation/common';

export function middleCheckId(req: Request, res: Response, next: NextFunction): any {
    validation.getOrThrow<number>(req.params.id, validation.idSchema);
    next();
}

export function endError(err: any , req: Request, res: Response, next: NextFunction) {
  if (err.isJoi) {
    res.status(400).send(err.details);
    return;
  }
  if ( parseInt(err.message, 10) ) {
        res.sendStatus( parseInt(err.message, 10) );
    } else {
        next(err);
    }
}

export function middleCheckName(req: Request, res: Response, next: NextFunction): any {
  const newProduct: Product = req.body as Product;
  validation.getOrThrow<string>(newProduct.name, validation.nameSchema);
  next();
}

export function authenticate() {
  return passport.authenticate('jwt', {session: false});
}

export function authorize(...roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
      res.sendStatus(401);
      return;
    }
    const user = req.user as UserCredential;
    if (!roles.find(r => user.roles.indexOf(r) >= 0)) {
      res.sendStatus(403);
      return;
    }
    next();
  };
}
