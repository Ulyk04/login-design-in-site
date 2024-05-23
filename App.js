import './App.css'
import email from './email.png'
import password from './password.png'
import person from './person.png'

function App(){
  return (
    <div className="App">
       
      <h1> Sign in </h1>

      <div className='n1'>
        <input type='text' placeholder='Name' className='person1' />
        <img className='person' src={person} />
      

      
        <input type='email' placeholder='Email' className='email1' />
        <img className='email' src={email} />
      

     
        <input type='password' placeholder='Password' className='password1' />
        <img className='password' src={password} />
      </div>

      <button className='sign' >Sign in</button>
      <button className='log' >Login</button>
    </div>
  );
}

export default App;
