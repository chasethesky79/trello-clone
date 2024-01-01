import { useContext, useReducer } from 'react';
import appReducer from '../reducers/appStateReducer';
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
    const { lists } = useContext(AppStateContext)
    const [state, dispatch] = useReducer(appReducer, { lists })
    return (
        <ColumnContainer>
        <ColumnTitle>{ text }</ColumnTitle>
            {state?.lists?.find(list => list.id === id)?.tasks?.map(({ id, text }) => <Card id={id} text={text} key={id}/>)}
            <AddNewItem dark={true} toggleButtonText='+ Add another card' onAdd={(text) => dispatch(addTask(text, id))}/>
        </ColumnContainer>
    )
}