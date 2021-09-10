import {Schema , model} from 'mongoose';

const sensorSchema = new Schema ({
    name: {
        type:String,
        require: true,
        trim: true
    },
    ubication: {
        type:[Number],
        require: true,
        trim: true
    },
    active: {
        type:Boolean,
        require: true,
        trim: true,
    },
    minVal: {
        type: Number,
        trim: true,
        require: true,
        min: -180,
        max: 180
    },
    maxVal: {
        type:Number,
        require: true,
        trim: true,
        min: -180,
        max: 180
    }

},{
        versionKey: false,
        timestamps:true
});

export default model('Sensor', sensorSchema)