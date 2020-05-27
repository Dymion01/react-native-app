import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList }from '../entities/todoSingleEl';

export interface IToDoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): IToDoListReducer  => ({
    todoList: [{
        name: 'Obiad' ,
        description: 'Zjeść pierogi',
        id: 1
    },
    {
        name: 'Zadanie' ,
        description: 'Zrobić projekt',
        id: 2
    }]


});

export default (state = defaultState(), action: any): IToDoListReducer  => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [...state.todoList , action.newElem]
            };
        }
        case actionTypes.REMOVE_ELEM: {
            return{
                ...state,
                todoList: state.todoList.filter(elem => elem.id !== action.ElemId)
            };
        }
        default: {
            return state;
        }
    }
};