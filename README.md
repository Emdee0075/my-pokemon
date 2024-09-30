# Welcome to My Pokemon App
My Pokemon App allows users to browse and search for Pokémon from the Pokémon API. The app dynamically loads more Pokémon as the user scrolls down and displays details for each Pokémon when selected.


## Task
The task was to create a responsive, scrollable list of Pokémon, with the ability to view details for each one. The challenge involved making sure the page loaded more Pokémon as the user scrolls, and ensuring the list of Pokémon was searchable.

## Description
I solved the problem by:

a. Using the `useEffect` and `useState` and `useCallback` hooks in React to manage Pokémon data and handle side effects like API requests and scroll events.

b. Implementing infinite scroll, where more Pokémon load dynamically when the user scrolls near the bottom of the page.

c. Using React Router to handle navigation between the main Pokémon list and individual Pokémon details pages.

d. Creating a "Back/previous" button that allows users to return to the previous page after viewing Pokémon details.


## Installation
In order to run the project, please follow these steps below:
1. Clone the repository to your local machine.
2. In the project directory, install the dependencies by running:

npm install axios react-router-dom

After you've successfully cloned it:
cd my_pokemon_app
npm install

In order to start the development server:

npm start


## Usage
Once the project is running, the main page will display a list of Pokémon. You can scroll down to load more Pokémon, search for specific ones using the search bar, or click on a Pokémon to view its details. After viewing a Pokémon's details, you can click the "Back" button to return to the list.

### The Core Team
Maspara Dan


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
