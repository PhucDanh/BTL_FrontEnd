import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../store/action/question'
import FillBlank from '../FillBlank'
import MultipleChoice from '../MultipleChoice'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false
        }
    }

    checkFinalResult = () => {
        let result = 0;
        this.props.answers.forEach(element => {
            if(element.answer.exact) {
                result++;
            }
        });
        alert("Số câu đúng là: " + result + "/" + this.props.questions.length);
        this.setState({
            isSubmit: true
        })
    }

    testAgain = () => {
        this.setState({
            isSubmit: false
        })
        window.location.reload(true);
    }

    render() {
        return (
            <div className="container">
                <h1 className="mb-3 text-center" style={{ fontSize: "70px"}}>Online Test</h1>
                {
                    this.props.questions.map((item) => {
                        if(item.questionType === 1) {
                            return <MultipleChoice key={item.id} item={item}></MultipleChoice>
                        } else {
                            return <FillBlank key={item.id} item={item}></FillBlank>
                        }
                    })
                }
                { !this.state.isSubmit ? 
                    <button onClick={this.checkFinalResult} className="btn btn-info mr-3">Submit</button> : 
                    <button onClick={this.testAgain} className="btn btn-info mr-3">Retest</button>
                }
                             
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(getQuestions)
    }
}

const mapStateToProps = (state) => ({ 
    questions: state.questions.questions,
    answers: state.questions.answers
});

export default connect(mapStateToProps)(Home);