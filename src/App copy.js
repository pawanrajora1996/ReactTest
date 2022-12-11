import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=''>
      <Header />
      <LoginButton />
    </div>
  )
}

function LoginButton() {
  return (
    <div class="contact-form">
      <form>
      <h1>CONTACT FORM</h1>
      <input type="text" class="input-field" placeholder="YOUR NAME"></input>
      <input type="phone" class="input-field" placeholder="TELEPHONE"></input>
      <input type="email" class="input-field" placeholder="E-MAIL"></input>
      <input type="textarea" class="input-field" placeholder="MESAGE"></input>
      <button>SUBMIT</button>
      </form>

    </div>
  )
}

function Header() {
  return (
    <h1>Header</h1>
  )
}

export default App;
