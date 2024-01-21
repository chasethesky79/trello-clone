import { DragItem } from "../DragItem";

export const isHidden = (draggedItem: DragItem | null, itemType: string, id?: string) => {
    return draggedItem?.type === itemType && draggedItem?.id === id
}