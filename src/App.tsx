import { useState, useEffect } from "react";

// interface Props {
//   event:any;
// }

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time(매번실행)");

  const onChange = (event:any) => setKeyword(event.target.value); 
  
  useEffect(() => {
    console.log("call the api....")
  },[]);

  useEffect(() => {
  if( keyword !== "" && keyword.length >= 5){
    console.log("Search for",keyword);
  }
  },[keyword]);

  return (
  <div className="App">
    <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
    <h1>{counter}</h1>
    <button onClick={onClick}>Click me!</button>
  </div>
  );
  
}

export default App;
