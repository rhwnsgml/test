
function clickBtn1(){
    document.getElementById('h1').innerText = "1click";
}

function clickBtn2(){
   // document.getElementsByTagName('button')[0].innerText = "1";
    var test = document.getElementsByName('btn');
    var cnt = 1;
    test.forEach(element => {
        element.innerText= cnt++;
    });
}


function clickBtn3(){
    document.getElementById('td1').innerText = "3click";
}