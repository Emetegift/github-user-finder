// To display detail on the UI using DOM
class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  // Display user profile
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3>
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2 " src="${user.avatar_url}">
                    <a href = "${user.html_url}" taget="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9>
                    <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gist:${user.public_gists}</span>
                    <span class="badge badge-success">Followers:${user.followers}</span>
                    <span class="badge badge-info">Following:${user.following}</span>
                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3"> Latest Repos</h3>
        <div id="repos"></div>
    `;
  }

  //Show user repos
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
        <div class= "card card-body">
          <div class= "row">
           <div class= "col-md-6">
              <a href="${repo.html_url}">${repo.name}</a>
            </div> 
           <div class= "col-md-6">
            <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers:${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks:${repo.forks_count}</span>
            </div> 
          </div>
        </div>
      `;
    });

    //  Output repo on ui
    document.getElementById("repo").innerHTML = output;
  }

  clearRepos() {
    const repos = document.getElementById("repo");
    repos.innerHTML = "";
  }

  //show alert message
  showAlert(message, className) {
    //Clear any remaining alert which will prevent multiple alerts from happening
    this.clearAlert();

    //create div
    const div = document.createElement("div");

    // Add class
    div.className = className;
    //Add Text
    div.appendChild(document.createTextNode(message));
    //To insert the message, first Get Parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    //Insert alert
    container.insertBefore(div, search);

    //Time out after displaying alert for 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  //clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // To make sure that the page is cleared after clearing the input
  clearProfile() {
    this.profile.innerHTML = " ";
    this.clearRepos();
  }
}
