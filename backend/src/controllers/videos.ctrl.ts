import { RequestHandler } from 'express';
import Video from '../models/Video';

export const createVideos: RequestHandler = async (req, res) => {

    const videoFound = await Video.findOne({ url: req.body.url });

    if (videoFound) {
        return res.status(301).json({ message: 'The url already exists' });
    }

    const video = new Video(req.body);
    const saveVideo = await video.save();

    res.json(saveVideo)
};

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos)
    } catch (err) {
        res.json(err);
    }
};

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);

    if (!videoFound) return res.status(204).json();

    return res.json(videoFound);
};

export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);

    if (!videoFound) return res.status(204).json();

    return res.json(`Video Delete ${videoFound}`);
};

export const updateVideo: RequestHandler = async (req, res) => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true});

    if (!videoUpdate) return res.status(204).json();

    return res.json(videoUpdate);
};