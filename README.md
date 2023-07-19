The component can be tested here: https://pasqal-fe.web.app/

# possible improvements
- Adding tests to make sure that the component behaves as expected
- Allow to navigate via keyboard (ex. moving up/down, 'enter' to select, 'esc' to close the dropdown) for better accessibility
- Data is already structured, the dropdown list UX could be improved to better display data at different levels

# frontend-interview

We are going to create a smart multi-select component.

In real life, data would be served by an API. For the sake of the exercise, we will mock the server calls with [getData](./src/api.ts).

We provide you with two [icons](./src/icons) that you can use in this exercise. You can add any additional icon you need there, and you should be able to use them as react components thanks to the [react-svg-loader](https://github.com/boopathi/react-svg-loader).

Here are some rules to follow:

- Frameworks and libraries are tolerated as long as they do not help proving the features requested by the exercise.
- React functional components only, no classes.
- Cross-browser compatibility is not required for this exercise. You can specify which browser we should view your work in.
- The files provided to you are written in Typescript, but you can totally do the exercise in Javascript. You don't even need to change anything, JS imports should work fine from index.tsx.

In order to reach the target component, this exercise is split in 3 progressive steps. Feel free to create one commit per step in your final solution.

## Step 1: Simple select

Create a dropdown component to let users select one item from the list. You can insert your component in the `Root` component, and use `setSelectedItems` as a handler.

Feel free to change anything you need to in any of the provided files.

![design step 1](./docs/designs-1.png)

## Step 2: Multi-select

Let users select multiple items from the list. The items should be displayed as tags in the input.

![design step 2](./docs/designs-2.png)

## Step 3: Autocomplete

Sometimes, the lists of options can be very long. To make the user's life easier, we will add a search bar to the component. Whenever the user enters a string, the list of options will be filtered to match that string.

![desig step 3](./docs/designs-3.png)
