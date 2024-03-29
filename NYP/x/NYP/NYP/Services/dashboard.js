const spinnerElement = document.getElementById("spinner");
const allBooks = document.getElementById('allListBooks') 
const prueba = allBooks.appendChild(document.createElement('div')) 
prueba.setAttribute("id", "listBooks") 
prueba.setAttribute("class", "listBooks")

document.querySelector('#myProfile').addEventListener("click", (e) => {
        e.preventDefault()
        window.location.assign('../views/profile.html')

});

async function postAllData() {
        const postAllListBooks = document.getElementById('listBooks')
        const list = await fetchListBooks()


        spinnerElement.setAttribute('class', 'hidden')
        allBooks.removeAttribute('class', 'hidden')

        /**
         * Corrección
         * Deberíamos usar un FOR..OF
         */
        for (let i = 0; i < list.length; i++) {

                const item = list[i]
                const actualListElementContainer = document.createElement('div')
                actualListElementContainer.setAttribute("id", "listBooksHijo")
                actualListElementContainer.setAttribute("class", "listBooksHijo")

                const elementTitle = document.createElement('h3')
                elementTitle.setAttribute("id", "title")
                elementTitle.innerText = item.list_name

                const elementDate = document.createElement('p')
                elementDate.setAttribute("id", "date")
                elementDate.innerText = ("Oldest:" + ' ' + item.oldest_published_date)


                const elementDateUpdate = document.createElement('p')
                elementDateUpdate.setAttribute("id", "dateUpdate")
                elementDateUpdate.innerText = ("Newest:" + ' ' + item.newest_published_date)

                const elementUpdated = document.createElement('p')
                elementUpdated.setAttribute("id", "dateUpdateRange")
                elementUpdated.innerText = ("Updated:" + ' ' + item.updated)

                const button = document.createElement("a")
                button.setAttribute("id", "buttonDetails")

                button.setAttribute("href", "../views/details.html")
                button.innerText = ("Read more")
                button.onclick = () => {
                        localStorage.setItem(localStorageListName, item.list_name, item.updated)

                }
                const lineBook = document.createElement('hr')
                lineBook.setAttribute("id", "lineaHr")


                actualListElementContainer.appendChild(elementTitle)
                actualListElementContainer.appendChild(lineBook)
                actualListElementContainer.appendChild(elementDate)
                actualListElementContainer.appendChild(elementDateUpdate)
                actualListElementContainer.appendChild(elementUpdated)
                actualListElementContainer.appendChild(button)
                postAllListBooks.appendChild(actualListElementContainer)

        }

}

postAllData()