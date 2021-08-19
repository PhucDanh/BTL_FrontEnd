import { actionType } from "../action/type";

const initialState = {
    questions: [],
    answers: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionType.GET_QUESTIONS:
            state.questions = [...action.payload];
            return {...state}
        case actionType.SAVE_ANSWER:
            const foundIndex = state.answers.findIndex((item) => item.questionId === action.payload.questionId);
            if(foundIndex === -1) {
                state.answers.push(action.payload);
            } else {
                state.answers[foundIndex] = action.payload;
            }
            state.answers.sort((first, second) => first.questionId - second.questionId);
            return {...state};
        default:
            return state;
    }
}

export default reducer;