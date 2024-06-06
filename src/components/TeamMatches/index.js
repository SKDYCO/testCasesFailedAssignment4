// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {selectedIplTeam: {}}

  componentDidMount() {
    this.getIplTeamData()
  }

  getIplTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    console.log(response)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({selectedIplTeam: updatedData})
  }


  getLatestMatchDetails = () => {
    const {selectedIplTeam} = this.props
    const {latestMatchDetails} = selectedIplTeam
    const updated = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.data,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    return <LatestMatch latestMatchDetails={updated}/>
  }

  render() {
    const {selectedIplTeam} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = selectedIplTeam
    return (
      <div className="teamMatches-container">
        <img src={teamBannerUrl} className="iplteam-image" />
       {this.getLatestMatchDetails()}
      </div>
    )
  }
}
export default TeamMatches
