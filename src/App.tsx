import Calculator from './components/Calculator'
import './App.css'
import './components/Components.css'

function App() {
  return (
    <div className="app">
      <Calculator
        initialValue={1}
      />
    </div>
  )
}

export default App
