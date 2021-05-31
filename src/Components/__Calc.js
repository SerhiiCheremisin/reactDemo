import React from 'react'
import {useState,useEffect} from 'react'


function Calc({darkTheme,lightTheme}) {
    const [temp, setTemp] = useState('');
    const [result, setResult] = useState('')
    const [lastCalc, setLastCalc] = useState('')

    const inputValue = (e) =>{
        let value = e.target.value;
        if (value === '')
            return
        setTemp(value);
        setResult(temp);

    }

    const divide = () => {
        if (temp === ''){

        } else if (result !== '' && lastCalc !== '='){
            setLastCalc('/');
            let oldRes = result;
            let newRes = `${oldRes} ${lastCalc} ${temp}  `;
            setResult(newRes);
            setTemp('');
        } else if(result !== ''&& lastCalc === '='){
            setLastCalc('/')
            setTemp('');
        }
        else {
            setLastCalc('/')
            let res = `${temp} ${lastCalc}`
            setResult(res);
            setTemp('');
        }
    }


    const equal = () => {
       if (lastCalc === "=" || lastCalc === '' || temp === ''){
           return
       }

       let res = eval(`${result} ${lastCalc} ${temp}`) ;
       setResult(res);
       setTemp(res)
       setLastCalc('=');
    }

    const clear = () => {
setTemp('');
setResult('');
setLastCalc('');
    }

    const numberHandler = (e) => {
        let value = e.target.value
       if (temp === ''){
           setTemp(value);
       } else  {
           let res = temp + value;
           setTemp(res);
       }
    }

    const calcHandler = (e) => {
let target = e.target.value;
    if (temp === ''){

    } else if (result !== '' && lastCalc !== '='){
        setLastCalc(target);
        let oldRes = result;
        let newRes = `${oldRes} ${lastCalc} ${temp}`;
        setResult(newRes);
        setTemp('');
    }else if(result !== ''&& lastCalc === '='){
        setLastCalc(target)
        setTemp('');

           }
    else {
        setLastCalc(target)
        let res = `${temp} ${lastCalc}`
        setResult(res);
        setTemp('');
    }

}



return(
   <div className = {lightTheme === true ? "light-theme" : "dark-theme"}>
       <div className="calcWrapper">
           <div className="calculator">
               <div className="calculator__result">
                   <input className='resImp' value={result} disabled="disabled" type="text"/>
               </div>
               <div className="calculator__buttons">
                   <div className="calculator__buttons--first-line">
                       <button onClick={numberHandler} value="7">7</button>
                       <button onClick={numberHandler} value="8">8</button>
                       <button onClick={numberHandler} value="9">9</button>
                       <button onClick={divide} value="\">\</button>
                   </div>
                   <div className="calculator__buttons--second-line">
                       <button onClick={numberHandler} value="4">4</button>
                       <button onClick={numberHandler} value="5">5</button>
                       <button onClick={numberHandler} value="6">6</button>
                       <button onClick={calcHandler} value="-">-</button>
                   </div>
                   <div className="calculator__buttons--third-line">
                       <button onClick={numberHandler} value="1">1</button>
                       <button onClick={numberHandler} value="2">2</button>
                       <button onClick={numberHandler} value="3">3</button>
                       <button onClick={calcHandler} value="+">+</button>
                   </div>
                   <div className="calculator__buttons--final-line">
                       <button onClick={numberHandler} value="0">0</button>
                       <button onClick={clear}>Clear</button>
                       <button onClick={equal}>=</button>
                       <button onClick={calcHandler} value="*">*</button>
                   </div>

               </div>
               <div className="calculator__buttons--input">
                   <input onChange={inputValue} value={temp} type="text"/>
               </div>
           </div>

       </div>

   </div>



)
}

export default Calc;
