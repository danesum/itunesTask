# itunesTask
A learning exercise for integrating an Express backend with a React JS frontend. The app uses the Express backend server by calling it using the React frontend, which in turn makes a call to the iTunes Search API and displays the results.
Also includes functionality for adding entries to a list of locally saved favourites in state storage. 

## Setup
To use, install dependencies by running ***npm install*** in the command line on both the frontend and backend folders. Then, launch each on your local device by running ***npm start***.

## How to use 
To use the API, type in your search term in the top form and select a category from the dropdown, or leave it as is to search all media. Then, click the submit button to search. Your results will be displayed in a series of blocks below 
the search form. From these, you can click the favourite button to add them to the list of favourites, which display at the bottom of the page. You can click the button on your favourites to delete the entry.

## Testing 
Run "npm test" on both front end or back end folders to see some basic unit tests, or add new tests to the provided test folders.

## Security 
All interactions with the external API are handled on the backend of the site, and Helmet has been installed on the Express server for added security. 
