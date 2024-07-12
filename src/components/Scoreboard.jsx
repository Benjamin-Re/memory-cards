import { useState, useEffect } from 'react';
import './Scoreboard.css'
export function Scoreboard (props) {
    const [highscore, setHighscore] = useState(0)
    useEffect(() => {
        if(props.score > highscore) {
            setHighscore(props.score)
        }
    }, [props.score])
    return (
        <div className='scoreboard'>
            {props.score === 10 ? (
                <p>Game Won</p>
            ) : (
                <>
                    <h3>Score: {props.score}</h3>
                    <h4>Highscore: {highscore}</h4>
                </>
            )}
            <p>Memory Cards: Click on the cards to score points. Don't click the same card twice or you lose.</p>
        </div>
    )
}

