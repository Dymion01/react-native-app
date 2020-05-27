import React, {FC , useState } from 'react' ;
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { TextInput ,} from 'react-native';
import { ISingleElementList }from '../entities/todoSingleEl';
import {useDispatch} from 'react-redux';

import { setNewElemTodoList} from '../actions/types/todoListActions';
import Colors from '../constans/Colors';


const Wrapper = styled.View`
    margin: 80px 20px 0 20px;

`;

const CustomTextImput = styled.TextInput`
    
    margin: 2px;
    borderRadius: 30px;
    borderColor: ${Colors.black};
    backgroundColor: ${Colors.red};
    padding: 10px;
    color: ${Colors.peach};
    width: 80%;
    alignSelf: center;
    

`;
const SaveButton = styled.View`
margin: 2px;
    borderRadius: 30px;
    borderColor: ${Colors.black};
    backgroundColor: ${Colors.red};
    padding: 5px;
    color: ${Colors.peach};
    width: 40%;
    alignSelf: center;
`;

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>;


const Form: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descInput , setDescInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    const descriptionValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text);
    }


    const saveDate = () =>{
        if(nameInput!= '' && descInput != "" ){
        dispatch<SetNewElemTodoList>(setNewElemTodoList( {
            name: nameInput,
            description: descInput,
            id: Date.now()
        } as ISingleElementList
         
        ));
        props.switchView(false);
    } else {
        alert('Enter Data');
    }}
    

    return (
        <Wrapper>
            <CustomTextImput value={nameInput} onChange={nameValueChange}  placeholder="Name" placeholderTextColor= {Colors.peach}/>
            <CustomTextImput value={descInput} onChange={descriptionValueChange}  placeholder="Description" placeholderTextColor= {Colors.peach}/>
            <SaveButton>
            <Button title = "Save" onPress={ saveDate } titleStyle={{ color: Colors.darkgrey }} type="clear"/>
            
            </SaveButton>
        </Wrapper>
    )
       
    


};


export default Form;