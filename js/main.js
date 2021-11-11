function spa( ...p )  {
         var      PAGE 
         var      PAGES = [ ] 
         for      ( var i=0 ; i<arguments.length ; i++ )  {
                  PAGES.push( arguments[ i ] ) }
         function page( hash , pages )  {
                  var      n = pages.length 
                  for      ( var i=0 ; i<n ; i++ )  {
                           var      h = '#' + pages[ i ].hash 
                           if       ( hash.startsWith(h) )  {
                                    return   pages[ i ] 
                                    break }}}
         function rooter(  )  {
                  var      h = document.location.hash 
                  if       ( h != '' )  {
                           PAGE = page( document.location.hash , PAGES ) 
                           PAGE.show(  ) }
                  else  {
                           if       ( PAGE != undefined )  {
                                    PAGE.hide(  ) }}}
         addEventListener( 'load' , rooter  ) 
         addEventListener( 'popstate' , rooter  ) }

/* import spa */  {
	/* */ }
import * as http from "./Mhttp.js" 
function link(inner ,outer)  {
	return "<a href='" +inner +"'>" +outer +"</a>" }
export function make_user(u)  {
	let n = USERS.querySelector(".user") .cloneNode(true) 
	populate(n ,u) 
	USERS .appendChild(n) }
export function populate(n ,u)  {
	n .dataset .id = u.id 
	n .querySelector(".username") .innerHTML = u.username 
	n .querySelector(".id") .innerHTML = u.id 
	n .querySelector(".name") .innerHTML = u.name 
	n .querySelector(".email") .innerHTML = link("mailto:" +u.email ,u.email) 
	n .querySelector(".address") .innerHTML =  u.address.street +", " + u.address.suite +", " + u.address.city +", " + u.address.zipcode +", " + link("https://www.google.com/maps/search/?api=1&query="  +u.address.geo.lng +"," +u.address.geo.lat ,u.address.geo.lng +"," +u.address.geo.lat) 
	n .querySelector(".phone") .innerHTML = link("tel:" +u.phone ,u.phone) 
	n .querySelector(".website") .innerHTML = link("http://" +u.website ,u.website) 
	n .querySelector(".company") .innerHTML = u.company.name 
	n .querySelector(".phrase") .innerHTML = u.company.catchPhrase 
	n .querySelector(".bs") .innerHTML = u.company.bs 
	return }
export async function get_users()  {
	let res = await http .get("https://jsonplaceholder.typicode.com/users") 
	let users = JSON .parse(res) 
	let n = users .length 
	let i = 0 
	function loop(i)  {
		if (i < n)  {
			make_user(users[i]) 
			loop(i+1) }}
	loop(0) }
window. get_posts = async function(e)  {
	Array.from(USERS .children) .map((x)=> x.style.backgroundColor = "#f5f5f5") 
	e .style .backgroundColor = "#ffc" 
	let id = e.dataset.id 
	if (location.hash.startsWith("#posts-"))  {
		history .replaceState(null ,"" ,"#posts-" +id) 
		await fill(id) 
		return }
	location.hash = "#posts-" +id 
	await fill(id) }
export async function fill(id)  {
	let res = await http .get("https://jsonplaceholder.typicode.com/users/" +id +"/posts") 
	let posts = JSON .parse(res) 
	let x = "" 
	for (let p of posts)  {
		x += "<h1>" +p.title +"</h1>" 
		x += "<p>" +p.body +"</p>" }
	POSTS .innerHTML = x }
export function rootes()  {
	let x =  {
		hash: "posts-", 
		hide: hide, 
		show: show, }
	function hide()  {
		POSTS.style.transform = "translateX(100vh)" }
	function show()  {
		POSTS.style.transform = "translateX(0)" }
	spa(x) }
async function upon_load()  {
	let h = location.hash 
	if (h.startsWith("#posts-"))  {
		let id = h .split("-")[1] 
		console.log(id) 
		let n = USERS .querySelectorAll("[data-id='" +id +"']")[0] 
		n .style .backgroundColor = "#ffc" 
		n .scrollIntoView() 
		await fill(id) }}
rootes() 
await get_users() 
await upon_load() 