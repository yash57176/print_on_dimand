import {
  auth,
  db
} from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const splash = document.getElementById("splash");
const authScreen = document.getElementById("auth");
const home = document.getElementById("home");

const authForm = document.getElementById("authForm");

const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");

const nameGroup = document.getElementById("nameGroup");
const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const authButtonText =
  document.getElementById("authButtonText");

const switchAuth =
  document.getElementById("switchAuth");

const switchQuestion =
  document.getElementById("switchQuestion");

const authMessage =
  document.getElementById("authMessage");


let isSignup = false;


/* SPLASH */

setTimeout(() => {

  splash.classList.add("hidden");

  if (!auth.currentUser) {
    authScreen.classList.remove("hidden");
  }

}, 1800);


/* LOGIN / SIGNUP SWITCH */

switchAuth.addEventListener("click", () => {

  isSignup = !isSignup;

  if (isSignup) {

    authTitle.textContent = "Create Account";

    authSubtitle.textContent =
      "Create your Zesto Print account";

    nameGroup.classList.remove("hidden");

    authButtonText.textContent = "Sign Up";

    switchQuestion.textContent =
      "Already have an account?";

    switchAuth.textContent = "Login";

  } else {

    authTitle.textContent = "Welcome Back";

    authSubtitle.textContent =
      "Login to continue to Zesto Print";

    nameGroup.classList.add("hidden");

    authButtonText.textContent = "Login";

    switchQuestion.textContent =
      "Don't have an account?";

    switchAuth.textContent = "Sign Up";

  }

});


/* AUTH SUBMIT */

authForm.addEventListener("submit", async (event) => {

  event.preventDefault();

  const email = emailInput.value.trim();

  const password = passwordInput.value;

  authMessage.textContent = "Please wait...";

  try {

    if (isSignup) {

      const name =
        nameInput.value.trim();

      if (!name) {
        throw new Error("Please enter your name.");
      }

      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await setDoc(
        doc(db, "users", result.user.uid),
        {
          uid: result.user.uid,
          name: name,
          email: email,
          createdAt: serverTimestamp()
        }
      );

      authMessage.textContent =
        "Account created successfully!";

    } else {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      authMessage.textContent =
        "Login successful!";

    }

  } catch (error) {

    console.error(error);

    authMessage.textContent =
      getFirebaseError(error.code);

  }

});


/* AUTH STATE */

onAuthStateChanged(auth, (user) => {

  if (user) {

    splash.classList.add("hidden");
    authScreen.classList.add("hidden");
    home.classList.remove("hidden");

  }

});


/* ERROR MESSAGE */

function getFirebaseError(code) {

  switch (code) {

    case "auth/invalid-email":
      return "Invalid email address.";

    case "auth/email-already-in-use":
      return "This email is already registered.";

    case "auth/weak-password":
      return "Password should be at least 6 characters.";

    case "auth/invalid-credential":
      return "Email or password is incorrect.";

    default:
      return "Something went wrong. Please try again.";

  }

}


/* TEMP MESSAGE */

window.showMessage = function(message) {

  alert(message);

};
