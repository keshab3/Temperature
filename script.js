let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

// first cel
cel.addEventListener('input',function(){
    let c = this.value
    let f = (c * 9/5) + 32;
    
    fah.value = f ;
});

// second fah
fah.addEventListener('input',function(){
    let f = this.value
    let c = (f - 32) * 5/9

    cel.value = c;

});



function reset(){
    fah.value = 32;
    cel.value = 0;
}