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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span className="active"></span></td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td><button>deleted</button></td>
                </tr>
                <tr>
                    <td>Active</td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td><button>deleted</button></td>
                </tr>
                <tr>
                    <td>Active</td>
                    <td>New York</td>
                    <td>-90°,147°</td>
                    <td>-90°</td>
                    <td>147°</td>
                    <td><button>deleted</button></td>
                </tr>   
            </tbody>
        </table> 
    </div>
    )
}

export default ListSensors