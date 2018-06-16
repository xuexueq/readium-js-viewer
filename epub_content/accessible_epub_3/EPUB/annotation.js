console.log(1234321);
let selectionDOM;
let selectionText;
function sinaMiniBlogShare(eleShare, eleContainer) {
	var eleTitle = document.getElementsByTagName("title")[0];
	eleContainer = eleContainer || document.getElementsByTagName('section')[0];
	var funGetSelectTxt = function() {
		var txt = "";
		if(document.selection) {
			selectionDOM = document.selection.createRange();
			txt = selectionDOM.text;    // IE
		} else {
			selectionDOM = document.getSelection();
			txt = selectionDOM;
		}
		console.log('selectionDOM111111111111111',selectionDOM)
		console.log('22222',JSON.parse(JSON.stringify(selectionDOM)))
		selectionText = txt.toString();
		return selectionText;
	};
	eleContainer.onmouseup = function(e) {
		console.log('onmouseup')
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
	document.getElementById('annotation-btn').onclick = function() {
		var txt = selectionText;
		console.log(txt,'===')
		eleShare.style.display = "none";
		document.getElementById("annotation-mask").style.display = "inline";
		document.getElementById("annotation-input").style.right = "10px";
	};

	document.getElementById('highlight-btn').onclick = function() {
		var range = selectionDOM.getRangeAt(0);
		var span = document.createElement('span');
		span.style.backgroundColor = '#fbfb41';
		range.surroundContents(span);
		eleShare.style.display = "none";
	}
}

document.getElementById('cancel').onmouseup = function(e) {
	e.preventDefault();
	e.stopPropagation();
}
document.getElementById('confirm').onmouseup = function(e) {
	e.preventDefault();
	e.stopPropagation();
}
document.getElementById('cancel').onclick = function (e) {
	e.preventDefault();
	e.stopPropagation();
	document.getElementById("annotation-mask").style.display = "none";
	document.getElementById("annotation-input").style.right = "-300px";
}


document.getElementById('confirm').onclick = function (e) {
	e.preventDefault();
	e.stopPropagation();
	var range = selectionDOM.getRangeAt(0);
	var span = document.createElement('span');
	span.style.backgroundColor = 'pink';
	range.surroundContents(span);

	console.log('selectionText',selectionText)
	console.log('selectionDOM',selectionDOM)
	selectionDOM.innerHTML=`<span>1231</span>`;
	document.getElementById("annotation-mask").style.display = "none";
	document.getElementById("annotation-input").style.right = "-300px";
}

sinaMiniBlogShare(document.getElementById("annotation"));
