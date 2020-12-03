/*--- Load the top songs once page is uploaded ---*/
export function getTopPlayedSongs(token) {
    const playlistUrl='https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50'
    return fetch(playlistUrl, 
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            },
            mode: 'cors'
        })
        .then(res=> res.json())
}

/*--- get the user info from the api using the token ---*/
export function profileInfo(token) {
    const profileUrl='https://api.spotify.com/v1/me'
    return fetch(profileUrl, 
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            },
            mode: 'cors'
        })
        .then(res => res.json())
}

/*--- function used create an array for track lists using the URI's to be used on the body of the post request ---*/
function createArray(trackList) {
    let trackArr = []
    trackList.forEach((tracks) => trackArr.push(tracks.uri))
    let uris = JSON.stringify(trackArr)
    return uris
}

/*--- Create Playlists ---*/
export function createPlaylist(user_id, token, data, trackList) {
	let playlistUrl = 'https://api.spotify.com/v1/users/' + user_id +
        '/playlists';
/*--- Creates a playlist with a a name description chosen by user ---*/
	return fetch(playlistUrl, {
		method: 'POST',
		body: JSON.stringify(data),
		dataType: 'json',
		headers: {
			'Authorization': 'Bearer ' + token,
			'Content-Type': 'application/json'
        },
        mode: 'cors'})
    .then( res => {
        if (res.ok) {
            let createdList = res.json()
            return createdList
        }
        throw new Error('Bad Credentials!')
    })
    .then((createdList)=> {
/*--- Adds songs to the playlist created ---*/
        return fetch(`https://api.spotify.com/v1/playlists/${createdList.id}/tracks`, {
            method: 'POST',
            body: createArray(trackList),
            dataType: 'json',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
    })
    .then( res => {
            if (res.ok) return res.json()
            throw new Error('Bad Credentials!')
        }).then()
    }

