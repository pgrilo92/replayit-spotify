import React from 'react'
import './PlayList.css'
import PlaylistForm from '../../Components/PlaylistForm/PlaylistForm' 

const PlayList = (props) => {
    if(props.items.length < 1 && props.user===null) return <h2> No Props</h2>
    return (
        <div className="Playlist row">
            <div className="MostPlayed col-sm-12 col-md-12 col-lg-6">
                <ul className="list-group">
                <h1 className='user-name'>{props.user.display_name} Favourite Tracks</h1>
                {
                props.items.items.map((item, idx) => {
                    return(
                        <li className="list-group-item track-list">
                            <img className="list-img"src={item.album.images[0].url} alt="track-img" />
                            <p>{idx + 1} - {item.name} - {item.artists[0].name} </p>
                        </li>
                    )
                })}
                </ul>
            </div>
            <div className="PlaylistForm col-sm-12 col-md-12 col-lg-6">
                <h1>Create Playlist</h1>
                <PlaylistForm user_id={props.user.id} token={props.token} trackList={props.items.items}/>
            </div>
        </div>
    )
}

export default PlayList
