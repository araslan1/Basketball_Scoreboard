let home = 0
let guest = 0
let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

function homeincrement1() {
    home += 1
    homeEl.textContent = home
}

function homeincrement2() {
    home += 2
    homeEl.textContent = home
}

function homeincrement3() {
    home += 3
    homeEl.textContent = home
}

function guestincrement1() {
    guest += 1
    guestEl.textContent = guest
}

function guestincrement2() {
    guest += 2
    guestEl.textContent = guest
}

function guestincrement3() {
    guest += 3
    guestEl.textContent = guest
}