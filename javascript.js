const bigScreen = document.querySelector('#lower-display')
const smallScreen = document.querySelector('#upper-display');

const clickNumber = document.querySelectorAll('.number');

clickNumber.forEach(el => el.addEventListener('click', event => {
    console.log(event.target.value);
    smallScreen.textContent = event.target.value;
}));

const clickOperator = document.querySelectorAll('.operator');

clickOperator.forEach(el => el.addEventListener('click', event => {
    console.log(event.target.value);
}));

const clickDecimal = document.querySelector('#decimal');

clickDecimal.addEventListener("click", function () {
    console.log('.');
});

const clickAdd = document.querySelector('#add');

clickAdd.addEventListener('click', function (a, b) {

})