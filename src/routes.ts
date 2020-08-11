import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsControllers from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsControllers = new ConnectionsControllers();

routes.get('/classes', classesController.index );
routes.post('/classes', classesController.create );

routes.get('/connections', connectionsControllers.index );
routes.post('/connections', connectionsControllers.create );


export default routes;