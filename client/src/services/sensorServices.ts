import axios from "axios";
import { Sensor } from "../interfaces/interfaces";

const API = "http://localhost:3001";

export const getSensors = async () => {
  return await axios.get(`${API}/sensors`);
};

export const createNewSensor = async (sensor: Sensor) => {
    return await axios.post(`${API}/sensor`, sensor);
  };
  
  export const deleteSensorById = async (id: string) => {
    return await axios.delete(`${API}/sensors/${id}`);
  };
  
  export const updateSensor = async (id: string, sensor: Sensor) => {
    return await axios.put(`${API}/sensors/${id}`, sensor);
  };
  