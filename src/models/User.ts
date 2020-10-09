import mongoose, { Document } from "mongoose";
import { ProductDocument } from "./Product";

export type UserDocument = Document & {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    isBanned: boolean;
    password: string;
    googleId: string;
    cart: string[];
};

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        index: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
    },
    isBanned: {
        type: Boolean,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export default mongoose.model<UserDocument>("User", userSchema);
