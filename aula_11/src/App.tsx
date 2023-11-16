import { FirstComponent } from "./components/FirstComponent"
import { Destructuring } from "./components/Destructuring"
import { State } from "./components/State"

function App() {
  const name: string = "matheus"
  const age: number = 30
  const isWorking: boolean = true

  // functions

  const userGreating = (name: string): string => {
    return `ola ${name}`
  }
  return (
     <div className='app'>
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <p>idade: {age}</p>
      {isWorking && (
        <div>
          <p>Esta trabalhando</p>
        </div>
      )}
      <h3>{userGreating(name)}</h3>
      <FirstComponent name="primeiro component"/>
      <Destructuring title="primeiro post" commentsQty={10} content="algum conteudo" tags={["js", "ts"]}/>
      <State/>
      <h1>eu parei no enum </h1>
     </div>
  );
}

export default App;
