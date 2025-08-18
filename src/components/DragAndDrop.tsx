import { useState } from 'react'
import './Components.css'

export interface DragAndDropProps {
  /** ドラッグ可能なアイテムのリスト */
  items?: string[]
  /** アイテムがドロップされた時のコールバック */
  onItemDropped?: (item: string, targetZone: string) => void
  /** ドロップゾーンの名前 */
  dropZoneName?: string
}

const DragAndDrop = ({ 
  items = ['Item 1', 'Item 2', 'Item 3'], 
  onItemDropped,
  dropZoneName = 'Drop Zone'
}: DragAndDropProps) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [droppedItems, setDroppedItems] = useState<string[]>([])
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: string) => {
    setDraggedItem(item)
    e.dataTransfer.setData('text/plain', item)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const item = e.dataTransfer.getData('text/plain')
    if (item && !droppedItems.includes(item)) {
      setDroppedItems(prev => [...prev, item])
      onItemDropped?.(item, dropZoneName)
    }
  }

  const handleReset = () => {
    setDroppedItems([])
  }

  return (
    <div className="drag-and-drop">
      <h2>Drag & Drop</h2>
      <div className="drag-and-drop-content">
        <div className="draggable-items">
          <h3>Draggable Items</h3>
          {items.map((item, index) => (
            <div
              key={index}
              className={`draggable-item ${draggedItem === item ? 'dragging' : ''} ${droppedItems.includes(item) ? 'dropped' : ''}`}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              onDragEnd={handleDragEnd}
              data-testid={`draggable-item-${index}`}
            >
              {item}
            </div>
          ))}
        </div>
        
        <div 
          className={`drop-zone ${isDragOver ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          data-testid="drop-zone"
        >
          <h3>{dropZoneName}</h3>
          {droppedItems.length === 0 ? (
            <p className="drop-zone-placeholder">ここにアイテムをドロップしてください</p>
          ) : (
            <ul className="dropped-items">
              {droppedItems.map((item, index) => (
                <li key={index} data-testid={`dropped-item-${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button 
          onClick={handleReset}
          className="reset-button"
          data-testid="reset-button"
        >
          リセット
        </button>
      </div>
    </div>
  )
}

export default DragAndDrop
