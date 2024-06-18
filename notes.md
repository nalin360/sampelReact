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

---

1. Component Mount: The Form2 component is mounted, and the initial state is initialized with the initialState object.
2. Initial Rendering: The component is rendered for the first time, displaying the initial state values and input fields.
3. useEffect Hook: The useEffect hook is executed when the component mounts or when one of the following conditions change: state.amount, state.timePeriod, or state.expectedResturnRate change. This hook calculates the Sip values (InvestedAmount, estimatedReturns, and Totalvalue) using the calculateSip function.
4. State Update: The calculated values are then updated in the state using the dispatch function, which is created using the useReducer hook. The updated state is: InvestedAmount, estimatedReturns, and Totalvalue.
5. Re-Rendering: The component re-renders to reflect the updated state values. This triggers a re-render of the component.
6. Input Field Changes: When the user interacts with an input field (e.g., selects a country, enters a name, etc.), the handleChange function is called. This function updates the corresponding state value using the dispatch function.
7. State Update: The updated state values are propagated back to the component, which triggers a re-render.
8. Re-Rendering: The component re-renders again to reflect the updated state values.

The flow of execution is:

Mounting -> Initial Rendering -> useEffect Hook -> State Update -> Re-Rendering -> Input Field Change -> State Update -> Re-Rendering
This process repeats as long as the component is mounted and the state values change.
