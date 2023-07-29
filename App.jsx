import React,{ useState } from 'react';
import "./One.css";
const App = () => {
  const [Input,setInput] = useState ('');
  const calculateResult = (input) => {
    let result; 
    try{
      const operators= ['+','-','*','%'];
    
      let operator = null;
      for (let i=0; i<input.length;i++){
        if(operators.includes(input[i])){
         operator = input[i];
         break;
        }
      }
       if(!operator){
        setInput(parseFloat(Input).tostring());
        return;
       } 
      
      const [operand1,operand2] = input.split
      (operator).map(parseFloat);
      let result;

      switch (operator) {
        case '+':
          result = operand1+ operand2;
          break;
          case '-':
          result = operand1- operand2;
          break;
          case '*':
          result = operand1* operand2;
          break;
          case '/':
          result = operand1/ operand2;
          break;
          default:
          
           throw new Error('Invalid opperator')
          
      
        }
        setInput(result.tostring());

        }
    catch(error){
    setInput ('Error')

    }
  }
  const  handlerButtonClick = (value)=> {
   if (value === 'C'){
    setInput('');
   } else if(value === '<'){
    setInput(Input.slice(0,-1));
   }
    else if(value === '='){
      calculateResult(Input);
}

   else{
    setInput((prevalue) => prevalue + value)
   }
   
  }
  return (
    <div class="container">
    <div className='calc'>
      <h1 id='input'>{Input}</h1>
      <div>
      <button onClick={()=>handlerButtonClick('C')}>c</button>
      <button onClick={()=>handlerButtonClick('<')}>&lt;</button>
      <button onClick={()=>handlerButtonClick('%')}>%</button>
      <button onClick={()=>handlerButtonClick('/')}>/</button>
    </div>
    <div>
      <button onClick={()=>handlerButtonClick('1')}>1</button>
      <button onClick={()=>handlerButtonClick('2')}>2</button>
      <button onClick={()=>handlerButtonClick('3')}>3</button>
      <button onClick={()=>handlerButtonClick('+')}>+</button>
    </div>
    <div>
     <button onClick={()=>handlerButtonClick('4')}>4</button>
      <button onClick={()=>handlerButtonClick('5')}>5</button>
      <button onClick={()=>handlerButtonClick('6')}>6</button>
      <button onClick={()=>handlerButtonClick('-')}>-</button>
    </div>
    <div>
    <button onClick={()=>handlerButtonClick('7')}>7</button>
      <button onClick={()=>handlerButtonClick('8')}>8</button>
      <button onClick={()=>handlerButtonClick('9')}>9</button>
      <button onClick={()=>handlerButtonClick('*')}>*</button>
    </div>
    <div>
     <button onClick={()=>handlerButtonClick('0')}>0</button>
      <button onClick={()=>handlerButtonClick('00')}>00</button>
      <button onClick={()=>handlerButtonClick('.')}>.</button>
      <button onClick={()=>handlerButtonClick('=')}>=</button>
    </div>
    </div>
    </div> 


  )
}

export default App