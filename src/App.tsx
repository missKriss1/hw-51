import './App.css'
import Number from "./components/Number/Number.tsx";
import {useState} from "react";



const App = () => {

    const [number , setNumber]  = useState <number[]>(
        [ 5, 11, 16, 23, 32],
    )

    const changeNewNumber = () =>{
        const newNumbers: number[] = [];

        while (newNumbers.length <= 4){
            const NewNumberRandon: number = Math.round(Math.random() * (36 -4 + 1)) + 4;
            if(!newNumbers.includes(NewNumberRandon)){
                newNumbers.push(NewNumberRandon);
            }
        }


        setNumber(newNumbers);

        newNumbers.sort((a:number, b:number) =>
            a - b
        );
        console.log(newNumbers);

    }

  return (
    <>
        <button className="newNumber" onClick={changeNewNumber} type="button">New number</button>
        <Number number = {number[0]}/>
        <Number number = {number[1]}/>
        <Number number = {number[2]}/>
        <Number number = {number[3]}/>
        <Number number = {number[4]}/>
    </>
  )
};

export default App
