function uploadProfilePic() {
    const fileInput = document.getElementById('new-profile-pic');
    const uploadStatus = document.getElementById('upload-status');

    // Your existing Firebase configuration
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



    const auth = firebase.auth();
    
    auth.onAuthStateChanged((user) => {
        if (user) {
            const storage = firebase.storage();
            const storageRef = storage.ref();

            // Use the user's UID as the folder name and filename
            const profilePicRef = storageRef.child(`profile-pic/${user.uid}/${user.uid}.png`);

            const uploadTask = profilePicRef.put(fileInput.files[0]);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Track upload progress if needed
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.error('Error uploading profile picture:', error);
                    uploadStatus.innerText = 'Upload failed. Please try again. Error: ' + error.message;
                },
                () => {
                    // Handle successful uploads on complete
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File available at', downloadURL);

                        // Update profile picture in your database or wherever it's needed
                        // For example, you can update the profile picture in Firebase Authentication
                        user.updateProfile({
                            photoURL: downloadURL
                        }).then(() => {
                            console.log('Profile picture updated successfully');
                            uploadStatus.innerText = 'Upload successful!';
                        }).catch((error) => {
                            console.error('Error updating profile picture in authentication:', error);
                            uploadStatus.innerText = 'Upload failed. Please try again. Error: ' + error.message;
                        });
                    });
                }
            );
        } else {
            console.error('User not signed in. Please sign in to upload profile picture.');
        }
    });
}
