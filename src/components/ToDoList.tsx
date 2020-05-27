import React, {FC , useState } from 'react' ;
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import { Button } from 'react-native-elements';

import { IState} from '../reducers';
import { IToDoListReducer} from '../reducers/todoListReducer';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ISingleElementList }from '../entities/todoSingleEl';
import Colors from '../constans/Colors';
import {useDispatch} from 'react-redux';
import { removeElemToDoList} from '../actions/types/todoListActions';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;
const SingleElList = styled.View`
    border: 1px solid ${Colors.darkgrey};
    borderRadius: 5px;
    margin: 15px 0 10px 0;
    flexDirection: row;
    justifyContent: space-between
    backgroundColor: ${Colors.red}
`;
const ViewRemoveButton = styled.View`
    margin: 2px;
    borderRadius: 15px;
    borderColor: ${Colors.black};
    backgroundColor: ${Colors.peach};
    padding: 0px;
    color: ${Colors.peach};
    width: 30px;
    height: 30px;
    alignSelf: center;
`;
const ViewButton = styled.View`
margin: 2px;
    
    borderRadius: 30px;
    borderColor: ${Colors.black};
    backgroundColor: ${Colors.red};
    padding: 0px;
    color: ${Colors.peach};
    width: 40%;
    alignSelf: center;
`;

type RemoveElemToDoList= ReturnType<typeof removeElemToDoList>;

const ToDoList: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const todoListState = useSelector<IState , IToDoListReducer>(state => state.todoList);
    const goToForm = () => {
        props.switchView(true);

    }
    const RemoveItem = (num: number) =>{
        dispatch<RemoveElemToDoList>(removeElemToDoList(num));
    
        
    }
    return (
       <Wrapper>
           <ViewButton>
               <Button title="Add new" onPress={goToForm}  titleStyle={{ color: Colors.darkgrey }} type="clear"/>
           </ViewButton>
           
           {todoListState.todoList.map((elem: ISingleElementList) =>
           <SingleElList style ={{  }} key={elem.id}>
               <View> 
                   <Text>{elem.name}</Text>
                    <Text>{elem.description}</Text>
               </View>
               <ViewRemoveButton >
                   <Button title="" onPress={ () => RemoveItem(elem.id)} type="clear" 
                   icon={
                        <Icon
                            name="close"
                            size={15}
                            color= {Colors.darkgrey}
                        />
                    }/>
                </ViewRemoveButton>
               

           </SingleElList>
           )}
           
       </Wrapper>
    )
 
};


export default ToDoList; 