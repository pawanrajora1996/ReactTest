import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=''>
<Header/>
<LoginButton/>
    </div>
  )
}

function LoginButton(){
return(
  <button>Login</button>
)
}

function Header(){
  return(
    <h1>Header</h1>
  )
  }
  
export default App;
