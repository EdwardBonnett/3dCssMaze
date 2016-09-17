function setup(radio){
     Array.prototype.forEach.call(labels, function(label) {
       label.accessKey = '';
    });

    var d = radio.className;
    var c = d.split(' ')[0].replace('r', 'd');
    var compass = document.getElementById(c);
    for (var i = 0; i < compass.childNodes.length; i++)
        compass.childNodes[i].accessKey = compass.childNodes[i].className.replace('e', 'x');
    if (radio.classList.contains('y'))
        document.getElementById('yLabel').accessKey = 'o';
    if (radio.classList.contains('r'))
        document.getElementById('rLabel').accessKey = 'o';
    if (radio.classList.contains('b'))
        document.getElementById('bLabel').accessKey = 'o';
}



var radios = document.querySelectorAll('input[name="rooms"]');
var labels = document.querySelectorAll('label');
function changeHandler(event) {
    setup(this);
}

Array.prototype.forEach.call(radios, function(radio) {
   radio.addEventListener('change', changeHandler);
});

(function start(){
    setup(document.querySelector('input[name = "rooms"]:checked'));
})();
