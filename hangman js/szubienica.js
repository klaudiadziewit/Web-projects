var keyword = "Regular Expression";
keyword=keyword.toUpperCase();
var keywordLength = keyword.length;
var keyword1 = "";
var wrongMoves=0;

for(i=0; i<keywordLength; i++){
    if (keyword.charAt(i) == " ") keyword1 = keyword1 + " ";
    else keyword1 = keyword1 + "-";
}

function writeKeyword(){
    document.getElementById("board").innerHTML = keyword1;
}

window.onload = start;

var lettersArray=new Array(35);
for (i=0; i<26; i++){
    lettersArray[i]=String.fromCharCode(65+i);
}

function start(){
    var divContent = "";
    for (i=0; i<26; i++){
        var div
        divId="div"+i;
        divContent = divContent + '<div class="letter" onclick="check('+i+')" id="'+divId+'">'+lettersArray[i]+'</div>';
        if((i+1)%7==0) divContent = divContent + '<div style="clear:both;"></div>';
    }
    document.getElementById("alphabet").innerHTML = divContent;
    writeKeyword();
}

String.prototype.setChar = function(place, charac){
    if(place>this.length-1) {
        return this.toString();
    }
    else{
        return this.substr(0,place) + charac+ this.substr(place+1);
    }
}

function check(num){
    var present = false;
    for(i=0; i<keywordLength; i++){
        if(keyword.charAt(i)==lettersArray[num]){  
            keyword1=keyword1.setChar(i,lettersArray[num]);
            present=true;
        }
    }

    var element = "div"+num;
   
    if(present==true){
        document.getElementById(element).style.background="#003330";
        document.getElementById(element).style.border = "3px solid #003300";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.color = "darkgrey";
        writeKeyword();
    }
    else{
        document.getElementById(element).style.background="#B22222"
        document.getElementById(element).style.border="3px solid #B21222"
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.color = "darkgrey";
        document.getElementById(element).setAttribute("onclick","")
        wrongMoves++;
        if(wrongMoves<9){
            var pic = "img/s"+wrongMoves+".jpg";
            document.getElementById("hangman").innerHTML='<img src="'+pic+'"alt=""/>';
        }
        else{
            document.getElementById("hangman").innerHTML='<img src="img/s9.jpg" alt=""/>';
            document.getElementById("alphabet").innerHTML = "GAME OVER"+'<br/><br/><span class="reset" onclick="location.reload()">Want another game?</span>';
            document.getElementById("alphabet").style.cursor = "pointer";
            document.getElementById("alphabet").style.color = "darkgrey";
            document.getElementById("alphabet").style.fontSize = "40px";
        }
    }
    if(keyword==keyword1){
        document.getElementById("alphabet").innerHTML = "YOU WIN!"+'<br/><br/><span class="reset" onclick="location.reload()">Want another game?</span>';
        document.getElementById("alphabet").style.cursor = "pointer";
        document.getElementById("alphabet").style.color = "yellowgreen";
        document.getElementById("alphabet").style.fontSize = "40px";
    }
}


