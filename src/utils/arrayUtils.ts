
type Item = {
    id: string
}

export function findItemIndexById<TItem extends Item>(array: TItem[], id: string){
    return array.findIndex(item => item.id === id)
}

export function removeItemFromIndex<TItem>(array: TItem[], index: number) {
    return [...array.slice(0, index), ...array.slice(index+1)]
}

export function insertItemAtIndex<TItem>(array: TItem[], index: number, itemToInsert: TItem) {
    return [...array.slice(0, index), itemToInsert, ...array.slice(index)]
}

export function moveItem<TItem>(array: TItem[], from: number, to: number) {
    const item = array[from];
    return insertItemAtIndex(removeItemFromIndex(array, from), to, item)
}

