import { RequestHandler } from "express";
import Sensor from '../models/sensor';

export const createSensor: RequestHandler =  async(req, res) =>{
  try{
    const sensorFound =  await Sensor.findOne({name: req.body.name})
    if(sensorFound){
    return res.status(301).json({message: 'The sensor name is busy, change the name'})
  }
    const sensor =  new Sensor(req.body)
    const saveSensor = await sensor.save()
    res.json(saveSensor)
}catch (err){
  return res.status(404).send(err)
}
}


export const getSensors: RequestHandler = async (req, res) =>{
  try {
      const sensors = await Sensor.find();
      return res.json(sensors)
  } catch (err) {
      return res.status(404).json(err)
  }
};


export const deleteSensor: RequestHandler = async (req, res) =>{
  try{
  const sensorFound = await Sensor.findByIdAndDelete(req.params.id)
if(!sensorFound){
  return res.status(204).json({message : 'Sensor not found'});
}
  return res.json(sensorFound)
}catch (err){
  return res.status(404).json(err)
}
}


export const updateSensor: RequestHandler = async(req, res) =>{
  try{
const sensorUpdate =  await Sensor.findByIdAndUpdate(req.params.id, req.body, {new : true})
if(!sensorUpdate)   return res.status(204).json({message : 'sensor not update'});
return res.json(sensorUpdate);
}catch (err){
  return res.status(404).json(err)
}
}
