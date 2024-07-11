import './Scoreboard.css'
export function Scoreboard (props) {
    return (
        <div className='scoreboard'>
            {props.score === 9 ? (
                <p>Game Won</p>
            ) : (
                <h3>Score: {props.score}</h3>
            )}
            <p>Memory Cards: Click on the cards to score points. Don't click the same card twice or you lose.</p>
        </div>
    )
}

