import { useState } from 'react'
import { AddItemButton } from '../styles'

type AddNewItemProps = {
    onAdd: (text: string) => void;
    dark?: boolean;
    toggleButtonText: string
}

export const AddNewItem = ({ onAdd, dark, toggleButtonText }: AddNewItemProps) => {
    const [ showForm, setShowForm ] = useState(false)

    if (showForm) {
        
    }

    return <AddItemButton dark={dark} onClick={() => setShowForm(true)}>{toggleButtonText}</AddItemButton>
}