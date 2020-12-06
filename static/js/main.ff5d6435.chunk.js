(this["webpackJsonpmusic-library"]=this["webpackJsonpmusic-library"]||[]).push([[0],{14:function(t,e,a){t.exports={error:"ArtistPage_error__1L2A-",ArtistPage:"ArtistPage_ArtistPage__1njlL",ArtistPage__name:"ArtistPage_ArtistPage__name__2IsVo",ArtistPage__tags:"ArtistPage_ArtistPage__tags__wuAwl",title:"ArtistPage_title__2oGf6",name:"ArtistPage_name__1qJWH",float:"ArtistPage_float__3XKyf"}},18:function(t,e,a){t.exports={Header:"Header_Header__3AZlE",Header__btn:"Header_Header__btn__p6B89",active:"Header_active__DwwKD"}},21:function(t,e,a){t.exports={fixed:"SearchTracksList_fixed__cY__z",SearchForm:"SearchTracksList_SearchForm__18ab6",TracksNotFound:"SearchTracksList_TracksNotFound__1rBj8",List:"SearchTracksList_List__pqzVj"}},24:function(t,e,a){t.exports={Card:"Card_Card__4l0Kf",Card__name:"Card_Card__name__1bdGy",Card__artist:"Card_Card__artist__220wu"}},42:function(t,e,a){t.exports={List:"TopTracksList_List__YZ4Bi"}},49:function(t,e,a){},50:function(t,e,a){},74:function(t,e,a){"use strict";a.r(e);var r=a(1),c=a(0),n=a.n(c),s=a(22),i=a.n(s),o=(a(49),a(4)),u=(a(50),a(5)),d=a(12),j=a(8),l=a.n(j),b=a(13),h=a(3),O=a(41),_=a.n(O).a.create({baseURL:"https://ws.audioscrobbler.com/2.0/",params:{api_key:"78fafa6218217a14aaada8308dd63c3b",format:"json"}}),f={getTopTracks:function(){return _.get("",{params:{method:"chart.gettoptracks"}}).then((function(t){return t.data.tracks.track}))},getMoreTopTracks:function(t){return _.get("",{params:{method:"chart.gettoptracks",page:t}}).then((function(t){return t.data.tracks.track}))},getSearchTracks:function(t){return _.get("",{params:{method:"track.search",limit:50,track:t}}).then((function(t){return t.data.results.trackmatches.track}))},getMoreSearchTracks:function(t,e){return console.log("getMoreSearchTracks",t,e),_.get("",{params:{method:"track.search",limit:50,track:t,page:e}}).then((function(t){return t.data.results.trackmatches.track}))},getArtistInfo:function(t){return _.get("",{params:{method:"artist.getinfo",artist:t}}).then((function(t){return t.data}))}},m={artist:{},errorMessage:null,isLoading:!1},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"artistInfo/SET_ARTIST_INFO":return Object(h.a)(Object(h.a)({},t),{},{errorMessage:null,artist:e.payload});case"artistInfo/CHANGE_IS_LOADING":return Object(h.a)(Object(h.a)({},t),{},{isLoading:e.isLoading});case"artistInfo/SET_ERROR_MESSAGE":return Object(h.a)(Object(h.a)({},t),{},{artist:{},errorMessage:e.errorMessage});default:return t}},p=function(t){return{type:"artistInfo/CHANGE_IS_LOADING",isLoading:t}},x=a(14),T=a.n(x),k=function(){var t,e=Object(u.b)(),a=Object(u.c)((function(t){return t.artistPage.artist})),n=Object(u.c)((function(t){return t.artistPage.errorMessage})),s=Object(o.g)(),i=Object(o.h)();return Object(c.useEffect)((function(){var t;i.artistName&&e((t=i.artistName,function(){var e=Object(b.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(p(!0)),e.next=3,f.getArtistInfo(t);case 3:(r=e.sent).hasOwnProperty("artist")?a({type:"artistInfo/SET_ARTIST_INFO",payload:r.artist}):a({type:"artistInfo/SET_ERROR_MESSAGE",errorMessage:r.message}),a(p(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[i.artistName,s.location]),n?Object(r.jsxs)("div",{className:T.a.error,children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)(d.b,{to:"/",children:"To Main Page"})]}):Object(r.jsxs)("div",{className:T.a.ArtistPage,children:[Object(r.jsx)("div",{className:T.a.ArtistPage__name,children:a.name}),Object(r.jsxs)("div",{className:T.a.float,children:[a.image&&Object(r.jsx)("img",{src:a.image[3]["#text"],alt:""}),a.bio&&Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:(t=a.bio.content,t.replace(/User-contributed text is available under the Creative Commons By-SA License; additional terms may apply\./i,""))}})]}),a.tags&&a.tags.tag.length>0&&Object(r.jsxs)("div",{className:T.a.ArtistPage__tags,children:[Object(r.jsx)("div",{className:T.a.title,children:"TAGS:"}),a.tags.tag.map((function(t){return Object(r.jsx)("div",{className:T.a.name,children:t.name},t.name)}))]})]})},L=Object(c.memo)(k),v=a(20),S=a(30),A=a.n(S),E=a(18),y=a.n(E),N=function(){var t=Object(o.h)(),e=Object(u.c)((function(t){return t.searchTracksList.searchSubmit}));return Object(r.jsxs)("div",{className:y.a.Header,children:[Object(r.jsx)(d.b,{className:A()(y.a.Header__btn,Object(v.a)({},y.a.active,!t.hasOwnProperty("searchValue"))),to:"/",children:Object(r.jsx)("span",{children:"Popular Tracks"})}),Object(r.jsx)(d.b,{className:A()(y.a.Header__btn,Object(v.a)({},y.a.active,t.hasOwnProperty("searchValue"))),to:"/search/".concat(e),children:Object(r.jsx)("span",{children:"Search Tracks"})})]})},P=Object(c.memo)(N),C=a(17),w={searchSubmit:"",searchValue:"",tracks:[],nextPage:1,isLoading:!1},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"searchTracksList/SET_SEARCH_TRACKS":return Object(h.a)(Object(h.a)({},t),{},{tracks:e.payload,nextPage:e.payload.length>0?++t.nextPage:1,searchSubmit:e.searchSubmit});case"topTracksList/ADD_MORE_SEARCH_TRACKS":return Object(h.a)(Object(h.a)({},t),{},{tracks:[].concat(Object(C.a)(t.tracks),Object(C.a)(e.payload)),nextPage:e.payload.length>0?++t.nextPage:1});case"searchTracksList/CHANGE_IS_LOADING":return Object(h.a)(Object(h.a)({},t),{},{isLoading:e.isLoading});case"searchTracksList/SET_SEARCH":return Object(h.a)(Object(h.a)({},t),{},{searchValue:e.searchValue});default:return t}},H=function(t){return{type:"searchTracksList/CHANGE_IS_LOADING",isLoading:t}},R=function(t){return{type:"searchTracksList/SET_SEARCH",searchValue:t}},M=a(24),D=a.n(M),G=function(t){var e=t.img,a=t.name,c=t.artistName;return Object(r.jsxs)("div",{className:D.a.Card,children:[e&&Object(r.jsx)("img",{src:e,alt:""}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:D.a.Card__name,children:a}),Object(r.jsx)(d.b,{className:D.a.Card__artist,to:"/artist/".concat(c),children:c})]})]})},F=Object(c.memo)(G),V=a(21),K=a.n(V),B=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.searchTracksList.tracks})),a=Object(u.c)((function(t){return t.searchTracksList.nextPage})),n=Object(u.c)((function(t){return t.searchTracksList.isLoading})),s=Object(u.c)((function(t){return t.searchTracksList.searchValue})),i=Object(u.c)((function(t){return t.searchTracksList.searchSubmit})),d=Object(o.g)(),j=Object(o.h)();Object(c.useEffect)((function(){j.searchValue&&(t(R(j.searchValue)),t(function(t){return function(){var e=Object(b.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(H(!0)),e.next=3,f.getSearchTracks(t);case 3:r=e.sent,a({type:"searchTracksList/SET_SEARCH_TRACKS",payload:r,searchSubmit:t}),a(H(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(j.searchValue)))}),[d.location]),Object(c.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[a,n]);var h=Object(c.useCallback)((function(){window.pageYOffset>document.documentElement.scrollHeight-document.documentElement.clientHeight-50&&!n&&a>1&&t(function(t,e){return function(){var a=Object(b.a)(l.a.mark((function a(r){var c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(H(!0)),a.next=3,f.getMoreSearchTracks(t,e);case 3:c=a.sent,r({type:"topTracksList/ADD_MORE_SEARCH_TRACKS",payload:c}),r(H(!1));case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()}(i,a))}),[n,a,i]),O=Object(c.useCallback)((function(t){t.preventDefault(),s?d.push("/search/".concat(s)):d.push("/")}),[s]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:K.a.fixed,children:Object(r.jsxs)("form",{className:K.a.SearchForm,onSubmit:O,children:[Object(r.jsx)("input",{onChange:function(e){return t(R(e.target.value))},type:"text",value:s,placeholder:"Search tracks..."}),Object(r.jsx)("button",{type:"submit"})]})}),0===e.length&&Object(r.jsx)("div",{className:K.a.TracksNotFound,children:Object(r.jsx)("span",{children:"Tracks Not Found"})}),e.length>0&&Object(r.jsx)("div",{className:K.a.List,children:e.map((function(t,e){return Object(r.jsx)(F,{name:t.name,artistName:t.artist},e)}))})]})},Y=Object(c.memo)(B),J={tracks:[],nextPage:1,isLoading:!1},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"topTracksList/SET_TOP_TRACKS":return Object(h.a)(Object(h.a)({},t),{},{tracks:e.payload,nextPage:e.payload.length>0?++t.nextPage:1});case"topTracksList/ADD_MORE_TOP_TRACKS":return Object(h.a)(Object(h.a)({},t),{},{tracks:[].concat(Object(C.a)(t.tracks),Object(C.a)(e.payload)),nextPage:e.payload.length>0?++t.nextPage:1});case"topTracksList/CHANGE_IS_LOADING":return Object(h.a)(Object(h.a)({},t),{},{isLoading:e.isLoading});default:return t}},X=function(t){return{type:"topTracksList/CHANGE_IS_LOADING",isLoading:t}},q=a(42),z=a.n(q),Z=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.topTracksList.tracks})),a=Object(u.c)((function(t){return t.topTracksList.nextPage})),n=Object(u.c)((function(t){return t.topTracksList.isLoading}));Object(c.useEffect)((function(){0===e.length&&t(function(){var t=Object(b.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(X(!0)),t.next=3,f.getTopTracks();case 3:a=t.sent,e({type:"topTracksList/SET_TOP_TRACKS",payload:a}),e(X(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(c.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[a,n]);var s=Object(c.useCallback)((function(){var e;window.pageYOffset>document.documentElement.scrollHeight-document.documentElement.clientHeight-50&&!n&&a>1&&t((e=a,function(){var t=Object(b.a)(l.a.mark((function t(a){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(X(!0)),t.next=3,f.getMoreTopTracks(e);case 3:r=t.sent,a({type:"topTracksList/ADD_MORE_TOP_TRACKS",payload:r}),a(X(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[n,a]);return Object(r.jsx)("div",{className:z.a.List,children:e.map((function(t,e){return Object(r.jsx)(F,{img:t.image[1]["#text"],name:t.name,artistName:t.artist.name},e)}))})},W=Object(c.memo)(Z),Q=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P,{}),Object(r.jsx)(W,{})]}),$=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P,{}),Object(r.jsx)(Y,{})]}),tt=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(o.d,{children:[Object(r.jsx)(o.b,{exact:!0,path:"/",render:function(){return Q}}),Object(r.jsx)(o.b,{path:"/artist/:artistName",render:function(){return Object(r.jsx)(L,{})}}),Object(r.jsx)(o.b,{path:"/search/:searchValue?",render:function(){return $}}),Object(r.jsx)(o.b,{path:"*",render:function(){return Object(r.jsx)(o.a,{to:"/"})}})]})})},et=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(e){var a=e.getCLS,r=e.getFID,c=e.getFCP,n=e.getLCP,s=e.getTTFB;a(t),r(t),c(t),n(t),s(t)}))},at=a(15),rt=a(43),ct=Object(at.c)({topTracksList:U,searchTracksList:I,artistPage:g}),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||at.d,st=Object(at.e)(ct,nt(Object(at.a)(rt.a)));i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(d.a,{children:Object(r.jsx)(u.a,{store:st,children:Object(r.jsx)(tt,{})})})}),document.getElementById("root")),et()}},[[74,1,2]]]);
//# sourceMappingURL=main.ff5d6435.chunk.js.map