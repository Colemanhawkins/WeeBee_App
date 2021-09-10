import {Schema , model} from 'mongoose';

const sensorEventSchema = new Schema (
    {
       sensorId:  {
            type: Schema.Types.ObjectId,
            ref: 'sensor'
        },
       value: {
            type: String,
            require: true,
            trim: true
       }
    },{
            versionKey: false,
            timestamps:true
    }
)

export default model('SensorEvent', sensorEventSchema)