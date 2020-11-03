interface TeachObject {
    title: string,
    experiencia: number,
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TeachObject>
}

export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user
}