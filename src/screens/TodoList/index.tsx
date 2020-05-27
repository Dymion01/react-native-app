import React, { FC, useState } from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

import Form from '../../components/Form';
import ToDoList from '../../components/ToDoList';

const ScrollViewStyled = styled.ScrollView.attrs((props) => ({
    contentContainerStyle: {
      flexGrow: 1,
      backgroundColor:  Colors.peach ,
      padding: 20,
    },
  }))`
    flex: 1;
  `; 

const TodoListScreen = ({}) => {
    const [formView , setFormView] = useState<boolean>(false);
    return (
        <ScrollViewStyled>
            {formView ? (
                <Form switchView = {setFormView}/>
            ) : (
                <ToDoList switchView = {setFormView}/>
            )}
            
            
        </ScrollViewStyled>
    );
};

export default TodoListScreen;