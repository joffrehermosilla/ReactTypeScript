import { ContadorReduce } from './components/ContadorReduce';
import { Counter } from './components/Counter';
import { Timerpadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';



function App() {
  return (
    <>
      <h1>React + TypeScript JOFFRE HERMOSILLA SALAS</h1>
      <hr />

      <Counter />
      <Usuario />





      <h2>useEffect - UseRef</h2>
      <hr />

      <Timerpadre />

      <h2>useReducer</h2>
      <hr />
      <ContadorReduce/>

    </>
  );
}

export default App;
