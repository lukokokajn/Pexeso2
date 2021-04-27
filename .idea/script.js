let cards1 = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
let cards2 = cards1.length

let nacitani = function () {
    pexeso_deska = document.getElementById("polepexesa")
    poledoble();
    polerandom();
    cards();
}

let poledoble = function () {
    for (let i = 0; i < cards2; i++) {
        cards1.push(cards1[i])
    }
}

let polerandom = function () {
    for (let i = 0; i < cards1.length; i++) {
        let randomator = Math.floor(Math.random() * i);

        let change = cards1[i];

        cards1[i] = cards1[randomator];

        cards1[randomator] = change;
    }
}

let cards = function () {
    for (let i = 0; i < cards1.length; i++) {
        let doyousee = document.createElement('div')
        doyousee.innerText = cards1[i]


        doyousee.classList.add('seent')

        doyousee.addEventListener('click', function () {
            {
                doyousee.classList.toggle('see')
                doyousee.classList.toggle('seent')

            }
        })
        pexeso_deska.appendChild(doyousee)
    }
}


window.onload = nacitani;