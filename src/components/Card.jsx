export function Card (props) {
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.url} width="300" height="300"/>
        </div>
    )
}

