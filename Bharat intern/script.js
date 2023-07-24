var cel=document.getElementById("celcius");
var far=document.getElementById("farenhite");

cel.addEventListener('input',function(){
    let c=this.value;
    let output=(c*9/5)+32;
    far.value=output;
});

far.addEventListener('input',function(){
    let f=this.value;
    let output=(f-32)*5/9;
    cel.value=output;
});