const personsBlock = document.querySelector('.persons')


const persons = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'data/persons.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach((item) => {
            const card = document.createElement('div')

            card.classList.add('cards')
            card.innerHTML = `
                <h1>${item.name}</h1>
                <strong>Age:${item.age}</strong>
                <img width="200px" height="150px" class="cards-img" src="${item.photo_person}">
            `
            personsBlock.append(card)
        })
    })

}

persons()