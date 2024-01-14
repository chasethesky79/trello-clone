import { useContext, useRef } from 'react';
import { DragItemType } from '../DragItem';
import { addTask, moveList, MoveListAction } from '../state/actions';
import { AppStateContext } from '../state/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import { useItemDrag } from '../utils/useItemDrag';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { useDrop } from 'react-dnd'
import { throttle } from 'throttle-debounce-ts'


type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {
    const { draggedItem, dispatch, getTasksByListId } = useContext(AppStateContext)
    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)
    const { drag } = useItemDrag({ type: DragItemType.COLUMN, text, id })
    const [, drop] = useDrop({
        accept: DragItemType.COLUMN,
        hover: throttle(200, () => {
            if (!draggedItem || (draggedItem.type === DragItemType.COLUMN && draggedItem.id === id)) {
                return
            }
            dispatch(moveList(draggedItem.id, id) as MoveListAction)
        })
    })
    
    drag(drop(ref))
    
    return (
        <ColumnContainer>
        <ColumnTitle>{ text }</ColumnTitle>
            {tasks?.map(({ id, text }) => <Card id={id} text={text} key={id}/>)}
            <AddNewItem dark={true} toggleButtonText='+ Add another card' onAdd={(text) => dispatch(addTask(text, id))}/>
        </ColumnContainer>
    )
}
