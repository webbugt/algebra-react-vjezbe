import { useState } from "react";

export function ControlledNameInput() {
  const [name, setName] = useState("Pero");

  const onInputChangeHandler = (event) => {
    const value = event.target.value
    const valueWithoutNumbers = value.replace(/\d/gi,"")
    setName(valueWithoutNumbers)    
  };

  return (
    <form>
      <h3>On Input Change</h3>
      <label htmlFor="name">Ime</label>
      <input
        name="name"
        type="text" 
        value={name}
        onChange={onInputChangeHandler}
      />
      <button type="submit">Pošalji</button>
      <pre>Trenutna vrijednost: {name}</pre>
    </form>
  );
}

export function NameForm() {
  const [name, setName] = useState("Pero");

  const onSubmitHandler = (event)=>{
      event.preventDefault()

      const formElement = event.target
      const nameValue = formElement.name.value

      setName(nameValue)
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <h3>On Submit</h3>
      <label htmlFor="name">Ime</label>
      <input
        name="name"
        type="text" 
      />
      <button type="submit">Pošalji</button>
      <pre>Trenutna vrijednost: {name}</pre>
    </form>
  );
}