import express from 'express';

import note from './note';

const router = express.Router();

export default (): express.Router => {

  note(router);

  return router;
};
