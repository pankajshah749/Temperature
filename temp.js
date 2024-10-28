var celcius = document.querySelector('.degree');
var fahrenheit = document.querySelector('.heit');

    celcius.addEventListener('input',function(){
        let degree = this.value;
        let heit = degree * (9/5)+32;
        fahrenheit.value = heit;
    });

    fahrenheit.addEventListener('input',function(){
        let heit = this.value;
        let degree = (heit-32)* 5/9;
        celcius.value = degree;
    });