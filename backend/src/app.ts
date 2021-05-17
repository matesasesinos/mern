import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';

import VideoRoutes from './routes/videos.route';

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(VideoRoutes);

export default app;