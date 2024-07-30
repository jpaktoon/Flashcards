# Project: Flashcard-o-matic
A local school has decided to put together a flashcard application, Flashcard-o-matic, to help their students study online. Teachers will use this application to create decks of flashcards for the subjects they teach, and students will study the decks. The school needs you to build the application that the students and teachers will use.

## Installation
1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm start` to concurrently start two servers concurrently
    - An API server, powered by json-server, running on `http://localhost:5000`
    - A React application running on `http://localhost:3000`
4. Run `npm test` to run tests.

## Features

### Home

![Home](/screenshots/Home.png)
The Home screen has the following features:
1. A Create Deck button is shown, and clicking it brings the user to the Create Deck screen.
2. Existing decks are each shown with the deck name, the number of cards, and a Study, View, and Delete button.
3. Clicking the Study button brings the user to the Study screen.
4. Clicking the View button brings the user to the Deck screen.
5. Clicking the Delete button shows a warning message before deleting the deck.

### Delete Deck prompt
When the user clicks the Delete button, a warning message is shown and the user can click OK or Cancel. If the user clicks OK, the deck is deleted and the deleted deck is no longer visible on the Home screen.

### Study
![Study](/screenshots/Study.png)
The Study screen has the following features:
1. A breadcrumb navigation bar with links to home /, followed by the name of the deck being studied, and finally the text Study (e.g., Home/Rendering In React/Study).
2. The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.
3. Cards are shown one at a time, front-side first.
4. A button at the bottom of each card "flips" it to the other side.
5. After flipping the card, the screen shows a Next button (see the Next button section below) to continue to the next card.
6. After the final card in the deck has been shown, a message (see the Restart prompt section below) is shown offering the user the opportunity to restart the deck.
    - If the user does not restart the deck, they should return to the home screen.
7. Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.

### Next button
The Next button appears after the card is flipped.

### Restart prompt
When all cards are finished, a message is shown and the user is offered the opportunity to restart the deck. If the user does not restart the deck, they return to the home screen.

### Not enough cards
Studying a Deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.

Clicking the Add Cards button should take the user to the Add Card screen.

### Create Deck
The Home screen has a Create Deck button that brings the user to the Create Deck screen.

The Create Deck screen has the following features:
1. There is a breadcrumb navigation bar with a link to home / followed by the text Create Deck (i.e., Home/Create Deck).
2. A form is shown with the appropriate fields for creating a new deck.
    - The name field is an `<input>` field of type text.
    - The description field is a `<textarea>` field that can be multiple lines of text.
3. If the user clicks Submit, the user is taken to the Deck screen.
4. If the user clicks Cancel, the user is taken to the Home screen.

### Deck
The Deck screen displays all of the information about a deck.
![Deck](/screenshots/Deck.png)

The Deck screen has the following features:
1. There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).
2. The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").
3. The screen includes Edit, Study, Add Cards, and Delete buttons. Each button takes the user to a different destination
4. Each card in the deck:
    - Shows a question and the answer to the question.
    - Has an Edit button that takes the user to the Edit Card screen when clicked.
    - Has a Delete button that allows that card to be deleted.

### Delete Card Prompt
When the user clicks the Delete button associated with a card, a warning message is shown and the user can click OK or Cancel. If the user clicks OK, the card is deleted.

### Edit Deck
The Edit Deck screen allows the user to modify information on an existing deck.

The Edit Deck screen has the following features:
1. There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text 2. Edit Deck (e.g., Home/Rendering in React/Edit Deck).
It displays the same form as the Create Deck screen, except it is prefilled with information for the existing deck.
3. The user can edit and update the form.
4. If the user clicks Cancel, the user is taken to the Deck screen.

### Add Card
The Add Card screen allows the user to add a new card to an existing deck.

The Add Card screen has the following features:
1. There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card).
2. The screen displays the React Router: Add Card deck title.
3. A form is shown with the "front" and "back" fields for a new card. Both fields use a `<textarea>` tag that can accommodate multiple lines of text.
4. If the user clicks Save, a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.
5. If the user clicks Done, the user is taken to the Deck screen.

### Edit Card
The Edit Card screen allows the user to modify information on an existing card.

The Edit Card screen has the following features:
1. There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4).
2. It displays the same form as the Add Card screen, except it is prefilled with information for the existing card. It can be edited and updated.
3. If the user clicks on either Save or Cancel, the user is taken to the Deck screen.
