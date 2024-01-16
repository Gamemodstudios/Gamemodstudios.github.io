document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM is loaded");

    const headerProfileImageElement = document.getElementById('header-profile-pic');
    const sidebarProfileImageElement = document.querySelector('.sidebar-profile-pic');
    const usernameElement = document.getElementById('username');

    console.log("headerProfileImageElement:", headerProfileImageElement);
    console.log("sidebarProfileImageElement:", sidebarProfileImageElement);

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD-qQH3vlQVlBIriPdpAjmG5uUnpWaOlCI",
        authDomain: "gamemodstudios-7b759.firebaseapp.com",
        databaseURL: "https://gamemodstudios-7b759-default-rtdb.firebaseio.com",
        projectId: "gamemodstudios-7b759",
        storageBucket: "gamemodstudios-7b759.appspot.com",
        messagingSenderId: "565704076686",
        appId: "1:565704076686:web:1b51bc072584bc47d4c8df",
        measurementId: "G-TKFT7414N4"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Firebase Authentication
    const auth = firebase.auth();

    // Wait for the DOM to fully load before using document.getElementById
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in
            if (usernameElement) {
                usernameElement.innerText = user.displayName || user.email;

                // Firebase Storage
                const storage = firebase.storage();

                // Load header profile picture
                const headerProfileImageRef = storage.ref().child(`profile-images/${user.uid}`);
                headerProfileImageRef.getDownloadURL().then(url => {
                    if (headerProfileImageElement) {
                        headerProfileImageElement.src = url;
                    } else {
                        console.error("Header profile image element not found.");
                    }
                }).catch(error => {
                    console.error("Error fetching header profile image:", error);
                });

                // Load sidebar profile picture
                const sidebarProfileImageRef = storage.ref().child(`profile-images/${user.uid}`);
                sidebarProfileImageRef.getDownloadURL().then(url => {
                    if (sidebarProfileImageElement) {
                        sidebarProfileImageElement.src = url;
                    } else {
                        console.error("Sidebar profile image element not found.");
                    }
                }).catch(error => {
                    console.error("Error fetching sidebar profile image:", error);
                });
            } else {
                console.error("Username element not found.");
            }
        } else {
            // User is signed out
            console.log("User is signed out");
            // Redirect to login or handle as needed
        }
    });

    // Add click event listener to the header profile picture
    if (headerProfileImageElement) {
        headerProfileImageElement.addEventListener('click', function() {
            console.log("Header profile picture clicked");
            toggleSidebar();
        });
    }
});

function toggleSidebar() {
    const sidebarElement = document.getElementById('sidebar');
    if (sidebarElement) {
        const rightValue = window.getComputedStyle(sidebarElement).getPropertyValue('right');
        if (rightValue === "0px") {
            sidebarElement.style.right = "-300px";
        } else {
            sidebarElement.style.right = "0";
        }
    }
}
