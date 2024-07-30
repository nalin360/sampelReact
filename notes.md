# useEffect

## 1. Skipping the argument:

We may skip passing the second argument. If we choose to do so then our hook will trigger the callback function on each re-render of the component. Any unrelated state change will trigger the callback function to execute inducing bugs, and compromising performance.

## **2. Empty Array ( [] )**

An empty array simply means that there are no dependencies that will trigger the callback within it. Our code inside the callback will run once when the component gets registered, and that is it. The **useEffect** hook acts like **componentDidMount** method if an empty array is passed as the dependency array.

## **3. Array of dependencies ( [variable1, variable2] )**

This might be the most common form used with  **useEffect** . We pass an array filled with all the dependencies that should trigger the callback function to run. Change in any of the variable in the list will execute the callback.

Often these include the states that have been created using **useState** hook.

```javascript
const [x, setX] = useState();
const [y, setY] = useState();useEffect(() => {
    // Runs if x or y changes
}, [x, y])
```

# useCallback

According to the [React Documentation for the useCallback hook](https://reactjs.org/docs/hooks-reference.html#usecallback), the hook itself:

> *“Returns a *[*memoized*](https://en.wikipedia.org/wiki/Memoization)* callback.*

Some common use cases for `useCallback` include:

* Event handlers (e.g., `onClick`, `onChange`)
* Functions passed to context providers
* Functions passed as props to memoized child components

  As bellow code does not have dependencies bexcause there is no external state or props are there
* ```javascript
     const handleChange = useCallback( (e, type) => {

          dispatch({
              type: type,
              payload: e.target.value
          })

      },[])
  ```

# useMemo

Some common use cases for `useMemo` include:

* Filtering or sorting large lists of data
* Performing complex mathematical calculations
* Generating unique IDs or tokens

> For both `useMemo` and `useCallback` (which is essentially just a special case of `useMemo`), if the second argument is an empty array, the value will be memoized once and always returned.

> If the second argument is omitted, the value will never be memoized, and the `useCallback` and the `useMemo` doesn't do anything.

# useRef

# React hook form

```javascript
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

* `register` is a function provided by the `useForm` hook. We can assign it to each input field so that the `react-hook-form` can track the changes for the input field value
* `handleSubmit` is the function we can call when the form is submitted
* `errors` is a nested property in the `formState` object which will contain the validation errors, if any

## validation

React Hook Form makes form validation easy by aligning with the existing [HTML standard for form validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

List of validation rules supported:

* required
* min
* max
* minLength
* maxLength
* pattern
* validate

You can read more detail on each rule in the [register section](https://www.react-hook-form.com/api#register).

---

# BluckUserLabEnv

1. Component Mount: The For m2 component is mounted, and the initial state is initialized with the initialState object.
2. Initial Rendering: The component is rendered for the first time, displaying the initial state values and input fields.
3. useEffect Hook: The useEffect hook is executed when the component mounts or when one of the following conditions change: state.amount, state.timePeriod, or state.expectedResturnRate change. This hook calculates the Sip values (InvestedAmount, estimatedReturns, and Totalvalue) using the calculateSip function.
4. State Update: The calculated values are then updated in the state using the dispatch function, which is created using the useReducer hook. The updated state is: InvestedAmount, estimatedReturns, and Totalvalue.
5. Re-Rendering: The component re-renders to reflect the updated state values. This triggers a re-render of the component.
6. Input Field Changes: When the user interacts with an input field (e.g., selects a country, enters a name, etc.), the handleChange function is called. This function updates the corresponding state value using the dispatch function.
7. State Update: The updated state values are propagated back to the component, which triggers a re-render.
8. Re-Rendering: The component re-renders again to reflect the updated state values.

## The flow of execution is:

Mounting -> Initial Rendering -> useEffect Hook -> State Update -> Re-Rendering -> Input Field Change -> State Update -> Re-Rendering
This process repeats as long as the component is mounted and the state values change.

Initialization

The component BluckUserLabEnv is initialized with the useReducer hook, which initializes the state and dispatch

variables.

state is set to the initialState array, which contains an initial user object.
dispatch is the function that updates the state.
The useEffect hook is called with an empty dependency array ([]), which means it will only run once when the

component mounts.

The effect function is called, which dispatches an action { type: 'initialize', payload: initialState } to initialize the state.

Reducer

The reducer function reducerEnv is called with the current state and the dispatched action. It updates the state based on the type of action.

Actions

initialize: The action is dispatched to initialize the state. The reducer filters the csv data to remove existing users and returns the filtered array as the new state.
updated_user: The action is dispatched when a user's lab environment is updated. The reducer updates the specific user object in the state array by mapping over the state, finding the user with the matching index, and updating its lab_env property.
Components

The component uses the map function to render a UserComponent for each user in the state array.
Each UserComponent is passed the handleLabEnvChange function as a prop, which allows the component to update the user's lab environment by dispatching an updated_user action when the value changes.
Flow of Execution

Here's a step-by-step overview of the flow of execution:

the initial state is initialized with the initialState object.

The component mounts, and the useEffect hook runs, dispatching the initialize action.
The reducer is called with the initialize action, filtering the csv data, and returning the filtered array as the new state.
The component renders the UserComponent for each user in the state array.
The user interacts with the UI, changing the value of a user's lab environment.
The handleLabEnvChange function is called, which dispatches an updated_user action with the updated value and index.
The reducer is called with the updated_user action, updating the specific user object in the state array.
The component re-renders with the updated state, reflecting the changes to the user's lab environment.

We use useMemo to memoize the result of the CSV data filtering, so that it's only run once, when the component is rendered.
We use useCallback to memoize the handleLabEnvChange function, so that it's not recreated on every render.

In summary, the component initializes the state with the useReducer hook, dispatches an initialize action to filter the csv data, and then updates the state and re-renders the component when the user interacts with the UI.
