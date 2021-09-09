function resultFunc() {
	var rollNo = document.getElementById("rollNo").value;

	var data = {
		"ms21a058": "25",
		"ms21a051": "17.5",
		"ms21a021": "21.5",
		"ms21a033": "20",
		"ms21a029": "8.5",
	}

	if (rollNo == null) {
		document.getElementById("result").innerHTML = "Invalid value entered"
	}

	if (data.hasOwnProperty(rollNo.toLowerCase())) {
		document.getElementById("result").innerHTML = "Your Marks:" + data[rollNo.toLowerCase()]
	} 
	else {
		document.getElementById("result").innerHTML = "Invalid value entered"
	}
}
