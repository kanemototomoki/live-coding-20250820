import Calculator from './components/Calculator'
import DragAndDrop from './components/DragAndDrop'
import './App.css'
import './components/Components.css'

function App() {
  return (
    <div className="app">
      <Calculator
        initialValue={1}
      />

      <DragAndDrop
        items={['アイテム1', 'アイテム2', 'アイテム3', 'アイテム4']}
        dropZoneName="ドロップエリア"
      />
    </div>
  )
}

export default App
