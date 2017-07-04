import React from 'react'
import QuestionList from './questionList'
import './style.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: []
    }

  }

  componentDidMount() {
    let latestQuestions = fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        questions: json
      });
    });
  }


  render () {
    let questionsToList = this.state.questions
    // console.log(this.state.questions);
    return (
      <div>
        <QuestionList questions={questionsToList}/>
      </div>
    )
  }
}

export default App
