import './loginForm.js'
import './registerForm.js'
import './switchForm.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { loginCheck } from './loginCheck.js'
import './signUpForm.js'
import './register.js'
import './googleLogin.js'
import './gitHubLogin.js'
import './facebookLogin.js'
import './logout.js'



onAuthStateChanged(auth, async (user) => {

    loginCheck(user)

})


