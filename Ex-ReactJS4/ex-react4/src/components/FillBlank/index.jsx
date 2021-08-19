import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAction } from '../../store/action/action';
import { actionType } from '../../store/action/type';

class FillBlank extends Component {
    checkExact = (event, id, content) => {
        const exact = event.target.value.toLowerCase() === content.toLowerCase();
        this.props.dispatch(createAction(
            actionType.SAVE_ANSWER,
            { 
                questionId: id,
                answer: {
                    content: event.target.value,
                    exact: exact
                }
            }
        ))
    }

    render() {
        const { id, content, answers } = this.props.item;
        return (
            <div>
                <h5>Câu hỏi {id}: {content} </h5>
                <input onChange={(event) => this.checkExact(event, id, answers[0].content)} className="mb-3"/>
            </div>
        )
    }
}

export default connect()(FillBlank)