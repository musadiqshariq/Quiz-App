function validate(){
    var input = document.getElementById("inp")
    var cond = false
    if(input.value != ""){
        cond = true
    }
    if(cond){
        window.location.replace("quiz/quiz.html")
    }
}