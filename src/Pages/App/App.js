import React, { Component } from "react";
import {Route} from 'react-router-dom'
import { authEndpoint, clientId, redirectUri, scopes } from "../../Services/config";
import hash from "../../Services/hash";
import PlayList from "../Playlist/PlayList";
import {getTopPlayedSongs, profileInfo} from '../../Services/spotify-api'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      items: [],
      user: null
    };
  }
  async componentDidMount() {
    // Set token
    let _token = hash.access_token;
    

    if (_token) {
      // Set token
      const results = await getTopPlayedSongs(_token)
      const userInfo = await profileInfo(_token)
      this.setState({
        token: _token,
        items: results,
        user: userInfo
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props)=> 
            {return (!this.state.token) ? 
            (<>
              <header className="App-header">
                <h1>Replay.It</h1>
              </header>
              <div className="login">
                <a
                  className="button login-btn"
                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    "%20"
                  )}&response_type=token&show_dialog=true`}
                >
                  Login to Spotify
                </a>
              </div>
              <footer>
                Joaquim Grilo &copy;
              </footer>
            </>)       
            : 
            (<>
              <PlayList 
                items={this.state.items}
                user={this.state.user}
                token={this.state.token}
                {...props}
              />
            </>)
            }
          } />
      </div>
    );
  }
}

export default App;