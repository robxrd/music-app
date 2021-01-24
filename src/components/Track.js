function Track(props) {
    return (
        <div className="track-div">
            <button className="play-button" />
            <div className="track-name">{props.trackName}</div>
            <div className="track-time">{props.trackTime}</div>
        </div>
    )
}

export default Track