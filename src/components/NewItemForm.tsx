import { useState } from "react";
import { NewItemFormContainer, NewItemInput, NewItemButton } from "../styles";
import { useFocus } from "../utils/useFocus";

type NewItemFormProps = {
    onAdd: (text: string) => void
}
export const NewItemForm = ({ onAdd }: NewItemFormProps ) => {
    const [text, setText] = useState('')
    const inputRef = useFocus();
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
          onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} 
                onKeyPress={handleKeyPress}/>
            <NewItemButton onClick={() => onAdd(text)}>Create Item</NewItemButton>
        </NewItemFormContainer>
    )
}