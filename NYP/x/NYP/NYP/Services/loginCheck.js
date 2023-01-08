const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')


export const loginCheck = user => {
    if (user) {
        loggedOutLink.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => link.style.display = 'block')
    } else {
        loggedOutLink.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')
    }
}
