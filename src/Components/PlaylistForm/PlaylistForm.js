import React from 'react'
import './PlaylistForm.css'
import {createPlaylist} from '../../Services/spotify-api'

class PlaylistForm extends React.Component {   
    state = {
        name: '',
        description: '',
        public: true
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit =  async (e) => {
        e.preventDefault()
        try {
            await createPlaylist(this.props.user_id, this.props.token, this.state, this.props.trackList)
        } catch (err) {
            console.log('error on submit')
        }
    }

    render() {
        return(
            <form className="Create Playlist" onSubmit={this.handleSubmit}>
                <input className="form-group" 
                    type="text" 
                    name="name" 
                    placeholder="Playlist name" 
                    onChange={this.handleChange} />
                <input className="form-group" 
                    name="description" 
                    placeholder="Description" 
                    onChange={this.handleChange} />
                <input className="btn btn-success playlist" type="submit" value="Create Playlist" />
            </form>
        )
    }
}

export default PlaylistForm