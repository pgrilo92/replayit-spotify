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

// function getAllPlaylists(token, trackList, data) {
//     const playlistsUrl='https://api.spotify.com/v1/me/playlists'
//     return fetch(playlistsUrl, 
//         {
//             method: "GET",
//             headers: {
//                 "Authorization": "Bearer " + token
//             },
//             mode: 'cors'
//         })
//         .then(res => { 
//             let result = res.json()
//             return result
//         })
//         .then((result)=> {
//             console.log(result)
//             let playlistObj = result.items
//             console.log(playlistObj)
//             playlistObj.forEach((playlist) => {
//                 console.log(playlist)
//                 if (playlist.name === data.name) return playlist
//             })
//         })
//         .then( () => {
//             trackList.map((tracks) => {
//                 console.log(tracks)
//                 let trackArr = []
//                 trackArr.push(tracks.href)
//                 console.log(tracks.href)
//                 return trackArr
//             })
//         })
//}

function createArray(trackList) {
    let trackArr = []
    trackList.forEach((tracks) => trackArr.push(tracks.uri))
    console.log(trackArr)
    let uris = JSON.stringify(trackArr)
    return uris
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
        if (res.ok) {
            let createdList = res.json()
            return createdList
        }
        throw new Error('Bad Credentials!')
    })
    .then((createdList)=> {
        console.log(createdList.id)
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
        })
    }

