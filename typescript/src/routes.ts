import { Request, Response } from 'express'
import createUser from './services/CreateUsers'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'kleiton',
        email: 'kleiton@gmail.com',
        password: '123456',
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native',
            { title: 'Javascript', experiencia: 100 },
        ]
    })

    return response.json({ message: 'Hello World' })
}