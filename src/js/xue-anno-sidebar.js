let $sidebar = document.getElementsByClassName('label-side')[0];
let $annoSidebar = document.getElementsByClassName('anno-sidebar')[0];
console.log(hasClass($annoSidebar,'xue-hide'));
$sidebar.onclick = function () {
    console.log('clickkkkkkkkk')
    if(hasClass($annoSidebar,'xue-hide')) {
        removeClass($annoSidebar, 'xue-hide');
    } else {
        addClass($annoSidebar, 'xue-hide');
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