import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({path: './config/config.env'})

const adminMiddleware = (req, res, next) => {
    let token = req.header('adminToken');
    if (!token) {
      return res.status(401).send({ msg: 'You are not authorized to access this route.' });
    }
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
      if (data.user.role !== 'admin') {
        return res.status(403).send({ msg: 'You do not have permission to access this route.' });
      }
      req.user = data.user;
      next();
    } catch (err) {
      return res.status(401).send({ msg: 'Token is not valid.' });
    }
  };
  
  const dealerMiddleware = (req, res, next) => {
    let token = req.header('dealerToken');
    if (!token) {
      return res.status(401).send({ msg: 'You are not authorized to access this route.' });
    }
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_DEALER);
      if (data.user.role !== 'dealer') {
        return res.status(403).send({ msg: 'You do not have permission to access this route.' });
      }
      req.user = data.user;
      next();
    } catch (err) {
      return res.status(401).send({ msg: 'Token is not valid.' });
    }
  };

  const commonMiddleware = (req, res, next) => {
    let token;
    if (req.header('adminToken')) {
      token = req.header('adminToken');
    } else if (req.header('dealerToken')) {
      token = req.header('dealerToken');
    } else if (req.header('commonToken')) {
      token = req.header('commonToken');
    }
  
    if (!token) {
      return res.status(401).send({ msg: 'You are not authorized to access this route.' });
    }
  
    try {
      let secret;
      if (req.header('adminToken')) {
        secret = process.env.JWT_SECRET_ADMIN;
      } else if (req.header('dealerToken')) {
        secret = process.env.JWT_SECRET_DEALER;
      } else if (req.header('commonToken')) {
        secret = process.env.JWT_SECRET_COMMON;
      }
  
      const data = jwt.verify(token, secret);
      req.user = data.user;
      next();
    } catch (err) {
      return res.status(401).send({ msg: 'Token is not valid.' });
    }
  };
  

export { adminMiddleware, dealerMiddleware, commonMiddleware }