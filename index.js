count=1;
document.querySelector('.slider1 button').addEventListener("click",function () {
    if(count<=1){
        count=1;
    }
    else{
    count--;
    }
    document.querySelector('.imag img').src=count.toString()+".jpeg";
});
document.querySelector('.slider2 button').addEventListener("click",function () {
    if(count>=3){
        count=1;
    }
    else{
    count++;
    }
    document.querySelector('.imag img').src=count.toString()+".jpeg";
});