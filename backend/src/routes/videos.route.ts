import {Router} from 'express';
const router = Router();

import * as videoCtrl from '../controllers/videos.ctrl';

router.get('/videos', videoCtrl.getVideos);
router.get('/videos/:id', videoCtrl.getVideo);

router.post('/videos', videoCtrl.createVideos);

router.delete('/videos/:id', videoCtrl.deleteVideo);

router.put('/videos/:id', videoCtrl.updateVideo);


export default router;