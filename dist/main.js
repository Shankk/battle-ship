(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(81),r=n.n(i),a=n(645),s=n.n(a)()(r());s.push([e.id,"* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'Orbitron', sans-serif;\n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n    height: 100vh;\n}\n\n.title {\n    font-size: 96px;\n    letter-spacing: 16px;\n    color: white;\n    text-shadow: -4px 4px #ff0000;\n    text-align: center;\n}\n\ninput {\n    all: unset;\n    min-width: 200px;\n    min-height: 30px;\n    width: 20vw;\n    height: 5vh;\n    background-color: cyan;\n    border-radius: 16px;\n    padding: 0px 24px;\n}\n\nh2 {\n    min-width: 200px;\n    text-align: center;\n    color: white;\n}\n\n#content {\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(0, 0, 66);\n    gap: 20px;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameStatus {\n    width: 100%;\n    height: 100px;\n    padding: 0px 10vw;\n    display: flex;\n    flex-flow: row;\n    justify-content: space-evenly;\n    align-items: center;\n    white-space: pre;\n}\n\n#gameContainer {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center;\n    gap: 60px;\n}\n\n.gameBoard {\n    width: 100%;\n    height: 100%;\n    padding: 0px 0px;\n    gap: 20px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    flex: 0;\n}\n\n.grid {\n    width: 620px;\n    height: 600px;\n    padding: 0px 0px;\n    gap: 2px;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center;\n}\n.column {\n    width: auto;\n    height: 600px;\n    gap: 2px;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n.row {\n    width: 60px;\n    background-color: transparent;\n    border-style: solid;\n    border-color: white;\n    border-width: 1px;\n    text-align: center;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n}\n\n.empty:hover {\n    background-color: green;\n}\n\n.hit:hover {\n    background-color: red;\n}\n\nbutton {\n    all: unset;\n    text-align: center;\n    min-width: 200px;\n    min-height: 70px;\n    font-size: 20px;\n    color: black;\n    background-color: cyan;\n    border-radius: 16px;\n}\n\nbutton:hover {\n    transform: scale(1.05);\n}\n\nbutton:active {\n    transform: scale(0.95);\n}\n\n\n@media (max-width: 600px) {\n\n    .title {\n        font-size: 48px;\n    }\n\n    h2 {\n        font-size: 0.75em;\n        min-width: 50px;\n    }\n\n    #gameStatus {\n        height: 2%;\n        padding: 0px 20px;\n        gap: 20px;\n        flex-flow: row;\n        white-space: normal;\n    }\n    \n    #gameContainer {\n        display: flex;\n        flex-flow: column nowrap;\n        justify-content: center;\n        align-items: center;\n        gap: 20px;\n    }\n\n    .grid {\n        width: 340px;\n        height: 320px;\n        padding: 0px 0px;\n        gap: 2px;\n    }\n    .column {\n        width: auto;\n        height: 320px;\n        gap: 2px;\n    }\n    \n    .row {\n        width: 32px;\n    }\n}\n\n@media (max-height: 600px) {\n\n    .title {\n        font-size: 48px;\n    }\n\n    h2 {\n        font-size: 0.75em;\n        min-width: 50px;\n    }\n\n    #gameStatus {\n        height: 2%;\n        padding: 0px 20px;\n        gap: 20px;\n        flex-flow: row;\n        white-space: normal;\n    }\n    \n    #gameContainer {\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: center;\n        align-items: center;\n        gap: 60px;\n    }\n\n    .grid {\n        width: 340px;\n        height: 320px;\n        padding: 0px 0px;\n        gap: 2px;\n    }\n    .column {\n        width: auto;\n        height: 320px;\n        gap: 2px;\n    }\n    \n    .row {\n        width: 32px;\n    }\n}",""]);const o=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(s[l]=!0)}for(var h=0;h<e.length;h++){var c=[].concat(e[h]);i&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},s=[],o=0;o<e.length;o++){var l=e[o],h=i.base?l[0]+i.base:l[0],c=a[h]||0,p="".concat(h," ").concat(c);a[h]=c+1;var d=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var m=r(u,i);i.byIndex=o,t.splice(o,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var o=n(a[s]);t[o].references--}for(var l=i(e,r),h=0;h<a.length;h++){var c=n(a[h]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),a=n(569),s=n.n(a),o=n(565),l=n.n(o),h=n(216),c=n.n(h),p=n(589),d=n.n(p),u=n(28),m={};m.styleTagTransform=d(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;class g{constructor(e,t){this.name=e,this.length=t,this.hitCount=0,this.isSunk=!1,this.shipLocations=[]}getName(){return this.name}getLocations(){return this.shipLocations}getLength(){return this.length}createShipLocations(e,t){if(Number(t)+this.length<=10){this.shipLocations=[];for(let n=0;n<this.length;n++)this.shipLocations.push(e+""+(Number(t)+n));return!0}return!1}takeHit(){this.hitCount++}isShipSunk(){return this.hitCount>=this.length&&(this.isSunk=!0),this.isSunk}}const f=n.p+"516179e328173cba458e.png",x=n.p+"8ba09e73d58f433c0f96.png";class w{constructor(e,t,n,i){this.size=e,this.player=n,this.opponent=i,this.gameStatus=t,this.attackHandler=e=>this.receiveAttack(e),this.placementHandler=e=>this.submitShipPlacement(e),this.togglePlacementHandler=e=>this.toggleShipPlacement(e),this.carrier=new g("Carrier",5),this.battleship=new g("Battle ship",4),this.cruiser=new g("Cruiser",3),this.submarine=new g("Submarine",3),this.destroyer=new g("Destroyer",2),this.placementShips=[this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer],this.ships=[this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer],this.gameboard=document.createElement("grid"),this.gameboard.className="grid",this.gameBoardObjects=[],this.gameBoardObjects.length||this.initBoardObjects(),this.opponentGameBoard=document.createElement("grid")}getBoard(){return this.gameboard}assignEnemyGameBoard(e){this.opponentGameBoard=e}initBoardObjects(){for(let e=0;e<10*this.size;e++)e<10?this.gameBoardObjects.push({id:"0"+e.toString(),hasShip:!1}):this.gameBoardObjects.push({id:e.toString(),hasShip:!1})}generatePlacementBoard(){this.gameboard.textContent="";for(let e=0;e<this.size;e++){let t=document.createElement("div");t.className="column";for(let n=0;n<this.size;n++){let i=document.createElement("div");i.className="row",i.id=n+""+e+this.player.getOwner(),i.addEventListener("mouseover",this.togglePlacementHandler),i.addEventListener("mouseout",this.togglePlacementHandler),i.addEventListener("click",this.placementHandler),t.appendChild(i)}this.gameboard.appendChild(t)}}generateGameBoard(){this.gameboard.textContent="";for(let e=0;e<this.size;e++){let t=document.createElement("div");t.className="column";for(let n=0;n<this.size;n++){let i=document.createElement("div");i.className="row",i.id=n+""+e+this.player.getOwner(),t.appendChild(i)}this.gameboard.appendChild(t)}}generateComputerBoard(){this.gameboard.textContent="";for(let e=0;e<this.size;e++){let t=document.createElement("div");t.className="column";for(let n=0;n<this.size;n++){let i=document.createElement("div");i.className="row empty",i.id=n+""+e+this.player.getOwner(),i.addEventListener("click",this.attackHandler),t.appendChild(i)}this.gameboard.appendChild(t)}}getXAxisShipObjects(e){if(null!=e&&this.placementShips.length>0){let t=e.id.slice(0,1),n=e.id.slice(1,2),i=[];for(let e=0;e<this.placementShips[0].length;e++){if(!(Number(n)+this.placementShips[0].length<=10))return null;i.push(document.getElementById(t+(Number(n)+e)+this.player.getOwner()))}return i}}toggleShipPlacement(e){let t=document.getElementById(e.target.id),n=this.getXAxisShipObjects(t);for(let e in n)"grey"==n[e].style.backgroundColor?n[e].style.backgroundColor="":""==n[e].style.backgroundColor&&(n[e].style.backgroundColor="grey")}submitShipPlacement(e){if(this.placementShips.length>0){let t=document.getElementById(e.target.id),n=t.id.slice(0,1),i=t.id.slice(1,2);if(Number(i)+this.placementShips[0].getLength()>10)return console.log("Cant Place Boat Here.");this.placementShips[0].createShipLocations(n,i);for(let e in this.placementShips[0].getLocations())if("green"==document.getElementById(this.placementShips[0].getLocations()[e]+this.player.getOwner()).style.backgroundColor)return console.log("Cant Place Boat Here.");this.placementShips.shift(),this.showShips(),null!=this.placementShips[0]?this.gameStatus.textContent=this.player.getName()+" Place Your "+this.placementShips[0].getName():(this.gameStatus.textContent="",this.generateGameBoard(),this.showShips(),this.forceThisBoardTurn())}}attackLocation(e){for(let t in this.ships)if(this.ships[t].isShipSunk());else for(let n in this.ships[t].getLocations())if(e==this.ships[t].getLocations()[n]){if(this.ships[t].takeHit(),this.ships[t].isShipSunk())for(let e in this.ships[t].getLocations()){let n=this.ships[t].getLocations()[e]+this.player.getOwner();null!=document.getElementById(n)&&(document.getElementById(n).style.backgroundColor="green")}return!0}return!1}createNewHitImage(e,t){const n=document.createElement("img");n.src=t?x:f,n.width=n.height=20,e.appendChild(n)}receiveAttack(e){let t=document.getElementById(e.target.id);if(null!=t){let n=e.target.id.slice(0,2);if(!1===this.opponent.getTurnStatus())return console.log("Cant Attack Your Board");{const e=this.attackLocation(n);this.createNewHitImage(t,e),t.className="row hit",this.forceThisBoardTurn(),1==this.isFleetDestroyed()?(console.log(this.player.getName()+" has lost all of their fleet!"),this.player.disableAttacks(),this.opponent.disableAttacks(),this.gameStatus.textContent=this.player.getName()+" has lost all of their Ships!\r\n"+this.opponent.getName()+" is the Winner!"):this.receiveComputerAttack(),t.removeEventListener("click",this.attackHandler)}}}receiveComputerAttack(){let e=this.randomIntFromInterval(0,this.gameBoardObjects.length-1),t=document.getElementById(this.gameBoardObjects[e].id+this.opponent.getOwner());if(null!=t){if(!0===this.opponent.getTurnStatus())return console.log("Cant Attack");{const n=this.opponentGameBoard.attackLocation(this.gameBoardObjects[e].id);this.createNewHitImage(t,n),this.gameBoardObjects.splice(e,1),this.forceThisBoardTurn(),1==this.opponentGameBoard.isFleetDestroyed()&&(this.player.disableAttacks(),this.opponent.disableAttacks(),this.gameStatus.textContent=this.opponent.getName()+" has lost all of their Ships!\r\n"+this.player.getName()+" is the Winner!")}}}isFleetDestroyed(){let e=0;for(let t in this.ships)this.ships[t].isShipSunk()&&e++;return e>=5}assignRandomShips(){for(let e in this.ships)for(;0==this.ships[e].shipLocations.length;){let t=this.randomIntFromInterval(0,9),n=this.randomIntFromInterval(0,9);if(n+this.ships[e].length<=10&&0==this.gameBoardObjects[Number(t.toString()+n.toString())].hasShip&&0==this.gameBoardObjects[Number(t.toString()+n.toString())+this.ships[e].length].hasShip){for(let i=0;i<this.ships[e].length;i++)this.gameBoardObjects[Number(t.toString()+n.toString())+i].hasShip=!0;this.ships[e].createShipLocations(t,n)}}}randomIntFromInterval(e,t){return Math.floor(Math.random()*(t-e+1)+e)}showShips(){for(let e in this.ships)for(let t in this.ships[e].getLocations()){let n=this.ships[e].getLocations()[t]+this.player.getOwner();null!=document.getElementById(n)&&(document.getElementById(n).style.backgroundColor="green")}}forceThisBoardTurn(){this.player.toggleTurn(),this.opponent.toggleTurn()}}class y{constructor(e,t){this.ownerShip=t,this.name=e,this.turnStatus=!1}getOwner(){return this.ownerShip}getName(){return this.name}setName(e){this.name=e}getTurnStatus(){return this.turnStatus}toggleTurn(){this.turnStatus=!this.turnStatus}disableAttacks(){this.turnStatus=!1}}const b=document.getElementById("content"),v=document.createElement("input");v.minLength=3,v.maxLength=20;const S=document.createElement("button");S.textContent="Start Game";const C=document.createElement("h2"),B=document.createElement("h2");C.id="playerOne",B.id="playerTwo";const E=document.createElement("h2");E.id="gameStatus";const k=document.createElement("div");k.id="gameContainer";const N=document.createElement("div");N.className="gameBoard",N.id="gameBoardOne";const L=document.createElement("div");L.className="gameBoard",L.id="gameBoardTwo";const O=new y("Player","p1"),j=new y("Computer","p2"),I=new w(10,E,O,j,N),T=new w(10,E,j,O,L);b.appendChild(v),b.appendChild(S),v.placeholder="Enter Your Name.",S.addEventListener("click",(()=>{v.value.length>=v.minLength&&(b.textContent="",O.setName(v.value),C.textContent=O.getName()+"'s Board",B.textContent=j.getName()+"'s Board",E.textContent=O.getName()+" Place Your Carrier!",b.appendChild(E),k.appendChild(N),I.generatePlacementBoard(),N.appendChild(C),N.appendChild(I.getBoard()),k.appendChild(L),T.generateComputerBoard(),L.appendChild(B),L.appendChild(T.getBoard()),T.assignRandomShips(),I.assignEnemyGameBoard(T),T.assignEnemyGameBoard(I),b.appendChild(k))}))})()})();