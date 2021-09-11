import { FC, FormEvent } from 'react'
import '../../styles/FormSensor.css'

const FormSensors = () => {

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
     console.log("jiji")
    }
    return (
            <tr>
                    <td>
                        <form onSubmit={handleSubmit} id="my_form">
                            <select className='select-status'>
                                <option value="">none</option>
                                <option value="">active</option>
                                <option value="">inactive</option>
                            </select>
                        </form>
                    </td>
                    <td><input className="input-name" type="text" placeholder="name"  form="my_form"/></td>
                    <td><div className="div-ubication"><input className="input-lat" type="text" placeholder="-90 to 90" form="my_form" />° lat</div>
                    <input className="input-lng" type="text" placeholder="-180 to 180" form="my_form" />° lng</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                        <button className="button button-create" type="submit" form="my_form">
                            <i className="material-icons">
                                add_circle_outline
                            </i>
                        </button>
                        <button className="button button-clear">
                            <i className="material-icons">
                                add_circle_outline
                            </i>
                        </button>
                    </td>            
            </tr>
    )
}

export default FormSensors;
