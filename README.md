# Book Search Engine

## Description

Welcome to the Book Search Engine! This application allows users to search for books, view details about them, and manage a personal collection of saved books. The app leverages the Google Books API to fetch book details and provides user authentication for personalized features.


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To set up the Book Search Engine locally, follow these steps:

1. Clone the repository:

[GitHub Repository](https://github.com/Jakostein97/book-search-engine)
```
git clone https://github.com/yourusername/book-search-engine.git
cd book-search-engine
```
2. Install dependencies:
```
npm run render-build
```
3. Set up environment variables:

- Create a .env file in the root directory.
- Add your Google Books API key and any other required environment variables:
```
REACT_APP_GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```
4. Start the development server:
```
npm run start
```
5. Access the app:
- The app will be running at http://localhost:3001.

## Usage

1. Search for Books
- Initial Load: When you first load the app, you will see a menu with options to "Search for Books" or "Login/Signup" and an input field for searching books.
- Search as Guest: Enter a search term and click the submit button to view search results, which include the book's title, author, description, image, and a link to the Google Books site.
2. User Authentication
- Signup: Click on the "Login/Signup" option, toggle to "Signup", and fill out the form with a username, email, and password. Click "Signup" to create your account and log in.
- Login: Click on the "Login/Signup" option, toggle to "Login", and enter your email and password. Click "Login" to access your account.
3. Logged-In Features
- Save Books: When logged in, search for books as usual. Each result will include a "Save" button. Click it to add the book to your saved list.
- View Saved Books: Access your saved books by clicking "My Saved Books" in the menu. You will see a list of all the books you've saved, along with options to remove them.

![App Screenshot](assets/images/Screenshot%202024-08-10%20162905.png)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
