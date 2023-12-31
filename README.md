# Events Calendar

## Requirements / Purpose

The purpose of this project is to create an Events Calendar using React and TypeScript. The calendar should allow users to view and navigate between different months, click on specific days, and display a modal when a day is clicked. The stack used for this project is React and TypeScript because of their flexibility and strong typing.

## Build Steps

To build and run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-repo.git`
2. Navigate to the project directory: `cd event-calendar`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000`

## Design Goals / Approach

The design goals for this project were to create a simple and intuitive Events Calendar interface. The calendar is implemented using React components, and the logic is organized to handle the navigation between months and the display of the modal. The code follows best practices for component structure and separation of concerns.

## Features

-   Display of a calendar with the current month title and a grid of clickable day cells. (OK)
-   Modal appears when a day cell is clicked. (OK)
-   Navigation between months to view upcoming and previous months. (OK)
-   BONUS: Day, week, and month view of the calendar (to be implemented).
-   The modal should include a form with the following fields:( OK)
    -   Event Name
    -   Start Date
    -   End Date
    -   Location
    -   Label
-   When an event is created, a card component should be displayed on the corresponding date cell of the calendar. (dot will be displayed and a card visible on the side)
-   The event card component should also be clickable and display a modal with event details and a countdown timer showing the time remaining until the event.
-   When a user tries to add an event with a start date in the past, an error message should appear. (OK)
-   The user should be able to filter the calendar by labels or location, allowing them to view specific events based on their preferences. (to be implemented)
-   Remember to validate the data coming from the user. (OK)
-   For this project, you can store the events in an array on the frontend.

## Known Issues

-   When adding new events an orange dot should be displayed at the bottom. This is working only for events set by default but not for new events. the function handleAddEvent should create a new event (its ok), and a new array days with hasEvents attribute should be created (this is not working).

-   What will happen when there are two events on the same day?

## Future Goals

Given more time, the following features could be added:

-   Add functionality so the user is able to filter
-   Implement day, week, and month views of the calendar.
-   Add functionality to the modal for creating and editing events.
-   Improve styling and responsiveness of the calendar interface.
-   Implement testing

## Struggles and Challenges

During the development process, the following challenges were encountered:

-   Struggle 1: TESTING - Installing libraries and getting them properly working. I had differences in my previous versions, and I struggled to configure `jest.config.js` and `package.json`.

-   Struggle 2: SCSS - At first, I didn't install SCSS properly, so I had issues formatting my code with SCSS. After reading the documentation, I found out that I hadn't installed it correctly initially.

-   Struggle 3: FORM Validation - I decided to use Zod Library as I found it interesting to apply for this project. I started with useRef hook, then I changed to useState to update and validate but finally I decided to use a combinatino of useForm hook and Zod. (May change in the future but it works correctly for now)

-   Struggle 4: Event Display - I decided to display an orange dot below the date when there is an event on that date. This dot is displaying only for events created by default when the page is loaded, but the function to update the dates isn't working as expected.

## Licensing Details

This project is released under the [MIT License](LICENSE.md).
