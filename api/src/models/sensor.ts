const {model , Schema} = require('mongoose')

const sensorSchema = new Schema ({
    title: {
        type:String,
        require: true,
        trim: true
    },
    description: {
        type:String,
        trim: true
    },
    url: {
        type:String,
        require: true,
        trim: true,
        unique: true
    }
},{
        versionKey: false,
        timestamps:true
});

export default model('Sensor', sensorSchema)