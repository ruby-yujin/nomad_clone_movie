import React from "react";
import CoinList from "./CoinList";

function App() {
  return (
    <>
      <CoinList />
    </>
  );

  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");

  // const onClick = () => setValue((prev) => prev + 1);
  // console.log("i run all the time(매번실행)");

  // const onChange = (event:any) => setKeyword(event.target.value);

  // useEffect(() => {
  //   console.log("call the api....")
  // },[]);

  // //keyword 가 업데이트될때! 함수 실행되라
  // useEffect(() => {
  // console.log("i run when 'keyword' change");
  // },[keyword]);

  // //counter 가 업데이트될때! 함수 실행되라!
  // useEffect(()=>{
  //   console.log("i run when 'Counter' change");
  // },[counter])

  // // keyword, counter 가 업데이트 될때 함수 실행되라!
  // useEffect(() => {
  //   console.log(" i run when 'keyword' && 'conter'");
  // },[keyword,counter])
}

export default App;
