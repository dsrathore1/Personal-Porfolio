import mongoose from "mongoose";

const Schema = await mongoose.Schema({
    title: {
        type: String,
        trim: true,
        require: true,
    },
    gitHubLink: {
        type: String,
    },
    liveDemoLink: {
        type: String
    },
    img: {
        type: String
    },
    belong: {
        type: String
    }
});

const model = await mongoose.model("Project", Schema);

export default model;