export async function get(url)  {
	//str -> Promise<str> 
	var p = new Promise(function(ok ,er)  {
		var r = new XMLHttpRequest() 
		r .open("GET" ,url ,true) 
		r .send(null) 
		r .onreadystatechange = function (  )  {
			if ( r.readyState == 4 )  {
				if ( r.status == 200 )  {
					ok(r.responseText) }
				else  {
					er( r.status ) }}}}
	) 
	return p }
export async function del(url)  {
	//str -> Promise<str> 
	var p = new Promise(function(ok ,er)  {
		var r = new XMLHttpRequest() 
		r .open("DELETE" ,url ,true) 
		r .send(null) 
		r .onreadystatechange = function (  )  {
			if ( r.readyState == 4 )  {
				if ( r.status == 200 )  {
					ok(r.responseText) }
				else  {
					er( r.status ) }}}}
	) 
	return p }
//'delete' is javascript reserved word 
export async function post(x ,url)  {
	//str ,str -> Promise<str> 
	var p = new Promise(function(ok ,er)  {
		var r = new XMLHttpRequest() 
		r .open("POST" ,url ,true) 
		r .setRequestHeader("Content-Type", "application/json") 
		r .send(x) 
		r .onreadystatechange = function (  )  {
			if ( r.readyState == 4 )  {
				if ( r.status == 200 )  {
					ok(r.responseText) }
				else  {
					er( r.status ) }}}}
	) 
	return p }
// x-www-form-urlencoded 
export async function put(x ,url)  {
	//str ,str -> Promise<str> 
	var p = new Promise(function(ok ,er)  {
		var r = new XMLHttpRequest() 
		r .open("PUT" ,url ,true) 
		r .setRequestHeader("Content-Type", "application/json") 
		r .send(x) 
		r .onreadystatechange = function (  )  {
			if ( r.readyState == 4 )  {
				if ( r.status == 200 )  {
					ok(r.responseText) }
				else  {
					er( r.status ) }}}}
	) 
	return p }
export async function patch(x ,url)  {
	//str ,str -> Promise<str> 
	var p = new Promise(function(ok ,er)  {
		var r = new XMLHttpRequest() 
		r .open("PATCH" ,url ,true) 
		r .setRequestHeader("Content-Type", "application/json") 
		r .send(x) 
		r .onreadystatechange = function (  )  {
			if ( r.readyState == 4 )  {
				if ( r.status == 200 )  {
					ok(r.responseText) }
				else  {
					er( r.status ) }}}}
	) 
	return p }
export function query()  {
	let x = location.search.substr() 
	if (x.charAt(0) != "?")  {
		return false }
	else  {
		x = x.substr(1) 
		let xs = x.split("&") 
		let o = {} 
		let n = xs.length 
		for (var i=0 ; i<n ; i++)  {
			let ys = xs[i].split("=") 
			let key = ys[0] 
			ys.shift() 
			let val = ys.join("=") 
			o[key] = val }
		return o }}
//Get query paramsi.e. query().keyDynamic object creation using brackets o[] 
export function query_string()  {
	return location.search.substr() }
// URIs 
export function uri_seg(n)  {
	let xs = document.URL .split("//") 
	xs .shift() 
	xs = xs[0] .split("/") 
	xs .pop() 
	if (n < 0)  {
		xs .reverse() }
	return xs[Math.abs(n) -1] }
//get nth uri segment.counting is not zero based.uri_seg(1) ->1st segment from start.uri_seg(-1) ->1st segment from end. 
export function uri_segs()  {
	let xs = document.URL .split("//") 
	xs .shift() 
	xs = xs[0] .split("/") 
	xs .pop() 
	return xs }
export function naked_url()  {
	let xs = document.URL .split("//") 
	xs .shift() 
	xs = xs[0] .split("/") 
	xs .shift() 
	return "/" +(xs .join("/")) }
export function uri(...xs)  {
	let ys = [] 
	for (var i=0 ; i<arguments.length ; i++)  {
		ys .push(arguments[i]) }
	return "/" +ys.join("/") +"/" }