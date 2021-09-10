import express from 'express';
import config from './config/config'
import morgan from 'morgan';
import cors from 'cors'
import router from './routes/index'

const app = express();

app.set('port', config.PORT)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router)

export default app