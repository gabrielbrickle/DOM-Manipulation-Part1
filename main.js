document.querySelector("#inject-html button").addEventListener('click', function() {
    var answerBoxEl = document.querySelector('#inject-html .answer-box')
    answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click', function() {
    document.querySelector("#compoundInvestment").innerHTML = document.querySelector("#compoundInvestment").innerHTML * 2
})


document.querySelector("#color-circle button").addEventListener('click', function() {
    var background = document.getElementById('circle-bw').style.backgroundColor;
    if (background == "white") {
        document.getElementById('circle-bw').style.background = "black";
    } else {
        document.getElementById('circle-bw').style.background = "white";
    }
})

document.querySelector("#blow-up button").addEventListener('click', function() {
    var circle = document.querySelector("div.circle-red")
    var circleStyling = window.getComputedStyle(circle)
    var circleWidth = circleStyling.width.slice(0, -2)
    var circleHeight = circleStyling.height.slice(0, -2)
    var newHeight = parseInt(circleHeight)
    var newWidth = parseInt(circleWidth)
    var widthx2 = newWidth * 2
    circle.style.width = widthx2 + "px"
    circle.style.height = widthx2 + "px"
    if (widthx2 > 320) {
        circle.style.width = 40 + "px"
        circle.style.height = 40 + "px"
    }
})

document.querySelector("#remove button").addEventListener('click', function() {
    if (document.querySelector(".inactive")) {
        var parent = document.querySelector("#user-list")
        var child = document.querySelector(".inactive")
        parent.removeChild(child);
    }
})


document.querySelector("#reverse-squares button").addEventListener('click', function() {
    var squares = document.querySelectorAll('.square')
    var newArray = []
    for (var i = squares.length - 1; i >= 0; i--) {
        newArray.push(squares[i])
    }
    for (var i = 0; i < squares.length; i++) {
        for (var i = 0; i < newArray.length; i++) {
            squares[i].outerHTML = newArray[i].outerHTML
        }
    }
})

document.querySelector("#pig-latin button").addEventListener('click', function() {
    var grabLi = document.querySelectorAll('#tasks li')
    for (var i = 0; i < grabLi.length; i++) {
        var individualLi = grabLi[i].innerText
        console.log("this is one li", individualLi);
        var liArray = individualLi.split('')
        console.log("split li", liArray);
        var reverseLi = liArray.reverse();
        console.log("pig latin", reverseLi);
        var backTogether = reverseLi.join("")
        console.log("back together", backTogether);
        grabLi[i].innerText = backTogether
    }
})

document.querySelector("#cycle-image button").addEventListener('click', function() {
    var getImg = document.querySelector('#city-img')
    var split = getImg.outerHTML.split('');
    var img = split[66]
    var newNum = parseInt(img)
    newNum = newNum + 1
    if (newNum >= 10) {
        newNum = 1
    }
    getImg.src = "./images/city-photo-" + newNum + ".jpg"
})
