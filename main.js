let $ = document
let plus = $.querySelector(".plus")
let eraser = $.querySelector(".eraser")
let container = $.querySelector(".container")
let theme = $.querySelectorAll(".theme")
let colors = $.querySelectorAll(".colors")
let input = $.getElementById("input")

// colors
let bgTheme = theme.forEach(function (color) {
    color.addEventListener("click", function () {
        input.style.backgroundColor = color.classList[1]
        input.focus()
    })
})

// input
input.addEventListener("keyup", function (event) {
    if (event.code === "Enter" && input.value != "" || event.code === "NumpadEnter" && input.value != "") {
        let h3 = $.createElement("h3")
        container.append(h3)
        h3.innerHTML = input.value
        if (input.style.backgroundColor != "white") {
            h3.style.backgroundColor = input.style.backgroundColor
            h3.style.border = "none"
            input.style.backgroundColor = "white"
        } else {
            input.style.backgroundColor = "white"
        }
        input.value = ""
        h3.addEventListener("click", function () {
            h3.remove()
        })
    }
})
input.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
        input.style.backgroundColor = "white"
        input.value = ""
    }
})
plus.addEventListener("click", function () {
    if (input.value != "") {
        let h3 = $.createElement("h3")
        container.append(h3)
        h3.innerHTML = input.value
        h3.style.backgroundColor = "white"
        h3.style.border = "white"
        if (input.style.backgroundColor != "white") {
            h3.style.backgroundColor = input.style.backgroundColor
            h3.style.border = "none"
            input.style.backgroundColor = "white"
        } else {
            input.style.backgroundColor = "white"
        }
        input.value = ""
        h3.addEventListener("click", function () {
            h3.remove()
        })
        input.focus()
    }
})
eraser.addEventListener("click", function () {
    input.value = ""
    input.style.backgroundColor = "white"
    input.focus()
})
