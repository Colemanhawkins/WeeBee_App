import { RequestHandler } from "express";
import SensorEvent from '../models/sensorEvent';
import Sensor from "../models/sensor";

export const createSensorEvent: RequestHandler =  async(req, res) =>{
    try{
    const sensorFound =  await Sensor.findById(req.params.id)
    if(!sensorFound){
    return res.status(301).json({message: 'The sensor not exist'})
  }
    const sensorEvent =  new SensorEvent(req.body)
    const saveSensorEvent = await sensorEvent.save()
    res.json(saveSensorEvent)
}catch (err){
    return res.status(404).send(err)
}
}

  export const getSensorEvents: RequestHandler = async(req, res) =>{
      try{
    const sensorEventsFound = await SensorEvent.find({ SensorId : req.params.id})
    if(!sensorEventsFound){
      return res.status(204).json({message : 'sensorEvents empty'});
    }
      return res.json(sensorEventsFound)
  }catch (err){
    return res.status(404).send(err)
}
};
  