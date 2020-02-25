(this["webpackJsonpreplay-it-spotify"]=this["webpackJsonpreplay-it-spotify"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),i=(a(16),a(1)),c=a.n(i),l=a(2),u=a(3),m=a(4),p=a(6),h=a(5),d=a(7),f=["user-top-read","user-read-currently-playing","user-read-playback-state","playlist-modify-public"],y=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var g=y,v=(a(18),a(10));a(19);function b(e){return fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+e},mode:"cors"}).then((function(e){return e.json()}))}function E(e){var t=[];return e.forEach((function(e){return t.push(e.uri)})),JSON.stringify(t)}function k(e,t,a,n){return fetch("https://api.spotify.com/v1/users/"+e+"/playlists",{method:"POST",body:JSON.stringify(a),dataType:"json",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},mode:"cors"}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){return fetch("https://api.spotify.com/v1/playlists/".concat(e.id,"/tracks"),{method:"POST",body:E(n),dataType:"json",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},mode:"cors"})})).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")}))}var w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",description:"",public:!0},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k(a.props.user_id,a.props.token,a.state,a.props.trackList);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error on submit");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row Create Playlist"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("label",{for:"name"},"Playlist Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"name",placeholder:"Playlist name",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("label",{for:"description"},"Description"),r.a.createElement("input",{className:"form-control",name:"description",placeholder:"Description",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("input",{className:"btn btn-success playlist",type:"submit",value:"Create Playlist"}))))}}]),t}(r.a.Component),j=function(e){return e.items.length<1&&null===e.user?r.a.createElement("h2",null," No Props"):r.a.createElement("div",{className:"Playlist row"},r.a.createElement("div",{className:"MostPlayed col-sm-12 col-md-12 col-lg-6"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("h1",{className:"user-name"},e.user.display_name," Favourite Tracks"),e.items.items.map((function(e,t){return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("img",{className:"list-img",src:e.album.images[0].url,alt:"track-img"}),r.a.createElement("p",null,t+1," - ",e.name," - ",e.artists[0].name," "))})))),r.a.createElement("div",{className:"PlaylistForm col-sm-12 col-md-12 col-lg-6"},r.a.createElement(w,{user_id:e.user.id,token:e.token,trackList:e.items.items})))},N=(a(20),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0,items:[],user:null},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=g.access_token)){e.next=9;break}return e.next=4,fetch("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50",{method:"GET",headers:{Authorization:"Bearer "+t},mode:"cors"}).then((function(e){return e.json()}));case 4:return a=e.sent,e.next=7,b(t);case 7:n=e.sent,this.setState({token:t,items:a,user:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.token?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{items:this.state.items,user:this.state.user,token:this.state.token})):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Replay.It")),r.a.createElement("div",{className:"login"},r.a.createElement("a",{className:"button login-btn",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("23707be4c54c4530a0edd2e5c1adef67","&redirect_uri=").concat("https://pgrilo92.github.io/replayit-spotify/","&scope=").concat(f.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify")),r.a.createElement("footer",null,"Joaquim Grilo \xa9")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.937291e0.chunk.js.map