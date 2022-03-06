import { argv } from "process"
import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos: number;
    segundos?: number;
}


export const Timer = ({ milisegundos }: TimerArgs) => {
    //export const Timer = (arg: TimerArgs) => {
    // console.log(arg.milisegundos);
    // console.log(milisegundos);
    const [segundos, setSegundos] = useState(0)

    const ref = useRef<NodeJS.Timeout>();



    useEffect(() => {
        console.log('useEffect');

        ref.current = setInterval(() => setSegundos(s => s + 1), 1000);



    }, [milisegundos])

    return (


        <>

            <h4>Timer: <small>{segundos}</small></h4>

        </>


    )

}