# React Study

## React Elements
 - React elements are immutable. 
 - Once you create an element, you can’t change its children or attributes. 
 - The only way to update the UI is to create a new element, and pass it to ReactDOM.render().
 - React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

---

## Function Components
- they are literally JavaScript functions.
- ```JSX
  function Welcome(props) {
   return <h1>Hello, {props.name}</h1>;
  }
  ```

---

## Props
- When React sees an element representing a user-defined component, it passes JSX attributes to this component as an object. this object is 'props'.
- ```JSX
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
  ```
- Recommend naming props from the component’s own point of view rather than the context in which it is being used.
- Props are read-only.
- 
---

## Code Conventions
- Always start component names with a capital letter
  : React treats components starting with lowercase letters as DOM tags. For example, ```<div />``` represents an HTML div tag, but ```<Welcome />``` represents a component and requires Welcome to be in scope.

---

## Components
- All React components must act like **pure functions** with respect to their props. Whether you declare a component as a function or a class, it must never modify its own props. 

---

## State
- State is similar to props, but it is private and fully controlled by the component.
- Do not modify state directly. Use ```setState()```. The only place where you can assign ```this.state``` is the constructor. Because ```this.props``` and ```this.state``` may be updated asynchronously, you should not rely on their values for calculating the next state.
- Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

---

## Class Fields
- You are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow.

---

## Lifecycle
- ```componentDidMount()```: When the component is rendered to the DOM for the firs time. 'mounting' in React.
- ```componentWillUnmount()```: When the DOM produced by the component is removed. 'unmounting' in React. it’s very important to free up resources taken by the components when they are destroyed.


---

## Eject
- ```create-react-app``` encapsulates all of the npm modules it is using internally, so that ```package.json``` will be very clean and simple without you having to worry about it. 
- It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
- ```npm run eject```
- This is a one-way operation. Once you eject, you can’t go back!
- Before eject, need to commit all your code.