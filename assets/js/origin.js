function isShowButton(index) {
	// alert(index);
	const chi = document.getElementById("moveButtons").children;
	if (index <= 0) {
		chi[0].style.visibility = "hidden";
		chi[1].style.visibility = "visible";
	} else if (index >= 4) {
		chi[0].style.visibility = "visible";
		chi[1].style.visibility = "hidden";
	} else {
		chi[0].style.visibility = "visible";
		chi[1].style.visibility = "visible";
	}
}