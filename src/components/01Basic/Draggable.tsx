import {useDraggable} from '@dnd-kit/core'

function Draggable() {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  })

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="h-24 w-24 rounded-md bg-blue-500 p-4 text-white"
    >
      Drag me
    </div>
  )
}

export default Draggable