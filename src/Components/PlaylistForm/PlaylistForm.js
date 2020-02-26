import React from 'react'
import './PlaylistForm.css'
import {createPlaylist} from '../../Services/spotify-api'

class PlaylistForm extends React.Component {   
    state = {
        name: '',
        description: '',
        public: true,
        showMessage: "completionMessage"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit =  async (e) => {
        let data= {name:this.state.name, description: this.state.description, public: this.state.public}

        e.preventDefault()
        try {
            await createPlaylist(this.props.user_id, this.props.token, data, this.props.trackList)
            this.setState({showMessage: "completionMessageShow"})
        } catch (err) {
            console.log('error on submit')
        }
    }

    render() {
        return(
            <>
            <div className="row Create Playlist">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-12">
                    <label for="name">Playlist Name</label>
                        <input className="form-control" 
                            type="text" 
                            name="name" 
                            placeholder="Playlist name" 
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-12">
                        <label for="description">Description</label>
                        <input className="form-control" 
                            name="description" 
                            placeholder="Description" 
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-12">
                        <input className="btn btn-success playlist" type="submit" value="Create Playlist" />
                    </div>
                </form>
            </div>
            <div className={this.state.showMessage}>
                <p>Playlist {this.state.name} has been created </p>
            </div>
            </>
            
        )
    }
}

export default PlaylistForm