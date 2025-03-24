// Client is something that let you connect to db and help you to add data to your db.

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const createUser = async () => {
    await client.user.create({
        data: {
            username: "Demo",
            password: "Demo@1234",
            age: "21",
            city: "Ahm",
        },
    });
};

const findUser = async () => {
    const user = await client.user.findFirst({
        where: {
            id: 1,
        },
    });
    console.log(user);
};

const updateUser = async () => {
    const updateResponse = await client.user.update({
        // Return the updated details
        data: {
            city: "Ahmedabad",
        },
        where: {
            id: 1,
        },
    });
    console.log(updateResponse);
};

findUser();
updateUser();
// createUser();
let a = "{ }"

let data = JSON.parse(a)
  
