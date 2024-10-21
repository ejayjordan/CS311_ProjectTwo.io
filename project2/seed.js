const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const seed = async () => {
    const createMany = await prisma.cards.createMany({
        data: [
            {prompt: 'Cat Video', answer: '/videos/test.mp4', correct: 10, time: 100},
            {prompt: 'Dog Video', answer: '/videos/test.mp4', correct: 10, time: 100},
            {prompt: 'Analysis Video', answer: '/videos/test.mp4', correct: 10, time: 100},
        ]
    })
}