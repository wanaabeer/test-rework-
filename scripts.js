let checktest = document.getElementById("test");
checktest.addEventListener("click", check);
function check(){
    let result = 0;

    let a1 = document.getElementById('q1').value;
    if (a1 === "3" ){
        result++;
    }

    let a2 = document.getElementById('q2').value;
    if (a2 === "3") {
        result++;
    }

    let a3 = document.getElementById('q3').value;
    if (a3 === "1"){
        result++;
    }

    if (result == 3){
        alert('Вы прямой угол, вы очеень крутой, я уже вас люблю');
    }
    else if (result == 2){
        alert("вы острый угол, вы конечно не очень крутой, но норм такой типок");
    }
    else{
        alert('вы тупой угол, просто дебил!!!');
    }
}
