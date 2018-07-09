    //     function getElementsByClass(classnames){
    //       var classobj = new Array();
    //       var classint = 0;
    //       var tags =document.getElementsByTagName("*");
    //       for(var i in tags){
    //        if(tags[i].nodeType == 1){
    //          if(tags[i].getAttribute("class") == classnames){
    //            classobj[classint] = tags[i];
    //             classint++;
    //           }
    //         }
    //       }
    //       return classobj;
    //     }

    //     var eleDustbin = document.getElementById('dustbin'),
    //         eleDrags = getElementsByClass("draglist"), lDrags = eleDrags.length, 
    //         eleRemind = getElementsByClass("dragremind")[0], eleDrag = null;

    //     console.log('\n\neleDrags',eleDrags)
    // for (var i=0; i<lDrags; i+=1) {
    //      console.log('eleDrags[i]',eleDrags[i])
    //      eleDrags[i].onselectstart = function() {
    //          console.log('onselectstart')
    //          return false;
    //      };
    //      eleDrags[i].ondragstart = function(ev) {
    //          console.log('ondragstart',ev)
    //          ev.dataTransfer.effectAllowed = "move";
    //          ev.dataTransfer.setData("text", ev.target.innerHTML);
    //          ev.dataTransfer.setDragImage(ev.target, 0, 0);
    //          eleDrag = ev.target;
    //          return true;
    //      };
    //      eleDrags[i].ondragend = function(ev) {
    //          console.log('ondragend',ev)
    //          ev.dataTransfer.clearData("text");
    //          eleDrag = null;
    //          return false
    //      };
    // }
    // eleDustbin.ondragover = function(ev) {
    //  ev.preventDefault();
    //  return true;
    // };

    // eleDustbin.ondragenter = function(ev) {
    //     console.log('this',)
    //  this.style.color = "#ffffff";
    //  return true;
    // };
    // eleDustbin.ondrop = function(ev) {
    //  if (eleDrag) {
    //      eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
    //      eleDrag.parentNode.removeChild(eleDrag);
    //  }
    //  this.style.color = "#000000";
    //  return false;
    // };
