import React from 'react'
import Question from './question'

class QuestionList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }
  }

  render() {
    console.log(this.props.questions.items);
    let questions = [];
    questions = this.props.questions.items
    console.log(questions);
    return (

      <div className="container">
        {!questions ? <h3 className="loading-fill">Loading...</h3> : questions.map((question) => {
          console.log(question);
          return <Question question={question} key={question.creation_date}/>
        })}

      </div>
    )
  }
}

export default QuestionList
