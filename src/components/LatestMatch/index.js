// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeamLogo,
    competingTeam,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails
  return (
    <div className="latestMatch-container">
      <div className="con">
        <h1 className="paragraph"> {competingTeam}</h1>
        <p className="paragraph">{date}</p>
        <p className="paragraph">{venue}</p>
        <p className="paragraph">{result}</p>
      </div>
      <div className="image-container">
        <img
          src={competingTeamLogo}
          alt="latest match {competing_team}"
          className="team-logo"
        />
      </div>
      <div className="con">
        <p className="paragraph">First Innings</p>
        <p className="paragraph">{firstInnings}</p>
        <p className="paragraph">Second Innings</p>
        <p className="paragraph">{secondInnings}</p>
        <p className="paragraph">Man Of The Match</p>
        <p className="paragraph">{manOfTheMatch}</p>
        <p className="paragraph">umpires</p>
        <p className="paragraph">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
