import { fastify } from "fastify"
import { DatabasePostgres } from "./database-postgres.js"
import fastifyCors from '@fastify/cors'


const server = fastify()
const database = new DatabasePostgres()

server.register(fastifyCors, {
    origin: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  });
  



server.post('/videos', async (request , reply) =>{
    const {title, description, duration} = request.body    
    await database.create({
        title: title,
        description: description,
        duration: duration,
    })

    return reply.status(201).send()
})

server.post('/users', async (request , reply) =>{
    const { id, nome, peso, altura, imc, data} = request.body    
    await database.create({
        id: id,
        nome: nome,
        peso: peso,
        altura: altura,
        imc: imc,
        data: data,
    })

    console.log("tentou fazer post")

    return reply.status(201).send()
})

server.get('/videos', async (request) =>{
    const search = request.query.search
    const videos = await database.list(search)
    return videos
})


server.get('/users', async (request) =>{
    const search = request.query.search
    const users = await database.list(search)
    return users
})


server.put('/videos/:id', async (request, reply) =>{
    const videoId = request.params.id
    const {title, description, duration} = request.body   

    await database.update(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send()

})

server.delete('/videos/:id', async (request, reply) =>{
    const videoId = request.params.id
    await database.delete(videoId)
    
    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,

})



