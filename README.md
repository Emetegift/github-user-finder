**GitHub User Finder**

This repository contains a simple web application to retrieve and display information about GitHub users and their repositories. The application is built using ES6 and utilizes the GitHub API.

### Usage

To use this application, simply open the `index.html` file in a web browser. Enter a GitHub username in the search input, and the application will fetch and display information about the user, including their profile details and a list of their latest repositories.

### Code Overview

- The `Github` class is used to interact with the GitHub API. It includes a method `getUser(user)` to fetch user profile and repositories.

- The `UI` class handles the user interface interactions. It includes methods to display user profiles (`showProfile`), repositories (`showRepos`), and alerts (`showAlert`). It also includes methods to clear alerts and user profiles.

- The script instantiates `Github` and `UI` classes, and an event listener is set up to respond to user input. As the user types in the search input, it triggers the `getUser` method to fetch and display user information.

### Dependencies

- This application relies on the Bootstrap framework for styling.

### Notes

- Ensure that you have an internet connection as the application fetches data from the GitHub API.

Feel free to explore and enhance this application as needed!

https://github.com/Emetegift/github-user-finder/assets/104801555/a9ead67a-2ae2-47c0-9dc8-89448c0c5c4e



