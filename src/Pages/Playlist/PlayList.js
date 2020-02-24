import React from 'react'
import './PlayList.css'
//import {createPlaylist} from '../../Services/spotify-api'
import PlaylistForm from '../../Components/PlaylistForm/PlaylistForm' 

const PlayList = (props) => {

    // let handleSubmit =  (e) => {
    //     e.preventDefault()
    //     try {
    //         [e.target.name] =  e.target.value
    //         console.log(e.target.name)
    //         console.log(e.target.value)

    //         createPlaylist(props.user.id, props.token, [e.target.name] )
    //     } catch (err) {
    //         console.log('error on submit')
    //     }
    // }
    if(props.items.length < 1 && props.user===null) return <h2> No Props</h2>
    //createPlaylist(props.user.id, props.token )
    return (
        <>
            <PlaylistForm user_id={props.user.id} token={props.token} trackList={props.items.items}/>
            <div className="MostPlayed">
                <ul className="list-group">
                <h1 className='user-name'>{props.user.display_name} Favourite Tracks</h1>
                {
                props.items.items.map((item, idx) => {
                    return(
                        <li className="list-group-item">
                            <img className="list-img"src={item.album.images[0].url} alt="track-img" />
                            <p>{idx + 1} - {item.name} - {item.artists[0].name}  </p>
                        </li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

export default PlayList
