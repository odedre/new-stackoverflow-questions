import React from 'react'

class Activity extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      now: 0
    }

  }

  componentDidMount() {
    // let d = new Date();
    // let now = d.getTime();
    //
    // let lastUpdate = now - this.props.time
    // console.log(lastUpdate, now, this.props.time);
    // this.parseTime()
  }

  parseTime() {
    // let time = this.props.time
    // console.log(time);
    // let days = Math.floor(time / (24*3600))
    // time -= days*24*3600
    // console.log(days);
    // days -= 17351
    // console.log(days);
    // let hh = Math.floor(time / 3600)
    // time -= hh*3600
    //
    // let mm = Math.floor(time / 60)
    // time -= mm*60
    //
    // console.log(days,hh,mm,time);
  }

  render() {
    return (
        <div className="activity"></div>
    )

  }
}


export default Activity
