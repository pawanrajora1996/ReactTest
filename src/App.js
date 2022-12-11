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
    <div class="main-card">
      {/* <h1>CONTACT FORM</h1> */}
      <div class="first">1</div>
      <div class="second">2</div>
      <div class="third">3</div>
      

    </div>
  )
}

function Header() {
  return (
    <div class="header-section">
    <h1>Header</h1>
    </div>
  )
}

export default App;
