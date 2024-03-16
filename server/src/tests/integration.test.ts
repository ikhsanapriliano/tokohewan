import supertest from "supertest";
import app from "../middlewares";
import prisma from "../utils/prisma";

afterAll(async () => {
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

let accessToken: string = "";

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
        it("get all products test", async () => {
            const response = await supertest(app)
                .get("/api/products")
                .set({ Authorization: `Bearer ${accessToken}` });
            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Ambil product berhasil");
        });

        it("get products by query params test", async () => {
            const response = await supertest(app)
                .get("/api/products")
                .query({
                    class: "Mammalia",
                    utility: "militer",
                    habitat: "darat"
                })
                .set({ Authorization: `Bearer ${accessToken}` });
            expect(response.status).toBe(200);
            expect(response.body.message).toEqual("Ambil product berhasil");
        });
    });
});
