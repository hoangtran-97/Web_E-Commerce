import request from "supertest";

import { ProductDocument } from "../../src/models/Product";
import app from "../../src/app";
import * as dbHelper from "../db-helper";

const nonExistingProductId = "5e57b77b5744fa0b461c7906";

const createProduct = async (override?: Partial<ProductDocument>) => {
    let product = {
        name: "testProduct",
        description: "123123",
        categories: ["a"],
        variants: ["a"],
        sizes: [2],
    };

    if (override) {
        product = { ...product, ...override };
    }

    return await request(app)
        .post("/api/v1/products")
        .send(product);
};

describe("product controller", () => {
    beforeEach(async () => {
        await dbHelper.connect();
    });

    afterEach(async () => {
        await dbHelper.clearDatabase();
    });

    afterAll(async () => {
        await dbHelper.closeDatabase();
    });

    it("should create a product", async () => {
        const res = await createProduct();
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
        expect(res.body.name).toBe("testProduct");
    });

    it("should not create a product with wrong data", async () => {
        const res = await request(app)
            .post("/api/v1/products")
            .send({
                name: "testProduct",
                // description: "123123",
                // categories: ["a"],
                variants: ["a"],
                sizes: [2],
            });
        expect(res.status).toBe(400);
    });

    it("should get back an existing product", async () => {
        let res = await createProduct();
        expect(res.status).toBe(200);

        const productId = res.body._id;
        res = await request(app).get(`/api/v1/products/${productId}`);

        expect(res.body._id).toEqual(productId);
    });

    it("should not get back a non-existing product", async () => {
        const res = await request(app).get(
            `/api/v1/products/${nonExistingProductId}`
        );
        expect(res.status).toBe(404);
    });

    it("should get back all prodducts", async () => {
        const res1 = await createProduct({
            name: "testProduct1",
            description: "123123",
            categories: ["a"],
            variants: ["a"],
            sizes: [2],
        });
        const res2 = await createProduct({
            name: "testProduct2",
            description: "123123",
            categories: ["a"],
            variants: ["a"],
            sizes: [2],
        });

        const res3 = await request(app).get("/api/v1/products");

        expect(res3.body.length).toEqual(2);
        expect(res3.body[0]._id).toEqual(res1.body._id);
        expect(res3.body[1]._id).toEqual(res2.body._id);
    });

    it("should get back all prodducts by Name", async () => {
        const res1 = await createProduct({
            name: "testProduct1",
            description: "123123",
            categories: ["a"],
            variants: ["a"],
            sizes: [2],
        });
        const res2 = await createProduct({
            name: "testProduct2",
            description: "123123",
            categories: ["a"],
            variants: ["a"],
            sizes: [2],
        });

        const res3 = await request(app).get(
            `/api/v1/products/findByName/${res2.body.name}`
        );

        expect(res3.body.length).toEqual(1);
    });

    it("should get back all prodducts by Categories", async () => {
        const res1 = await createProduct({
            name: "testProduct1",
            description: "123123",
            categories: ["a"],
            variants: ["a"],
            sizes: [2],
        });
        const res2 = await createProduct({
            name: "testProduct2",
            description: "123123",
            categories: ["a"],
            variants: ["a"],
            sizes: [2],
        });

        const res3 = await request(app).get(
            `/api/v1/products/findByCategories/${res2.body.categories[0]}`
        );

        expect(res3.body.length).toEqual(2);
    });

    it("should get back all prodducts by Variants", async () => {
        const res1 = await createProduct({
            name: "testProduct1",
            description: "123123",
            categories: ["a"],
            variants: ["1"],
            sizes: [2],
        });
        const res2 = await createProduct({
            name: "testProduct2",
            description: "123123",
            categories: ["a"],
            variants: ["2"],
            sizes: [2],
        });

        const res3 = await request(app).get(
            `/api/v1/products/findByVariants/${res2.body.variants[0]}`
        );

        expect(res3.body.length).toEqual(1);
    });

    it("should update an existing product", async () => {
        let res = await createProduct();
        expect(res.status).toBe(200);

        const productId = res.body._id;
        const update = {
            name: "Test",
        };

        res = await request(app)
            .put(`/api/v1/products/${productId}`)
            .send(update);

        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual("Test");
    });

    it("should delete an existing product", async () => {
        let res = await createProduct();
        expect(res.status).toBe(200);
        const productId = res.body._id;

        res = await request(app).delete(`/api/v1/products/${productId}`);

        expect(res.status).toEqual(204);

        res = await request(app).get(`/api/v1/products/${productId}`);
        expect(res.status).toBe(404);
    });
});
