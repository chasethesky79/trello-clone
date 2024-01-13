import { useContext } from "react";
import { DragItem } from "../DragItem";
import { AppStateContext } from "../state/AppStateContext";
import { useDrag } from 'react-dnd'
import { setDraggedItem, SetDraggedItemAction } from "../state/actions";

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useContext(AppStateContext)
    const [_, drag] = useDrag({
        type: item?.type,
        item: () => {
            dispatch(setDraggedItem(item) as SetDraggedItemAction)
            return item
        },
        end: () => dispatch(setDraggedItem(null) as SetDraggedItemAction)
    })
    return { drag }
}