// Write your code here
import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {name, teamImageUrl, id} = eachTeam
    return (
      <Link to={`/ipl/${id}`}>
        <li className="list-container ">
          <img src={teamImageUrl} className="ipl-image" key={name} />
          <p className="ipl-paragraph">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
