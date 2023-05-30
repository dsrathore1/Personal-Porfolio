import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    mail: {
        type: String
    },
    phoneNum: {
        type: Number
    },
    message: {
        type: String
    }
});

const contactModel = new mongoose.model("contact", contactSchema);

export default contactModel;