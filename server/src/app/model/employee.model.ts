import { Schema, model } from 'mongoose';

const employee_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        default: 0
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model("Employee", employee_schema);