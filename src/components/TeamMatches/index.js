// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {selectedIplTeam: [], loader: true}

  componentDidMount() {
    this.getIplTeamData()
  }

  getIplTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.data,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.data,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    console.log(updatedData)
    this.setState({loader: false, selectedIplTeam: updatedData})
  }

  render() {
    const {selectedIplTeam, loader} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = selectedIplTeam

    return loader ? (
      <diV data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </diV>
    ) : (
      <div className="teamMatches-container">
        <img src={teamBannerUrl} className="iplteam-image" alt="team banner" />
        <h1>Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="unordered-container">
          {recentMatches.map(eachMatch => (
            <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
