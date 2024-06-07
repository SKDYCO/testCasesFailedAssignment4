// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {isLoding: true, iplList: []}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedIplData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplList: updatedIplData, isLoding: false})
  }

  render() {
    const {isLoding, iplList} = this.state
    return (
      <div className="bg-container">
        <div className="icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="icon-image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div>
          {isLoding ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="unorderd-container">
              {iplList.map(each => (
                <TeamCard eachTeam={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
