questionsArray = [
    {
        question: "Why so JavaScript and Java have similar name?",
        answer: "JavaScript's syntax is loosely based on Java's",
        options: [
            "JavaScript is a stripped-down version of Java",
            "JavaScript's syntax is loosely based on Java's",
            "They both originated on the island of Java",
            "None of the above",
        ]
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answer: "The User's machine running a Web browser",
        options: [
            "The User's machine running a Web browser",
            "The Web server",
            "A central machine deep within Netscape's corporate offices",
            "None of the above",
        ]
    },
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        answer: "Navigator",
        options: [
            "Microsoft",
            "Navigator",
            "LiveWire",
            "Native",
        ]
    },
    {
        question: "__________ JavaScript is also called server-side JavaScript.",
        answer: "LiveWire",
        options: [
            "Microsoft",
            "Navigator",
            "LiveWire",
            "Native",
        ]
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answer: "Storing numbers, dates, or other values",
        options: [
            "Storing numbers, dates, or other values",
            "Varying randomly",
            "Causing high-school algebra flashbacks",
            "None of the above",
        ]
    },
    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        answer: "Client-side",
        options: [
            "Client-side",
            "Server-side",
            "Local",
            "Native",
        ]
    },
    {
        question: "Which of the following can't be done with client-side JavaScript?",
        answer: "Storing the form's contents to a database file on the server",
        options: [
            "Validating a form",
            "Sending a form's contents by email",
            "Storing the form's contents to a database file on the server",
            "None of the above",
        ]
    },
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answer: "Accept parameters",
        options: [
            "Return a value",
            "Accept parameters and Return a value",
            "Accept parameters",
            "None of the above",
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answer: "2names",
        options: [
            "2names",
            "_first_and_last_names",
            "FirstAndLast",
            "None of the above",
        ]
    },
    {
        question: "Which of the following attribute can hold the JavaScript version?",
        answer: "LANGUAGE",
        options: [
            "LANGUAGE",
            "SCRIPT",
            "VERSION",
            "None of the above",
        ]
    }
]



function show_question(e){
    var question = document.getElementById("question")
    question.innerHTML = "Q" + (e+1) + ") " + questionsArray[e].question
    var opts = document.getElementsByClassName("opt")
    for(var i = 0; i < opts.length; i++){
        opts[i].innerHTML = questionsArray[e].options[i]
    }
    var optns = document.getElementsByName("opt")
    for(var i = 0; i < optns.length; i++){
        optns[i].value = questionsArray[e].options[i]
    }
}

var count = 0
var score = 0

function calc(){
    var opts = document.getElementsByName("opt")
    for(var i = 0; i < opts.length; i++){
        if(opts[i].checked){
            var ans = opts[i].value
            opts[i].checked = false
        }
    }
    if(ans == questionsArray[count].answer){
        score += 10
    }
}
function next_question(){
    var optns = document.getElementsByName("opt")
    var btn = document.getElementById("next_btn")
    var cond = false;
    for(var i = 0; i < optns.length; i++){
        if (optns[i].checked == true){
            cond = true
        }
    }
    if(cond){
    if(count < questionsArray.length-1){
        calc()
        count++
        show_question(count)
        }
        else{
            calc()
            alert("You have secured " + score + " marks")
            window.location.replace("../index.html")
        }
    }
}

var hour_input = document.getElementById("hour")
var min_input = document.getElementById("min")
var sec_input = document.getElementById("sec")
var mili_input = document.getElementById("mili")
var interval;

function timeout(){
    mili_input.innerHTML--
    if(mili_input.innerHTML <= 0){
        sec_input.innerHTML--
        mili_input.innerHTML = 100
    }
    else if(sec_input.innerHTML <= 0){
        min_input.innerHTML--
        sec_input.innerHTML = 60
    }
    else if(min_input.innerHTML < 0){
        hour_input.innerHTML--
        min_input.innerHTML = 60
    }
    else if(hour_input.innerHTML < 0){
        reset()
        alert("You have secured " + score + " marks")
        window.location.replace("../index.html")
    }
}

function pause(){
    interval = clearInterval(interval)
    interval
}

function reset(){
    hour_input.value = 0
    min_input.value = 0
    sec_input.value = 0
    mili_input.value = 0
    pause()
}

function start(){
    interval = setInterval(timeout, 10)
    interval
}
