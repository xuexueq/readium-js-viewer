setTimeout(()=> {
    let body = window.parent.document.body;
                let xueModal = window.parent.document.getElementsByClassName('xue-modal')[0];
                if(xueModal) {
                    body.removeChild(xueModal);
                } else {
                    xueModal = window.parent.document.createElement('div');
                    xueModal.className = 'xue-modal';
                }

                xueModal.innerHTML = '✔️行为成功被记录！！！';
                body.appendChild(xueModal);
}, 5010) 

function ajax(method, url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("X-Experience-API-Version", "1.0.1");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Basic " + btoa("37452F6BECFF6C62C1F8:8E8F751B81056CD94163"));
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function() {
        var DONE = 4; // readyState 4 代表已向服务器发送请求
        var OK = 200; // status 200 代表服务器返回成功
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText); // 这是返回的文本

                // 消息通知成功
                let body = window.parent.document.body;
                let xueModal = window.parent.document.getElementsByClassName('xue-modal')[0];
                if(xueModal) {
                    body.removeChild(xueModal);
                } else {
                    xueModal = window.parent.document.createElement('div');
                    xueModal.className = 'xue-modal';
                }

                xueModal.innerHTML = '✔️' + data.verb.display.zh-TW + '行为成功被记录！！！';
                body.appendChild(xueModal);
            } else {
                console.log("Error: " + xhr.status); // 在此次请求中发生的错误

                let body = window.parent.document.body;
                let xueModal = window.parent.document.getElementsByClassName('xue-modal')[0];
                if(xueModal) {
                    body.removeChild(xueModal);
                } else {
                    xueModal = window.parent.document.createElement('div');
                    xueModal.className = 'xue-modal';
                }
                xueModal.backgroundColor = 'red';
                xueModal.innerHTML = '❌' + data.verb.display.zh-TW + '行为未记录！！！';
                body.appendChild(xueModal);
            }
        }
    }
}

function hasClass(obj, cls) {  
    return !!obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
   
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) {  
        obj.className += " " + cls;  
    }  
}  
   
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
   
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    } else {  
        addClass(obj, cls);  
    }  
} 

// 使用方式
// let data = {
//     "verb": {
//         "id": "http://adlnet.gov/expapi/verbs/voided",
//         "display": {
//             "en-US": "voided"
//         }
//     },
//     "timestamp": new Date(),
//     "actor": {
//         "objectType": "Agent",
//         "name": "xueqiaoling",
//         "mbox": "mailto:admin@example.adlnet.gov"
//     },
//     "object": {
//         "objectType":"StatementRef",
//         "id": loadedDocumentUri
//     }
// }
// ajax('PUT', 'http://www.visualcatch.org/visca/TCAPI/statements?statementId=e5aca18b-f0c8-4664-8021-e1502f52d29c', data);