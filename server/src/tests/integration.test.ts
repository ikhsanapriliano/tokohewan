import supertest from "supertest";
import app from "../middlewares";
import prisma from "../utils/prisma";

let userId: string = "";
let accessToken: string = "";
let productId: string = "";

afterAll(async () => {
    const product = await prisma.product.delete({
        where: {
            id: productId
        },
        select: {
            utility_id: true,
            habitat_id: true
        }
    });
    await prisma.utility.delete({
        where: {
            id: product.utility_id
        }
    });
    await prisma.habitat.delete({
        where: {
            id: product.habitat_id
        }
    });
    const user = await prisma.user.delete({
        where: {
            email: "test@gmail.com"
        },
        select: {
            profile_id: true
        }
    });
    await prisma.profile.delete({
        where: {
            id: user.profile_id
        }
    });
});

describe("user simulation test", () => {
    describe("user controller tests", () => {
        it("register user test", async () => {
            const response = await supertest(app)
                .post("/api/users/register")
                .send({
                    name: "test",
                    email: "test@gmail.com",
                    password: "123456",
                    confirmPassword: "123456",
                    gender: "female",
                    photo: "",
                    domicileId: "1"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Register berhasil");
            userId = response.body.data.id;
        });

        it("login user test", async () => {
            const response = await supertest(app)
                .post("/api/users/login")
                .send({
                    email: "test@gmail.com",
                    password: "123456"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Login berhasil");
            accessToken = response.body.accessToken;
        });
    });

    describe("product controller test", () => {
        it("add product test", async () => {
            const response = await supertest(app)
                .post("/api/products")
                .set({ Authorization: `Bearer ${accessToken}` })
                .send({
                    name: "kambing",
                    photo: "",
                    class: "Mammalia",
                    utility: ["peternakan", "material"],
                    habitat: ["darat"],
                    price: 500000,
                    discount: 10,
                    seller_id: userId,
                    quantity: 20
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("Tambah data berhasil");
            expect(response.body.data).toHaveProperty("id");
            productId = response.body.data.id;
        });

        it("get all products test", async () => {
            const response = await supertest(app)
                .get("/api/products")
                .set({ Authorization: `Bearer ${accessToken}` });
            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Ambil product berhasil");
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        it("get products by query params test", async () => {
            const response = await supertest(app)
                .get("/api/products")
                .query({
                    class: "Mammalia",
                    utility: "material",
                    habitat: "darat"
                })
                .set({ Authorization: `Bearer ${accessToken}` });
            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Ambil product berhasil");
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        it("get product by id test", async () => {
            const response = await supertest(app)
                .get(`/api/products/${productId}`)
                .set({ Authorization: `Bearer ${accessToken}` });
            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Ambil data berhasil");
            expect(response.body.data).toHaveProperty("id");
        });
    });
});
