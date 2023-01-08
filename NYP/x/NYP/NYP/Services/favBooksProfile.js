const favBookList = JSON.parse(window.localStorage.getItem('favBooksList'))

const booksFavContainer = document.createElement('div')
booksFavContainer.setAttribute("id", "booksFavContainer")


for (const favBooks of favBookList) {

    const body = document.querySelector('body')

    const individualFavBook = document.createElement('div')

    individualFavBook.setAttribute("id", "allBooks")
    booksFavContainer.appendChild(individualFavBook)
    body.appendChild(booksFavContainer)

    const titleBooks = favBooks.title
    const allTitleBook = document.createElement('h3')
    allTitleBook.setAttribute("id", "titleBook")
    allTitleBook.innerText = titleBooks

    const imgBook = favBooks.book_image
    const showImg = document.createElement('img')
    showImg.setAttribute("src", imgBook)
    showImg.setAttribute("id", "imgBooks")

    const weekList = favBooks.weeks_on_list
    const elementWeekList = document.createElement('p')
    elementWeekList.setAttribute("id", "weekList")
    elementWeekList.innerText = "Week on list: " + weekList

    const descriptionBook = favBooks.description
    const elementDescription = document.createElement('p')
    elementDescription.setAttribute("id", "descriptionBook")
    elementDescription.innerText = "Description: " + descriptionBook


    const buttonAmazonText = "Buy at"
    const buyAmazon = favBooks.amazon_product_url
    const buttonAmazonContainer = document.createElement('div')
    buttonAmazonContainer.setAttribute("id", "divButton")
    const buttonAmazon = document.createElement('a')
    buttonAmazon.setAttribute("id", "buttonAmazon")
    buttonAmazon.setAttribute("href", buyAmazon)
    const buttonImgElement = document.createElement('img')
    buttonImgElement.setAttribute("id", "amazonPic")
    buttonImgElement.setAttribute('src', '../Img/iconamazon.png')
    buttonAmazon.innerText = buttonAmazonText
    buttonAmazon.appendChild(buttonImgElement)

    individualFavBook.appendChild(allTitleBook)
    individualFavBook.appendChild(showImg)
    individualFavBook.appendChild(elementWeekList)
    individualFavBook.appendChild(elementDescription)
    individualFavBook.appendChild(buttonAmazonContainer)

}