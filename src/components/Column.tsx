import { useState } from 'react';
import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

type ColumnProps = {
    text: string
}

export const Column = ({ text }: ColumnProps) => {
    const [items, setItems] = useState<Array<string>>(['Generate App Scaffold', 'Learn Typescript', 'Begin to use static typing']);
    return (
        <ColumnContainer>
        <ColumnTitle>{ text }</ColumnTitle>
            {items?.map(item => <Card text={item}/>)}
            <AddNewItem dark={true} toggleButtonText='+ Add another card' onAdd={(text) => setItems([...items, text])}/>
        </ColumnContainer>
    )
}