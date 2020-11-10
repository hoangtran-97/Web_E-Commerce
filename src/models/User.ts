import mongoose, { Document } from "mongoose";

type ProductInfo = {
    quantity: number;
    product: mongoose.Types.ObjectId;
};

export type UserDocument = Document & {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    isBanned: boolean;
    password: string;
    googleId: string;
    cart: ProductInfo[];
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
    cart: [
        {
            quantity: Number,
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        },
    ],
});

export default mongoose.model<UserDocument>("User", userSchema);
