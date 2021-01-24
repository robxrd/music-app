function AlbumHead (props){
    return (
        <div className='album-head'>
            <img className='cover' src={props.albumArt} alt="Album Art"/>
            <div className="info-box">
                <div className='album-name'>{props.albumName}</div>
                <div className='artist-name'>{props.artist} • <spam className="album-year">{props.albumYear}</spam></div>
                {/* <div className='album-year'>{props.albumYear}</div> */}
            </div>
        </div>
    )
}

export default AlbumHead