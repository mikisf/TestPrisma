const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: 'Alice',
        },
    })
    await prisma.user.create({
        data: {
            name: 'James',
        },
    })
    await prisma.user.create({
        data: {
            name: 'Walter',
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })