import supertest from "supertest";
import app from "../middlewares";
import prisma from "../utils/prisma";

describe("user controller tests", () => {
    afterEach(async () => {
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

    it("registerUser test", async () => {
        const response = await supertest(app).post("/user/register").send({
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
});
