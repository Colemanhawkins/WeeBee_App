import { RequestHandler } from "express";
import Sensor from '../models/sensor';


export const createVideo: RequestHandler =  async(req, res) =>{
    const videoFound =  await Sensor.findOne({url: req.body.url})
    if(videoFound){
    return res.status(301).json({message: 'The url already exist'})
  }
    const sensor =  new Sensor(req.body)
    const saveSensor = await sensor.save()
    res.json(saveSensor)
};