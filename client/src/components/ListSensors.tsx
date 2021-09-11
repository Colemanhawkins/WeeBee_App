import React, { FC } from 'react'
import '../styles/ListSensors.css'

const ListSensors: FC= () => {
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
                    <th>Options</th>
                    <th>Events</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span className="status"></span></td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td> <button className="button button-delete"><i className="material-icons">delete</i></button> <button className="button button-update"><i className="material-icons">edit</i></button></td>
                    <td><button  className="button button-event"><i className="material-icons">sensors</i></button></td>
                </tr>
                <tr>
                    <td>Active</td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td> <button className="button button-delete"><i className="material-icons">delete</i></button> <button className="button button-update"><i className="material-icons">edit</i></button></td>
                    <td><button  className="button button-event"><i className="material-icons">sensors</i></button></td>
                </tr>
                <tr>
                    <td>Active</td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td> <button className="button button-delete"><i className="material-icons">delete</i></button> <button className="button button-update"><i className="material-icons">edit</i></button></td>
                    <td><button className="button button-event"><i className="material-icons">sensors</i></button></td>
                </tr>   
            </tbody>
        </table> 
    </div>
    )
}

export default ListSensors