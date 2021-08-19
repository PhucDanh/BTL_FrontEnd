import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAction } from '../../store/action/action';
import { actionType } from '../../store/action/type';

class MultipleChoice extends Component {
    checkExact = (id, content, exact) => {
        return () => {
            this.props.dispatch(createAction(
                actionType.SAVE_ANSWER,
                { 
                    questionId: id,
                    answer: {
                        content: content,
                        exact: exact
                    }
                }
            ))
        }
    }

    render() {
        const { id, content, answers } = this.props.item;
        return (
            <div>
                <h5> Câu hỏi {id}: {content} </h5>
                {
                    answers.map((item) => {
                        return (
                            <div key={item.id}>
                                <input onClick={this.checkExact(id, item.content, item.exact)} value={item.id} type="radio" className={id} name={id} />
                                <label className="pl-3">{item.content}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect()(MultipleChoice);