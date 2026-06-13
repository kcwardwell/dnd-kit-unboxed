import Draggable from '@/components/01Basic/Draggable'
import { DndContext } from '@dnd-kit/core'




export default function BasicDragDrop() {
  function handelDragEnd(event: any) {
    console.log('Drag ended', event)
  }

  return (
    <DndContext onDragEnd={handelDragEnd}>
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <Draggable />

        <div className="flex h-40 w-40 items-center justify-center rounded-md border-2 border-dashed border-gray-400">
          <span className="text-gray-500 dark:text-gray-400">Drop here</span>
        </div>
      </div>
    </DndContext>
  )
}
