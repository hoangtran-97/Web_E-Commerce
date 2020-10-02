import request from "supertest";

import { UserDocument } from "../../src/models/User";
import app from "../../src/app";
import * as dbHelper from "../db-helper";

const nonExistingUserId = "5e57b77b5744fa0b461c7906";

const createUser = async (override?: Partial<UserDocument>) => {
    let user = {
        userName: "User 0",
        firstName: "Zero",
        lastName: "Number",
        email: "User0",
        isAdmin: true,
        isBanned: false,
        password: "asdasdasd",
        cart: ["5e57b77b5744fa0b461c7905"],
    };

    if (override) {
        user = { ...user, ...override };
    }

    return await request(app)
        .post("/api/v1/users")
        .send(user);
};

describe("user controller", () => {
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
        const res = await createUser();
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
        expect(res.body.userName).toBe("User 0");
    });

    it("should not create an User with wrong data", async () => {
        const res = await request(app)
            .post("/api/v1/users")
            .send({
                // userName: "User 0",
                // firstName: "Zero",
                // lastName: "Number",
                email: "User0",
                isAdmin: true,
                isBanned: false,
                password: "asdasdasd",
                cart: [],
            });
        expect(res.status).toBe(400);
    });

    it("should get back an existing user", async () => {
        let res = await createUser();
        expect(res.status).toBe(200);

        const userId = res.body._id;
        res = await request(app).get(`/api/v1/users/${userId}`);

        expect(res.body._id).toEqual(userId);
    });

    it("should not get back a non-existing user", async () => {
        const res = await request(app).get(
            `/api/v1/users/${nonExistingUserId}`
        );
        expect(res.status).toBe(404);
    });

    it("should get back all user", async () => {
        const res1 = await createUser({
            userName: "User 1",
            firstName: "Zero",
            lastName: "Number",
            email: "User0",
            isAdmin: true,
            isBanned: false,
            password: "asdasdasd",
            cart: [],
        });
        const res2 = await createUser({
            userName: "User 2",
            firstName: "Zero",
            lastName: "Number",
            email: "User0",
            isAdmin: true,
            isBanned: false,
            password: "asdasdasd",
            cart: [],
        });

        const res3 = await request(app).get("/api/v1/users");

        expect(res3.body.length).toEqual(2);
        expect(res3.body[0]._id).toEqual(res1.body._id);
        expect(res3.body[1]._id).toEqual(res2.body._id);
    });

    it("should update an existing user", async () => {
        let res = await createUser();
        expect(res.status).toBe(200);

        const userId = res.body._id;
        const update = {
            userName: "User 3",
            firstName: "Zero 3",
        };

        res = await request(app)
            .put(`/api/v1/users/${userId}`)
            .send(update);

        expect(res.status).toEqual(200);
        expect(res.body.userName).toEqual("User 3");
        expect(res.body.firstName).toEqual("Zero 3");
    });
});
