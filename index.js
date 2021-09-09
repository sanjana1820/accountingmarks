function resultFunc() {
	var rollNo = document.getElementById("rollNo").value;
	console.log(rollNo)

	var data = {
		"MS21A058": "25",
		"MS21A051": "17.5",
		"MS21A021": "21.5",
		"MS21A033": "20",
		"MS21A029": "8.5",
	}

	var query = "MS21A058";

	if (data.hasOwnProperty(rollNo)) {
		document.getElementById("result").innerHTML = "Your Marks:" + data[rollNo]
		console.log(data[rollNo])
	}
}


