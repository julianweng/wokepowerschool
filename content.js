var elements = document.getElementsByTagName('*');
var stuff = [
    ["honors", "for smart people"], 
    ["powerschool", "pooperschool"],
    ["ap", "tryhard"],
    ["activities", "waste of time"],
    ["grades", "embarassments"],
    // etc..
];
var grades = [
    ["C+", "79.5"], 
    ["B-", "82.5"],
    ["B", "86.5"],
    ["B+", "89.5"],
    // etc..
];
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            for(var p = 0; p<stuff.length; p++){
                var text = node.nodeValue.toLowerCase();
                var replacedText = text.replace(stuff[p][0], stuff[p][1]);
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText.toUpperCase()), node);
                    var node = element.childNodes[j];
                }
            }
        }
    }
}
var poop = document.getElementsByTagName('tr');
for(var d = 0; d < poop.length; d++){
    // chrome.storage.sync.get(d.toString(),function(result){
    //     console.log("thing: "+result.key);
    // });
    if(localStorage.getItem(d.toString())==null){
        var bbbb= Math.random()*10+76.5;
        var p = d.toString();
        //chrome.storage.sync.set({[p]: bbbb},function(){});
        localStorage.setItem(p, bbbb);
    }
    var bruh = localStorage.getItem(d.toString())

    for(var wee = 0; wee<grades.length; wee++){

        if(bruh<parseFloat(grades[wee][1])){
            var gogo = grades[wee][0];
            wee=grades.length;
        }
    
    }
    var aa = poop[d].getElementsByTagName('a')
    for(var g = 0; g < aa.length; g++){
        var pp = aa[g];
        if(pp.href.includes("scores.html") && pp.innerHTML!="[ i ]"){
            var asdf = Math.round(bruh * 100) / 100;
            pp.innerHTML = "<b>"+ gogo+"<br>" +asdf;
        }
    }
}
