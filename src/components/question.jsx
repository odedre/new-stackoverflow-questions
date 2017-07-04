import React from 'react'
import Tag from './tag'
import Activity from './activity'

class Question extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    console.log("dsfsdfsdfsdf");
    let question = this.props.question
    console.log(question);
    return (
      <div>
      <div className="question-box row"  >
        <div className="stat-box col-xs-3">
          <div className="stats col-xs-3">
            <div>{question.score}</div>
            <div>Votes</div>
         </div>
         <div className="stats ans col-xs-3">
           <div>{question.answer_count}</div>
           <div>Answers</div>
        </div>
        <div className="stats col-xs-3">
          <div>{question.view_count}</div>
          <div>Views</div>
       </div>
     </div>
        <div className=" content col-xs-7">
          <h4 className="question-title"><a target="_blank" href={question.link}>{question.title}</a></h4>
          {question.tags.map(function(tag) {
            console.log(tag);
            return <Tag name={tag} />
          })}
        </div>
        <div className="col-xs-2">
          <Activity time={question.last_activity_date}/>
        </div>

      </div>
      <hr />
    </div>
    )
  }
}

export default Question
