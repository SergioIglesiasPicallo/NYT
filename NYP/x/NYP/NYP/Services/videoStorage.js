if (window.caches) {

    caches.open('videoIndex')

    caches.open('videoIndex').then(cache => {
        cache.addAll([
            '../Img/Untitled.mp4',
            './index.html',
            '../Img/logo.png',
            '../Services/loginForm.js',
            '../Services/registerForm.js',
            '../Services/switchForm.js',
            '../Services/signUpForm.js',
            '../Services/register.js',
        ])
    })
}

localVideo = function () {
  
  
    const logoIndex = document.querySelector('#textLogin')
   
    const logoLocalStorage = window.localStorage.setItem('logoIndex', '../Img/logo.png')
}
localVideo()






