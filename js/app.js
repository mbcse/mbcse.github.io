$(document).ready(function () {



    // header dropdown opening and closing

    $(".profile-picture").click(function (e) {
        $(".header-profile-dropdown").toggleClass("display-none");
        $(".header-profile-dropdown").toggleClass("display-flex");

    });

    $(document).click(function (event) {
        $target = $(event.target);
        if (!$target.closest('.header-profile-picture').length &&
            $('.header-profile-dropdown').is(":visible")) {
            $('.header-profile-dropdown').toggleClass("display-none");
            $('.header-profile-dropdown').toggleClass("display-flex");
        }
    });


  console.log(firebase);
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var auth = firebase.auth();
  console.log(googleProvider);

  $(".email-submit").click(function (e) {
    e.preventDefault();
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword($('.email-input').val(), $('.password-input').val()).catch(function(error) {
       
        var errorCode = error.code;
        var errorMessage = error.message;
    
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);

        
      });

    
      alert("User Created Successfully, Please Login Now");

     
        
    
  
})

 

$(".google-button").click(function (e) {
    e.preventDefault();
    console.log(firebase, auth);
    firebase.auth().signInWithRedirect(googleProvider);

    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
 
          var token = result.credential.accessToken;
          alert("User Created Successfully, Please Login Now");
        }
      
        var user = result.user;
      }).catch(function(error) {
   
        var errorCode = error.code;
        var errorMessage = error.message;
 
        var email = error.email;
    
        var credential = error.credential;
   
      });
  
});


$(".github-button").click(function (e) {
  e.preventDefault();

var githubprovider = new firebase.auth.GithubAuthProvider();
githubprovider.addScope('repo');
firebase.auth().signInWithRedirect(githubprovider);

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    
    var token = result.credential.accessToken;
    alert("User Created Successfully, Please Login Now");
  }
  var user = result.user;
}).catch(function(error) {
  
  var errorCode = error.code;
  var errorMessage = error.message;

  var email = error.email;

  var credential = error.credential;
  if (errorCode === 'auth/account-exists-with-different-credential') {
    alert('You have signed up with a different provider for that email.');
 
  } else {
    console.error(error);
  }
});



});

});

function myFunction() {
    var x = document.querySelector(".links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.querySelector('.email-input').style.borderBottom = "0.8px solid #1abc9c";
        return true;
    } else if (inputText.value === "") {
        document.querySelector('.email-input').style.borderBottom = "0.8px solid #e74c3c";
    }
    else {
        document.querySelector('.email-input').style.borderBottom = "0.8px solid #e74c3c";
        document.querySelector('.email-input').focus();
        return false;
    }

   
}


