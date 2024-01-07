enum DragItemType {
    COLUMN = 'COLUMN',
    CARD = 'CARD'
}

export type ColumnDragItem = {
    id: string
    text: string
    type: DragItemType.COLUMN
}

export type CardDragItem = {
    id: string
    text: string
    type: DragItemType.CARD
}

export type DragItem = ColumnDragItem | CardDragItem