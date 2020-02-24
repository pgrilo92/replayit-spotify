// import React from "react";
// import "./Player.css";
// import hash from './hash'
// const Player = props => {
//     const backgroundStyles = {
//         backgroundImage:`url(${props.item.album.images[0].url})`,
//     };

//     const progressBarStyles = {
//         width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
//     };


//     window.onSpotifyWebPlaybackSDKReady = () => {
//       var player = new Spotify.Player({
//         name: 'Carly Rae Jepsen Player',
//         getOAuthToken: callback => {
//             hash()
//           // Run code to get a fresh access token
//           player.connect().then(success => {
//             if (success) {
//               console.log('The Web Playback SDK successfully connected to Spotify!');
//             }
//           })
//           callback('access token here');
//         },
//         volume: 0.5
//       });
//     }
    

//     return (
//     <div className="App">
//         <div className="main-wrapper">
//         <div className="now-playing__img">
//             <img src={props.item.album.images[0].url} alt="album-img" />
//         </div>
//         <div className="now-playing__side">
//             <div className="now-playing__name">{props.item.name}</div>
//             <div className="now-playing__artist">
//                 {props.item.artists[0].name}
//             </div>
//             <div className="now-playing__status">
//                 {props.is_playing ? "Playing" : "Paused"}
//             </div>
//             <div className="progress">
//             <div
//                 className="progress__bar"
//                 style={progressBarStyles}
//             />
//             </div>
//         </div>
//         <div className="background" style={backgroundStyles} />{" "}
//         </div>
//     </div>
//     );
// }
// export default Player;