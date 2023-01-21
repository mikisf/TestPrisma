import prisma from "@/backend/db"

export default async function handler(req, res) {

    if (req.method === "GET") {
        let users = await prisma.user.findMany()
        res.status(200).json({
            users: users
        })
    }
}
