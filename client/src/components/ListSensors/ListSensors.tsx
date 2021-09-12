import { FC ,useEffect } from 'react'
import '../../styles/ListSensors.css'
import FormSensors from '../FormSensors/FormSensors'
import * as sensorServices from '../../services/sensorServices'

const ListSensors: FC<HTMLDataListElement>= () => {


    const loadSensors = async () => {
        const res = await sensorServices.getVideos();
        console.log(res.data)
    }

    useEffect(() => {
        loadSensors();
      }, []);

    return (
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
                <FormSensors />       
                <tr>
                    <td><span className="active"></span></td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td><button  className="button button-event"><i className="material-icons">sensors</i></button></td>
                    <td> <button className="button button-delete"><i className="material-icons">delete</i></button> <button className="button button-update"><i className="material-icons">edit</i></button></td>   
                </tr>
                <tr>
                    <td><span className="inactive"></span></td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td><button  className="button button-event"><i className="material-icons">sensors</i></button></td>
                    <td> <button className="button button-delete"><i className="material-icons">delete</i></button> <button className="button button-update"><i className="material-icons">edit</i></button></td>
                </tr>
                <tr>
                    <td><span className="active"></span></td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td><button className="button button-event"><i className="material-icons">sensors</i></button></td>
                    <td> <button className="button button-delete"><i className="material-icons">delete</i></button> <button className="button button-update"><i className="material-icons">edit</i></button></td>
                </tr>   
            </tbody>
        </table>
    </div>
    )
}

export default ListSensors