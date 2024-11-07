import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timeseries: true,
        versionKey: false,
    }
);

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;