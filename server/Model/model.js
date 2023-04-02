import mongoose from "mongoose";


const Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            require: true,
        },
        gitHubLink: {
            type: String
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
    }
);

export const model = new mongoose.model("DataInput", Schema);

