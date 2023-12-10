// Instantiate github before calling it down because it is a class

const github = new Github();

// Instantiate ui before calling it down because it is a class
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// search input event listener

searchUser.addEventListener("keyup", (e) => {
  // Get user input text
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
      console.log(data);
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
