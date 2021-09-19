
export interface Sensor {
    _id?: string;
    name: string;
    ubication: number[]
    maxVal: number;
    minVal: number;
    active: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }

  export interface InitialStateType  {
    sensors: Sensor[] | any,
    loading: Boolean,
    error: Boolean | String
  }
