import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [age, setAge] =useState()
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState('')
  const [message, setMsg] = useState('')
 
  const reload = () => {
    window.location.reload()
  }

  const handleCalculations = (e) => {
    //prevent submitting to the server
    e.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmiFormular = (weight / (height * height) * 10000);
      setBmi(bmiFormular.toFixed(2));
 
      // Logic for message
 
      if (bmi < 18.5) {
           setMsg('Underweight')
      } else 
            if (bmi >= 18.5 && bmi < 24.9) {
                 setMsg('Normal')
      }else 
           if(bmi >=25 && bmi <29.9){
                  setMsg('Over Weight')
       }else 
            if(bmi >=30 && bmi <34.9){
                 setMsg('Obesity (Class I)')
      }else 
            if(bmi >=35.5 && bmi <39.9){
                  setMsg('Obesity (Class II)')
            }
      else{
        setMsg('Extreme Obesity');
      }
      }
    }
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI <span className='span-name'>Calculator</span></h2>
      <form onSubmit={handleCalculations}>
        
      <div>
          <label>Age</label>
          <input type='number' placeholder='Enter Age..' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div>
          <label>Weight (kg)</label>
          <input type='number' placeholder='Enter Weight..' value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (cm)</label>
          <input type='number' placeholder='Enter Height..' value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Calculate</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Age {age}</h3>
        <h3>BMI {bmi}</h3>
        <h3 className='msgg'>{message}</h3>
      </div>
    </div>
  </div>
  );
  }
 
export default App;
