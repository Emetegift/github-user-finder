// Using ES6

class Github {
  constructor() {
    this.client_id = "2e04ad2c11821c9f260d";
    this.client_secret = "aa33e5a199903b70b5e909ecde44d1c3d70428f1";

    //To set the numbers you want to see
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  // Get user method

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // Toget a user's repos
    const repoReponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoReponse.json();
    // console.log(repos);

    return {
      profile,
      repos,
    };
  }
}
