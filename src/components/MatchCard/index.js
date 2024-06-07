import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {result, competingTeam, matchStatus, competingTeamLogo} = eachMatch
  return (
    <li className="matchCard-container">
      <img src={competingTeamLogo} alt="competing_team" className="logo" />
      <h1 className="paragraph">{competingTeam}</h1>
      <p className="paragraph">{result}</p>
      <p className="paragraph">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
