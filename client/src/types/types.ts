import { ChangeEvent } from 'react';
import { Sensor } from '../interfaces/interfaces';

export type Action =
    { type: 'REQUEST_GET'}
|   { type: 'SUCCESS_GET', payload: Sensor }
|   { type: 'ERROR_GET' , error: string }

export type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type SelectChange = ChangeEvent<HTMLSelectElement >