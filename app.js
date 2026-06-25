const auth = firebase.auth();

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("status").innerText =
        "Account created successfully!";
    })
    .catch(err => {
      document.getElementById("status").innerText = err.message;
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("status").innerText =
        "Login successful!";
    })
    .catch(err => {
      document.getElementById("status").innerText = err.message;
    });
}
