import Keypad from './components/keypad.js'
import './css/App.css';

function App() {
  document.title = "drumpadJS"
  

  const handleClick = (e) => {
    e.target.childNodes[1].volume = 0.05;
    e.target.childNodes[1].play();

    document.getElementById('display').innerText = e.target.id;
  }

  document.addEventListener('keydown', event => {
    try {
      if(event.key.toLocaleUpperCase() === 'Q' || 'W' || 'E' || 'A' || 'S' || 'D' || 'Z' || 'X' || 'C') {
        let keyInput = event.key.toLocaleUpperCase()
        document.getElementById('display').innerText = document.getElementById(keyInput).parentNode.id;
        
        document.getElementById(keyInput).parentNode.classList.add('pressDown')
        setTimeout(() => {
          document.getElementById(keyInput).parentNode.classList.remove('pressDown')
        }, 350)
        document.getElementById(keyInput).volume = 0.05;
        document.getElementById(keyInput).play();
      }
    } catch(err) {
      console.log(err.message)
    }

  })

  return (
    <div className="App">
      <div id="drum-machine">
        <Keypad handleClick={handleClick}/>
        <div id="display">
          source name
        </div>

      </div>
    </div>
  );
}

export default App;
