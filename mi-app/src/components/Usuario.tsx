import { useState } from 'react'

interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: 'XYZ987',
    name: 'visitante'
}

export const Usuario = () => {

    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'JOFFRE HERMOSILLA SALAS'
        });
    }

    return (

        <div className="mt-5">

            <h3>Usuario: useState</h3>
            <button
                onClick={login}
                className="btn btn-outline-primary">
                login

            </button>
            {
                (!user)
                    ? <pre>No se inicia Sesion</pre>
                    : <pre>{JSON.stringify(user)}</pre>
            }

        </div>
    )
}