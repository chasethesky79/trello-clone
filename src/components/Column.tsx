import { useState, useContext } from 'react';
import { AppStateContext } from '../state/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {
    const [items, setItems] = useState<Array<string>>(['Generate App Scaffold', 'Learn Typescript', 'Begin to use static typing']);
    const { getTasksByListId } = useContext(AppStateContext)
    const tasks = getTasksByListId(id)
    return (
        <ColumnContainer>
        <ColumnTitle>{ text }</ColumnTitle>
            {tasks?.map(({ id, text }) => <Card id={id} text={text}/>)}
            <AddNewItem dark={true} toggleButtonText='+ Add another card' onAdd={(text) => setItems([...items, text])}/>
        </ColumnContainer>
    )
}