(this["webpackJsonpreplay-it-spotify"]=this["webpackJsonpreplay-it-spotify"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=(n(16),n(1)),c=n.n(i),l=n(2),u=n(3),m=n(4),p=n(6),h=n(5),f=n(7),d=["user-top-read","user-read-currently-playing","user-read-playback-state","playlist-modify-public"],g=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{});window.location.hash="";var y=g,b=(n(18),n(10));n(19);function v(e){return fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+e},mode:"cors"}).then((function(e){return e.json()}))}function k(e,t,n,a){return fetch("https://api.spotify.com/v1/users/"+e+"/playlists",{method:"POST",body:JSON.stringify(n),dataType:"json",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},mode:"cors"}).then((function(e){if(console.log(e),e.ok)return e.json();throw new Error("Bad Credentials!")})).then(function(e,t,n){return fetch("https://api.spotify.com/v1/me/playlists",{method:"GET",headers:{Authorization:"Bearer "+e},mode:"cors"}).then((function(e){console.log(e.json());var t=[e.json()];console.log(t);var a=t[t-1];if(console.log(a),a.name===n.name)return a})).then((function(){t.map((function(e){console.log(e);var t=[];return t.push(e.href),console.log(e.href),t}))}))}(t,a,n))}var E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",description:"",public:!0},n.handleChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k(n.props.user_id,n.props.token,n.state,n.props.trackList);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error on submit");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"Create Playlist",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"form-group",type:"text",name:"name",placeholder:"Playlist name",onChange:this.handleChange}),r.a.createElement("input",{className:"form-group",name:"description",placeholder:"Description",onChange:this.handleChange}),r.a.createElement("input",{className:"btn btn-success playlist",type:"submit",value:"Create Playlist"}))}}]),t}(r.a.Component),j=function(e){return e.items.length<1&&null===e.user?r.a.createElement("h2",null," No Props"):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{user_id:e.user.id,token:e.token,trackList:e.items.items}),r.a.createElement("div",{className:"MostPlayed"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("h1",{className:"user-name"},e.user.display_name," Favourite Tracks"),e.items.items.map((function(e,t){return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("img",{className:"list-img",src:e.album.images[0].url,alt:"track-img"}),r.a.createElement("p",null,t+1," - ",e.name," - ",e.artists[0].name,"  "))})))))},w=(n(20),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0,items:[],user:null},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=y.access_token)){e.next=9;break}return e.next=4,fetch("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50",{method:"GET",headers:{Authorization:"Bearer "+t},mode:"cors"}).then((function(e){return e.json()}));case 4:return n=e.sent,e.next=7,v(t);case 7:a=e.sent,this.setState({token:t,items:n,user:a});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.token?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{items:this.state.items,user:this.state.user,token:this.state.token})):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Replay.It")),r.a.createElement("div",{className:"login"},r.a.createElement("a",{className:"button login-btn",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("23707be4c54c4530a0edd2e5c1adef67","&redirect_uri=").concat("http://localhost:3000/callback/","&scope=").concat(d.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify")),r.a.createElement("footer",null,"Joaquim Grilo \xa9")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.4f150626.chunk.js.map