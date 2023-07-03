import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        unique: true, // que sea unico el nombre
        required: true,
    },
    email: {
        type: String,
        unique: true, // que sea unico el mail
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

}, {timestamps: true}
);

export default mongoose.model("User", userSchema);