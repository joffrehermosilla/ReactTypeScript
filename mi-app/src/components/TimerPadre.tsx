import { useState } from 'react';
import { Timer } from './Timer';



export const Timerpadre = () => {

    const [milisegundos, seMilisegundos] = useState(1000);

    return (
        <>

            <span>Milisegundos{1000}</span>


            <button className='btn btn-outline-success'
                onClick={() => seMilisegundos(1000)}>

                1000
            </button>
            <button className='btn btn-outline-success'
                onClick={() => seMilisegundos(2000)}>

                2000
            </button>

            <Timer milisegundos={milisegundos}/>
        </>
    )


}