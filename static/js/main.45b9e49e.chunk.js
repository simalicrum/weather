(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),i=(n(15),n(1)),o=n.n(i),u=n(3),l=n(6),h=n(7),p=n(2),d=n(9),m=n(8),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={locationinput:"",temp:"",city:"",weather:"",windspeed:"",visibility:"",img:null},e.handleInputChange=e.handleInputChange.bind(Object(p.a)(e)),e.setWeather=e.setWeather.bind(Object(p.a)(e)),e}return Object(h.a)(n,[{key:"handleInputChange",value:function(e){this.setState({locationinput:e.target.value})}},{key:"getWeather",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=3fbef125c81848d523698fd4bd8c186d"),{mode:"cors"});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log("Oops!",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getBackground",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.unsplash.com/photos/random/?client_id=cxPTNiUBObF35f898L8R9lA27z9qQ08bHXbzE4V-lus&query=".concat(t),{mode:"cors"});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log("Oops!",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setWeather",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,this.getWeather(this.state.locationinput);case 4:if("404"!==(n=e.sent).cod||"city not found"!==n.message){e.next=10;break}alert("City not Found"),document.getElementById("location-form").reset(),e.next=18;break;case 10:return e.next=12,this.getBackground(n.weather[0].main);case 12:a=e.sent,r=Math.round(n.main.temp-273.15),this.setState({temp:r,city:n.name,weather:n.weather[0].main,windspeed:n.wind.speed,visibility:n.visibility,img:a}),document.getElementById("location-form").reset(),document.getElementById("weather-results").setAttribute("class","shown"),document.body.style.backgroundImage="url('".concat(this.state.img.urls.regular,"'");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.log("Oops!",e.t0);case 23:case"end":return e.stop()}}),e,this,[[1,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{id:"weather-card"},r.a.createElement("h1",null,"Weatherthing"),r.a.createElement("form",{id:"location-form",onSubmit:this.setWeather},r.a.createElement("label",{htmlFor:"location"},"Location: "),r.a.createElement("input",{type:"text",id:"location",name:"location",onChange:this.handleInputChange}),r.a.createElement("input",{type:"submit"})),r.a.createElement("div",{id:"weather-results",className:"hidden"},r.a.createElement("h2",null,"Current conditions for ",this.state.city,":"),r.a.createElement("h2",null,this.state.weather),r.a.createElement("h3",null,"Temperature: ",this.state.temp,"\u2103"),r.a.createElement("h3",null,"Wind Speed: ",this.state.windspeed," kph")))}}]),n}(a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.45b9e49e.chunk.js.map