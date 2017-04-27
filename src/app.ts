declare var firebase;

export class App {
    constructor(
        private userLoggedIn = false,
        private authToken = null,
        private user = null
    ){
        // This mostly gets called on subsequent page loads to determine
        // what the current status of the user is with "user" being an object
        // return by Firebase with credentials and other info inside of it
        firebase.auth().onAuthStateChanged(user => {
            this.userLoggedIn = user ? true : false;
            this.user = user;
        });
      }
  login(type) {
        let provider;

        // Determine which provider to use depending on provided type
        // which is passed through from app.html
        if (type === 'google') {
            provider = new firebase.auth.GoogleAuthProvider();
        } else if (type === 'facebook') {
            provider = new firebase.auth.FacebookAuthProvider();
        } else if (type === 'twitter') {
            provider = new firebase.auth.TwitterAuthProvider();
        }
        if (type === 'username_password') {
            firebase.auth().signInWithEmailAndPassword(this.username, this.password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
         
                // [END_EXCLUDE]
            });
        }
        

        // Call the Firebase signin method for our provider
        // then take the successful or failed result and deal with
        // it accordingly.
        firebase.auth().signInWithPopup(provider).then((result: any) => {
            // The token for this session
            this.authToken = result.credential.accessToken;

            // The user object containing information about the current user
            this.user = result.user;

            // Set a class variable to true to state we are logged in
            this.userLoggedIn = true;
        }).catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
        });
    }

    logout() {
        // Self-explanatory signout code
        firebase.auth().signOut().then(() => {
            this.userLoggedIn = false;
        }).catch(error => {
            throw new Error(error);
        });
    }
    username = '';
    password = '';
}
