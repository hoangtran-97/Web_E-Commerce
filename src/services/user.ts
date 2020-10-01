import User, { UserDocument } from "../models/User";

const findAll = (): Promise<UserDocument[]> => {
    return User.find()
        .sort({ userName: 1 })
        .exec();
};

const findById = (userId: string): Promise<UserDocument> => {
    return User.findById(userId)
        .exec()
        .then(user => {
            if (!user) {
                throw new Error(`User ${userId} not found`);
            }
            return user;
        });
};

const create = (user: UserDocument): Promise<UserDocument> => {
    return user.save();
};

const update = (
    userId: string,
    update: Partial<UserDocument>
): Promise<UserDocument> => {
    return User.findById(userId)
        .exec()
        .then(user => {
            if (!user) {
                throw new Error(`User ${userId} not found`);
            }
            if (update.userName) {
                user.userName = update.userName;
            }
            if (update.firstName) {
                user.firstName = update.firstName;
            }
            if (update.lastName) {
                user.lastName = update.lastName;
            }
            if (update.email) {
                user.email = update.email;
            }
            if (update.isAdmin) {
                user.isAdmin = update.isAdmin;
            }
            if (update.isBanned) {
                user.isBanned = update.isBanned;
            }
            if (update.password) {
                user.password = update.password;
            }
            if (update.cart) {
                user.cart = update.cart;
            }
            return user.save();
        });
};

export default {
    findById,
    findAll,
    create,
    update,
};
