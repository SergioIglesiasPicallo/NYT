const userInfoProfileGoogle = 'userInfoGoogle'

let userInfoGoogle = JSON.parse(window.localStorage.getItem(userInfoProfileGoogle))

if (userInfoGoogle) {

    const userContainer = document.getElementById('profileView')
    const providerData = userInfoGoogle.providerData
    const emailproviderData = providerData[0].email

    const userElementImg = document.createElement('img')
    const userPicProfile = userInfoGoogle.photoURL
    userElementImg.setAttribute("id", "imgUserGoogle")
    userElementImg.setAttribute("referrerpolicy", "no-referrer")
    userElementImg.setAttribute("src", userPicProfile)
    userContainer.appendChild(userElementImg)
    const userElementDisplayName = document.createElement('p')
    userElementDisplayName.setAttribute("id", "displayName")
    const nameUser = userInfoGoogle.displayName
    userElementDisplayName.innerText = (nameUser)
    userContainer.appendChild(userElementDisplayName)
    const userElementEmail = document.createElement('p')
    userElementEmail.setAttribute("id", "emailUser")
    userElementEmail.innerText = (emailproviderData)
    const hrDivisorProfile1 = document.createElement('hr')
    hrDivisorProfile1.setAttribute("id", "hrProfile")
    userContainer.appendChild(hrDivisorProfile1)
    userContainer.appendChild(userElementEmail)
    const hrDivisorProfile = document.createElement('hr')
    hrDivisorProfile.setAttribute("id", "hrProfile")
    userContainer.appendChild(hrDivisorProfile)

}
