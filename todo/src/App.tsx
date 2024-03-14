import "./App.css";

function App() {
  // basic type in typescript
  // let name : string;
  // let age : number;
  // let isTrue:boolean;
  // let role : [number,string]
  // let students:string[]

  // object type
  type Person = {
    name:string,
    age?:number  // age property is optationl due to question mark
  }


  let person : Person{
    name:"Suraj",
    age:21
  }


  return (
    <>
      <h1>Hello suraj hingadde</h1>
    </>
  );
}

export default App;
