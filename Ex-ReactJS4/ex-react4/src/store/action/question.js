import axios from "axios"
import { createAction } from "./action"
import { actionType } from "./type"

export const getQuestions = (dispatch) => {
    axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions"
    }).then((res) => {
        console.log("res", res.data);
        dispatch(createAction(
            actionType.GET_QUESTIONS,
            res.data
        ))
    }).catch((err) => {
        console.log("error", {...err})
    })
}