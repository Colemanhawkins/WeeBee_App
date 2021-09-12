import { ChangeEvent } from 'react';

export interface Sensor {
    _id?: string;
    name: string;
    lng: string;
    lat: string;
    active: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }

  export interface InitialStateType  {
    sensors: Sensor[],
    loading: Boolean,
    error: Boolean
  }


  // enum ActionSensor {
  //   CREATE = 'CREATE',
  //   DELETE = 'DELETE',
  //   UPDATE  = 'UPDATE',
  //   GET= 'GET'
  // }


 export type Action =
   { type: 'REQUEST_GET'}
 | { type: 'SUCCESS_GET', data: Sensor }
 | {type: 'ERROR_GET' , error: string }


export type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type SelectChange = ChangeEvent<HTMLSelectElement >