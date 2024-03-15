import ShortUniqueId from "short-unique-id";
import {
    type User,
    type RegisterUser,
    type LoginUser
} from "../types/user.type";
import prisma from "../utils/prisma";

const uid = new ShortUniqueId({ length: 4 });

export const createUser = async (
    payload: RegisterUser
): Promise<User | null> => {
    const data = await prisma.$transaction(async (tx) => {
        const profile = await tx.profile.create({
            data: {
                id: `PE${uid.rnd()}`,
                gender: payload.gender,
                photo: payload.photo,
                domicile_id: payload.domicileId
            },
            select: {
                id: true
            }
        });
        const user = await tx.user.create({
            data: {
                id: `UR${uid.rnd()}`,
                name: payload.name,
                email: payload.email,
                password: payload.password,
                profile_id: profile.id
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                profile: {
                    select: {
                        id: true,
                        gender: true,
                        photo: true,
                        domicile: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            }
        });

        return user;
    });

    return data;
};

export const findUser = async (payload: LoginUser): Promise<User | null> => {
    const data = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            profile: {
                select: {
                    id: true,
                    gender: true,
                    photo: true,
                    domicile: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    });

    return data;
};
