let selectionDOM;
let selectionText;
/*
 ** @params: modalBtn 选中松开弹出的元素
 ** @params: eleContainer 要选择文字的容器元素 这里指 iframe 框内的容器元素 默认为 section 标签
 */
function annoFun(modalBtn, eleContainer) {
    var eleTitle = document.getElementsByTagName("title")[0];
    eleContainer = eleContainer || document.getElementsByTagName('section')[0];
    var getSelectTxt = function() {
        var txt = "";
        if (document.selection) {
            selectionDOM = document.selection.createRange();
            txt = selectionDOM.text; // IE
        } else {
            selectionDOM = document.getSelection();
            txt = selectionDOM;
        }
        console.log('selectionDOM111111111111111', selectionDOM)
        console.log('22222', JSON.parse(JSON.stringify(selectionDOM)))
        selectionText = txt.toString();
        return selectionText;
    };
    eleContainer.onmouseup = function(e) {
        console.log('onmouseup')
        e = e || window.event;
        var txt = getSelectTxt(),
            sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log(txt);
        var left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40,
            top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
        if (txt) {
            modalBtn.style.display = "flex";
            modalBtn.style.left = left + "px";
            modalBtn.style.top = top + "px";
            modalBtn.style.backgroundColor = "#fff";
            modalBtn.style.border = "1px solid rgba(0,0,0,0.2)";
            modalBtn.style.borderRadius = "4px";
            modalBtn.style.boxShadow = "0px 2px 10px 0px rgba(0,0,0,0.25)";
        } else {
            modalBtn.style.display = "none";
        }
    };
    document.getElementById('annotation-btn').onclick = function() {
        var txt = selectionText;
        console.log(txt, '===')
        modalBtn.style.display = "none";
        var range = selectionDOM.getRangeAt(0);
        var span = document.createElement('span');
        span.style.textDecoration = 'blink';
        span.style.borderBottom = '2px dotted red';
        range.surroundContents(span);
        window.getSelection().empty(); // 取消文字的选中状态
        // document.getElementById("annotation-mask").style.display = "inline";
        document.getElementById("annotation-input").style.right = "10px";
    };

    document.getElementById('highlight-btn').onclick = function() {
        var range = selectionDOM.getRangeAt(0);
        var span = document.createElement('span');
        span.style.backgroundColor = '#fbfb41';
        range.surroundContents(span);
        modalBtn.style.display = "none";
        window.getSelection().empty(); // 取消文字的选中状态
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
document.getElementById('cancel').onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("annotation-mask").style.display = "none";
    document.getElementById("annotation-input").style.right = "-300px";
}


document.getElementById('confirm').onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    var range = selectionDOM.getRangeAt(0);
    var span = document.createElement('span');
    span.style.backgroundColor = 'pink';
    range.surroundContents(span);

    console.log('selectionText', selectionText)
    console.log('selectionDOM', selectionDOM)
    selectionDOM.innerHTML = `<span>1231</span>`;
    document.getElementById("annotation-mask").style.display = "none";
    document.getElementById("annotation-input").style.right = "-300px";

    // 获取输入框的内容
    let value = document.getElementsByTagName('textarea')[0].value;

    // 创建要插入的HTML 结构
    let divContainer = document.createElement('div');
    let quote = document.createElement('blockquote');
    let spanContent = document.createElement('span');
    divContainer.className = 'xue-item';
    quote.className = 'xue-annotation-quote';
    quote.innerHTML = selectionText; // 选中文字的内容
    spanContent.className = 'xue-anno-content';
    spanContent.innerHTML = value;

    divContainer.appendChild(quote);
    divContainer.appendChild(spanContent);
    console.log(divContainer)

    window.parent.document.getElementById('xue-anno-content').appendChild(divContainer);
    console.log(window.parent.document.getElementById('xue-anno-content'))

    document.getElementsByTagName('textarea')[0].value = '';



    // 埋点上报

    let data = {
        "actor": {
            "objectType": "Agent",
            "name": "Crystal",
            "mbox": "mailto:crystal@gmail.com"
        },
        "verb": {
            "id": "https://w3id.org/xapi/adb/verbs/highlighted",
            "display": {
                "zh-TW": "高亮"
            }
        },
        "object": {
            "objectType": "StatementRef",
            "id": "e5aca18b-f0c8-4664-8021-e1502f52d29c"
        },
        "result": {
            "response": value
        },
    }
    ajax('PUT', 'http://www.visualcatch.org/visca/TCAPI/statements?statementId=e5aca18b-f0c8-4664-8021-e1502f52d29c', data);
}

annoFun(document.getElementById("annotation"));