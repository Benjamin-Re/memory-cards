import './Scoreboard.css'
export function Scoreboard (props) {
    return (
        <div className='scoreboard'>
            {props.score === 9 ? (
                <p>Game Won</p>
            ) : (
                <p>Score: {props.score}</p>
            )}
        </div>
    )
}

