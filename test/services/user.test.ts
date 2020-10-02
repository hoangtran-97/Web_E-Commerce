import User from "../../src/models/User";
import UserService from "../../src/services/user";
import * as dbHelper from "../db-helper";

const nonExistingUserId = "5e57b77b5744fa0b461c7906";

const createUser = async () => {
    const user = new User({
        userName: "User 0",
        firstName: "Zero",
        lastName: "Number",
        email: "User0",
        isAdmin: true,
        isBanned: false,
        password: "asdasdasd",
        cart: ["5e57b77b5744fa0b461c7905"],
    });
    return await UserService.create(user);
};

describe("user service", () => {
    beforeEach(async () => {
        await dbHelper.connect();
    });

    afterEach(async () => {
        await dbHelper.clearDatabase();
    });

    afterAll(async () => {
        await dbHelper.closeDatabase();
    });

    it("should create an user", async () => {
        const user = await createUser();
        expect(user).toHaveProperty("_id");
        expect(user).toHaveProperty("userName", "User 0");
        expect(user).toHaveProperty("email", "User0");
    });

    it("should get an user with id", async () => {
        const user = await createUser();
        const found = await UserService.findById(user._id);
        expect(found.userName).toEqual(user.userName);
        expect(found._id).toEqual(user._id);
    });

    // Check https://jestjs.io/docs/en/asynchronous for more info about
    // how to test async code, especially with error
    it("should not get a non-existing user", async () => {
        expect.assertions(1);
        return UserService.findById(nonExistingUserId).catch(e => {
            expect(e.message).toMatch(`User ${nonExistingUserId} not found`);
        });
    });

    it("should update an existing user", async () => {
        const user = await createUser();
        const update = {
            userName: "Shrek",
            email: "2001",
        };
        const updated = await UserService.update(user._id, update);
        expect(updated).toHaveProperty("_id", user._id);
        expect(updated).toHaveProperty("userName", "Shrek");
        expect(updated).toHaveProperty("email", "2001");
    });

    it("should not update a non-existing user", async () => {
        expect.assertions(1);
        const update = {
            userName: "Shrek",
            email: "2001",
        };
        return UserService.update(nonExistingUserId, update).catch(e => {
            expect(e.message).toMatch(`User ${nonExistingUserId} not found`);
        });
    });
});
