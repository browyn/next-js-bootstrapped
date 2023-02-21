import { useState, useRef, useEffect } from "react";

/**
 * useToggle is a custom hook for managing a toggle state in a React component.
 * It allows a developer to toggle a boolean state variable and manage click events on the page.
 *
 * @param {string} eventType - The event type that triggers the toggle state to change (e.g. "click", "mousedown", etc.)
 * @returns {Object} An object with the following properties:
 *  - toggle {boolean}: the current value of the toggle state
 *  - toggleRef {Object}: a ref to the DOM element that controls the toggle state
 *  - toggledElementRef {Object}: a ref to the DOM element that is affected by the toggle state
 *  - handleToggle {Function}: a function for toggling the toggle state.
 */
const useToggle = (eventType = "click") => {
  // Create a state variable `toggle` and a function `setToggle` for updating the state
  const [toggle, setToggle] = useState(false);

  // Create refs for DOM elements that will be controlled by the toggle state
  const toggleRef = useRef(null);
  const toggledElementRef = useRef(null);

  // Add a click event listener to the window object that listens for clicks outside of the toggleRef and toggledElementRef elements
  useEffect(() => {
    window.addEventListener(eventType, handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener(eventType, handleClickOutside);
    };
  }, []);

  // Function to handle clicks outside of the toggleRef and toggledElementRef elements
  const handleClickOutside = (e) => {
    if (toggledElementRef) {
      // If both toggleRef and toggledElementRef exist, check if the target of the click is outside of both elements
      if (
        toggleRef &&
        !toggleRef?.current?.contains(e.target) &&
        !toggledElementRef?.current?.contains(e.target)
      ) {
        // If the target is outside of both elements, set the toggle state to false
        setToggle(false);
      }
    } else {
      // If only toggleRef exists, check if the target of the click is outside of toggleRef
      if (toggleRef && !toggleRef.current.contains(e.target)) {
        setToggle(false);
      }
    }
  };

  // Function to toggle the toggle state
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Return the toggle state, toggleRef, toggledElementRef, and handleToggle functions
  return { toggle, toggleRef, toggledElementRef, handleToggle };
};

export default useToggle;
