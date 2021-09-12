import { FormEvent , useState } from 'react'
import { InputChange, SelectChange, Sensor } from '../../interfacesAndTypes/interfacesAndTypes';
import '../../styles/FormSensor.css';

const FormSensors = () => {

    const initialState = {
      active: false,
      name: "",
      lat: "",
      lng: "",
    };

    const [sensor, setSensor] = useState<Sensor>(initialState);

    const handleInputChange = (e: InputChange) => {
    setSensor({ ...sensor, [e.target.name]: e.target.value });
    }

    const handleSelectChange = (e: SelectChange) =>{
        console.log('cambie')
        setSensor({ ...sensor, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
            <tr>
                    <td>
                        <form onSubmit={handleSubmit} id="my_form">
                            <select onChange={handleSelectChange}   name='active' className='select-status'>
                                <option>none</option>
                                <option  value="true">active</option>
                                <option value="false">inactive</option>
                            </select>
                        </form>
                    </td>
                    <td><input className="input-name" type="text" placeholder="name"  form="my_form" name="name" onChange={handleInputChange}
                    autoFocus/></td>
                    <td><div className="div-ubication"><input  name="lat" className="input-lat" type="text" placeholder="-90 to 90" form="my_form"  onChange={handleInputChange}
                    autoFocus />° lat</div>
                    <input className="input-lng" type="text" name="lng" placeholder="-180 to 180" form="my_form"  onChange={handleInputChange}
                    autoFocus/>° lng</td>
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
                                clear
                            </i>
                        </button>
                    </td>            
            </tr>
    )
}

export default FormSensors;
