import User, { UserDocument } from "../models/User";

const create = (user: UserDocument): Promise<UserDocument> => {
    return user.save();
};
