import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

type ColumnProps = {
    text: string
}

export const Column = ({ text }: ColumnProps) => {
    return (
        <ColumnContainer>
        <ColumnTitle>{ text }</ColumnTitle>
            <Card text='Generate App Scaffold'></Card>
            <Card text='Learn Typescript'></Card>
            <Card text='Begin to use static typing'></Card>
            <AddNewItem dark={true} toggleButtonText='+ Add another card' onAdd={() => console.log(`New Item Added`)}/>
        </ColumnContainer>
    )
}