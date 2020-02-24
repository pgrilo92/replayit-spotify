export function getTopPlayedSongs(token) {
    const playlistUrl='https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50'
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

function getAllPlaylists(token, trackList, data) {
    const playlistsUrl='https://api.spotify.com/v1/me/playlists'
    return fetch(playlistsUrl, 
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            },
            mode: 'cors'
        })
        .then(res => {
            console.log(res.json())
            let playlistObj = [res.json()]
            console.log(playlistObj)
            let lastestPlaylist = playlistObj[playlistObj-1]
            console.log(lastestPlaylist)
            if (lastestPlaylist.name === data.name)
                return lastestPlaylist}).then( () => {
                    trackList.map((tracks) => {
                        console.log(tracks)
                        let trackArr = []
                        trackArr.push(tracks.href)
                        console.log(tracks.href)
                        return trackArr
                    })
                })
}

export function createPlaylist(user_id, token, data, trackList) {

	let playlistUrl = 'https://api.spotify.com/v1/users/' + user_id +
		'/playlists';
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
            console.log(res)
            if (res.ok) return res.json()
            throw new Error('Bad Credentials!')
        }).then(getAllPlaylists(token, trackList, data))
        
        
            // .then( () => {
            //     trackList.map((tracks) => {
            //         let trackArr = []
            //         trackArr.push(tracks.href)})
            //     fetch(`https://api.spotify.com/v1/playlists/${latestPlaylist.id}/tracks`, {
            //     method: 'POST',
            //     body: JSON.stringify(tracklist['href']),
            //     dataType: 'json',
            //     headers: {
            //         'Authorization': 'Bearer ' + token,
            //         'Content-Type': 'application/json'
            //     },
            //     mode: 'cors'})})
            //     .then( res => {
            //         console.log(res)
            //         if (res.ok) return res.json()
            //         throw new Error('Bad Credentials!')
            //     }) 
    }