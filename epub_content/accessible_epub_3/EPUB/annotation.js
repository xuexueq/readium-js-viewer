console.log(1234321);
function sinaMiniBlogShare(eleShare, eleContainer) {
	var eleTitle = document.getElementsByTagName("title")[0];
	eleContainer = eleContainer || document;
	var funGetSelectTxt = function() {
		var txt = "";
		if(document.selection) {
			txt = document.selection.createRange().text;    // IE
		} else {
			txt = document.getSelection();
		}
		return txt.toString();
	};
	eleContainer.onmouseup = function(e) {
		e = e || window.event;
		var txt = funGetSelectTxt(), sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		var left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40, top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
		if (txt) {
			eleShare.style.display = "flex";
			eleShare.style.left = left + "px";
			eleShare.style.top = top + "px";
			eleShare.style.backgroundColor = "#fff";
			eleShare.style.border = "1px solid rgba(0,0,0,0.2)";
			eleShare.style.borderRadius = "4px";
			eleShare.style.boxShadow = "0px 2px 10px 0px rgba(0,0,0,0.25)";
		} else {
			eleShare.style.display = "none";
		}
	};
	eleShare.onclick = function() {
		var txt = funGetSelectTxt();
		console.log(txt,'===')
		eleShare.style.display = "none";
		document.getElementById("annotation-mask").style.display = "inline";
		document.getElementById("annotation-input").style.right = "10px";
	};
}

document.getElementById('cancel').onclick = function () {
	document.getElementById("annotation-mask").style.display = "none";
	document.getElementById("annotation-input").style.right = "-300px";
}

document.getElementById('confirm').onclick = function () {
	document.getElementById("annotation-mask").style.display = "none";
	document.getElementById("annotation-input").style.right = "-300px";
}

sinaMiniBlogShare(document.getElementById("annotation"));
