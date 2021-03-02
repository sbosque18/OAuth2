console.log("Hello");
async function checkLoggedIn(){
	let response = await fetch('/user');
	if (response.ok){
		let userInfo = await response.json();
		document.getElementById("user").innerHTML = userInfo.name;
		document.getElementById("unauthenticated").style.display = "none";
		document.getElementById("authenticated").style.display = "block";
	}
	else{
		document.getElementById("unauthenticated").style.display = "block";
		document.getElementById("authenticated").style.display = "none";
	}
}

checkLoggedIn();