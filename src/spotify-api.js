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
        .then(res=> res.json())
}

export function createPlaylist(user_id, token) {
    console.log(user_id)
    console.log(token)
	var url = 'https://api.spotify.com/v1/users/' + user_id +
		'/playlists';
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify({
            'name': 'Top 50 For You',
            'description': 'Top played songs by you',
			'public': true
		}),
		dataType: 'json',
		headers: {
			'Authorization': 'Bearer ' + token,
			'Content-Type': 'application/json'
        }})
        .then( res => res.json())
}