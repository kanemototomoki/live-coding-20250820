import Calculator from './components/Calculator'
import DragAndDrop from './components/DragAndDrop'
import './App.css'
import './components/Components.css'

function App() {
  const handleMultiplyBy2 = (value: number) => {
    console.log('Value multiplied by 2:', value)
  }

  const handleMultiplyBy3 = (value: number) => {
    console.log('Value multiplied by 3:', value)
  }

  const handleItemDropped = (item: string, targetZone: string) => {
    console.log(`Item "${item}" dropped to "${targetZone}"`)
  }

  return (
    <div className="app">
      <h1>テストハンズオン - コンポーネントデモ</h1>
      
      <Calculator
        initialValue={1}
        onMultiplyBy2={handleMultiplyBy2}
        onMultiplyBy3={handleMultiplyBy3}
      />
      
      <DragAndDrop
        items={['アイテム1', 'アイテム2', 'アイテム3', 'アイテム4']}
        onItemDropped={handleItemDropped}
        dropZoneName="ドロップエリア"
      />
    </div>
  )
}

export default App
