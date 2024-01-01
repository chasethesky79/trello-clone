import { useContext } from 'react';
import { addTask } from '../state/actions';
import { AppStateContext } from '../state/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {
    const { dispatch, getTasksByListId } = useContext(AppStateContext)
    const tasks = getTasksByListId(id)
    return (
        <ColumnContainer>
        <ColumnTitle>{ text }</ColumnTitle>
            {tasks?.map(({ id, text }) => <Card id={id} text={text} key={id}/>)}
            <AddNewItem dark={true} toggleButtonText='+ Add another card' onAdd={(text) => dispatch(addTask(text, id))}/>
        </ColumnContainer>
    )
}