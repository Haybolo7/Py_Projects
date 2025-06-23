function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    const display = document.getElementById('display');
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression: display.value })
    })
    .then(response => response.json())
    .then(data => {
        display.value = data.result;
    })
    .catch(error => {
        display.value = 'Error';
    }); 
}
function factorial(){
    var i,f=1;
    const n = document.getElementById("num").value;
    for(i=1;i<=n;i++) f*=i;
    document.getElementById("fact").innerHTML=f;
}