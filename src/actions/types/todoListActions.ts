import * as actionTypes from './todolistTypes';
import { ISingleElementList }from '../../entities/todoSingleEl';

export const setNewElemTodoList = (newElem: ISingleElementList ) => ({

    type: actionTypes.SET_NEW_ELEM,
    newElem
})

export const removeElemToDoList = (ElemId : number) => ({

    type:actionTypes.REMOVE_ELEM,
    ElemId
})