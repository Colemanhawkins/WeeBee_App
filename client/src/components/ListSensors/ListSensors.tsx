import { FC ,useEffect , useReducer} from 'react'
import '../../styles/ListSensors.css'
import FormSensors from '../FormSensors/FormSensors'
import * as sensorServices from '../../services/sensorServices'
import Reducer from '../../Reducers/reducerSensor'
import { Sensor } from '../../interfaces/interfaces'

const ListSensors: FC<HTMLDataListElement>= () => {

const initState = {
    sensors: [],
    loading: true,
    error: false
}

const [state, dispatch] = useReducer(Reducer, initState )

const { sensors, loading, error } = state;

useEffect(() => {
    dispatch({ type: 'REQUEST_GET' });
    const loadSensors = async () => {
        const res = await sensorServices.getSensors();
        if (res.status === 200) {
            dispatch({ type: 'SUCCESS_GET', payload: res.data });
            return;
        }
        dispatch({ type: 'ERROR_GET', error: res.data});
    };
    loadSensors();
}, []);

const handleCreate = (objectSensor : Sensor) => {
    console.log("helou" , objectSensor)
}

    return (
        <div>
             {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
            <div className='datatable-container'>
                <table className="datatable">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Name</th>
                            <th>Ubication (lat / lng)</th>
                            <th>MinVal</th>
                            <th>MaxVal</th>
                            <th>Events</th>
                            <th>Options</th>         
                        </tr>
                    </thead>
                    <tbody>
                        <FormSensors  event={handleCreate}/>     
                        {
                            sensors && sensors.length > 0 ? sensors.map((sensor: Sensor) => (
                            <tr key={sensor._id}>
                            <td><span className="active"></span></td>
                            <td>{sensor.name}</td>
                            <td>{sensor.ubication[0]}° lat , {sensor.ubication[1]}° lng</td>
                            <td>{sensor.minVal}°</td>
                            <td>{sensor.maxVal}°</td>
                            <td><button  className="button button-event"><i className="material-icons">sensors</i></button></td>
                            <td> <button className="button button-delete"><i className="material-icons">delete</i></button> <button className="button button-update"><i className="material-icons">edit</i></button></td>   
                        </tr>
                            )
                          )  : null
                        }
                    </tbody>
                </table>
            </div>
            )}
    </div>
    )
}

export default ListSensors