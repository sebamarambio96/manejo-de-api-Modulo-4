


const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((resp) => resp.json())
    .then(data => {

        class Api {
            constructor(data) {
                this.data = data
            }
            nombres(array) {
                const lista = document.getElementById('lista')
                const boton1 = document.getElementById('boton1');

                boton1.addEventListener('click', () => {
                    array.map(persona => {
                        const li = document.createElement('li')
                        const p = document.createElement('p');
                        p.innerHTML = `${persona.name}`
                        li.appendChild(p)
                        lista.appendChild(li)
                    })
                })
            }

            mostrarInfo(array) {
                const lista2 = document.getElementById('lista2')
                const boton2 = document.getElementById('boton2');

                boton2.addEventListener('click', () => {
                    let usuario = prompt('Escriba nombre de usuario:')
                    let persona = array.find(i => i.name == usuario)
                    console.log(persona)
                    const li = document.createElement('li')
                    const p = document.createElement('p');
                    p.innerHTML = `${persona.name} ${persona.email}`
                    li.appendChild(p)
                    lista2.appendChild(li)

                })
            }
            mostrarDireccion(array) {
                const lista3 = document.getElementById('lista3')
                const boton3 = document.getElementById('boton3');

                boton3.addEventListener('click', () => {
                    let usuario = prompt('Escriba nombre de usuario:')
                    let persona = array.find(i => i.name == usuario)
                    console.log(persona)
                    const li = document.createElement('li')
                    const p = document.createElement('p');
                    p.innerHTML = `${persona.address.city} <br> ${persona.address.geo.lat} ${persona.address.geo.lng} <br> ${persona.address.street} <br> ${persona.address.suite} <br> ${persona.address.zipcode}`
                    li.appendChild(p)
                    lista3.appendChild(li)

                })
            }
            mostrarAvanzada(array) {
                const lista4 = document.getElementById('lista4')
                const boton4 = document.getElementById('boton4');

                boton4.addEventListener('click', () => {
                    let usuario = prompt('Escriba nombre de usuario:')
                    let persona = array.find(i => i.name == usuario)
                    console.log(persona)
                    const li = document.createElement('li')
                    const p = document.createElement('p');
                    p.innerHTML = `${persona.name} <br> ${persona.phone}<br> ${persona.website} <br> ${persona.company.bs} <br> ${persona.company.catchPhrase} <br> ${persona.company.name}`
                    li.appendChild(p)
                    lista4.appendChild(li)

                })
            }
            compañias(array) {
                const lista5 = document.getElementById('lista5')
                const boton5 = document.getElementById('boton5');

                boton5.addEventListener('click', () => {
                    array.map(persona => {
                        const li = document.createElement('li')
                        const p = document.createElement('p');
                        p.innerHTML = `${persona.company.name}<br> ${persona.company.catchPhrase}`
                        li.appendChild(p)
                        lista5.appendChild(li)
                    })
                })
            }
            alfabeticamente(array) {
                const lista6 = document.getElementById('lista6')
                const boton6 = document.getElementById('boton6');
                let arrayNombres = []
                array.map(persona => {
                    arrayNombres.push(persona.name)
                })
                let arrayNombresAlfa = arrayNombres.sort()
                boton6.addEventListener('click', () => {
                    console.log('click')
                    arrayNombresAlfa.map(persona => {
                        const li = document.createElement('li')
                        const p = document.createElement('p');
                        p.innerHTML = `${persona}`
                        li.appendChild(p)
                        lista6.appendChild(li)
                    })
                })
            }
        }

        const personas = new Api(data)
        console.log(personas.data)

        personas.nombres(personas.data)
        personas.mostrarDireccion(personas.data)
        personas.mostrarInfo(personas.data)
        personas.mostrarAvanzada(personas.data)
        personas.compañias(personas.data)
        personas.alfabeticamente(personas.data)
    })
    .catch()
