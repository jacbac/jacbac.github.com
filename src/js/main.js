// resize intro section and adapt to window height
var l = document.getElementById('intro');
l.style.height = window.innerHeight + 'px';

window.onload = function () {
    texttype('hello', 'Hello World !', 200, 50);
    setTimeout(function() {
        texttype('prompt', '> ', 0, 0);
    }, 4500);
    setTimeout(function() {
        texttype('welcome', 'Welcome ! Bienvenue !', 100, 400);
    }, 6500);
    setTimeout(function() {
        texttype('prompt-2', '> ', 0, 0);
    }, 11000);
    setTimeout(function() {
        texttype('prompt-3', '> ', 0, 0);
    }, 13000);
    setTimeout(function() {
        texttype('project', 'Some of my projects', 100, 200);
    }, 15000);
    setTimeout(function() {
        document.getElementById('list').style.opacity = 1;
    }, 18000);
}

/**
 * Textype JS courtesy of Augiegardner => http://augiegardner.wordpress.com/
 */
function texttype(targetDiv, text, intervalStart, intervalRange, callback) {
    var textTyperID = ++window.textTyperID;
    window.textTyper[textTyperID] = new function() {
        var textFinished = false;
        this.init = function() {
            var innerString="";
            for (var i = 0; i < text.length; i++) {
                innerString+="<span style='display:none;'>"+text[i]+"</span>"
            }
            var pipe = document.createElement('span');
            pipe.setAttribute('id', "pipe"+textTyperID);
            pipe.textContent = '|';
            pipe.style.marginLeft = '1px';
            document.getElementById(targetDiv).innerHTML = innerString;
            document.getElementById(targetDiv).appendChild(pipe);
            window.textTyper[textTyperID].type(0);
            window.textTyper[textTyperID].animatePipe(true);
        }
        this.type = function(i) {
            var target = document.getElementById(targetDiv).childNodes;
            if(i<text.length){
                var to = intervalStart-(intervalRange/2);
                var from = intervalStart+(intervalRange/2);
                var interval = Math.floor(Math.random()*(to-from+1)+from);
                target[i].style.display = 'inline';
                setTimeout(function(){
                    window.textTyper[textTyperID].type(++i);
                    document.getElementById("pipe"+textTyperID).style.visibility = '';
                },interval);
            }
            else{
                setTimeout(function(){
                    textFinished=true;
                }, 1500);
                if (callback)
                    callback();
            }
        }
        this.animatePipe = function(visible, timer) {
            if (!visible)
                document.getElementById("pipe"+textTyperID).style.visibility = 'hidden';
            else
                document.getElementById("pipe"+textTyperID).style.visibility = '';

            if (!textFinished) {
                setTimeout(function() {
                    window.textTyper[textTyperID].animatePipe(!visible);
                },500);
            }
            else
                document.getElementById("pipe"+textTyperID).style.visibility = 'hidden';
        }
    };
    window.textTyper[textTyperID].init();
}
(function () { /*Function to prep variables on page load */
    window.textTyperID = 0;
    window.textTyper = new Array();
}
)();
