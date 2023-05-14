# Learning-React

<!-- 
Notes:
- in package.json "devDependencies" is only for local dev
- .ts is used for plain typescript files and .tsx is used for react components 
- File structure:
    - public folder is for publicly visible assets


- for the first-react-app tutorial I'll use function based components since
  that is what is popular now due to being more concise.
  Class based components can be found in older code


- `export default` can be used on a single value per module to create a default export
  other exports must be named exports and need to be put in '{ }' when exporting/importing
  while the default export doesnt 

- React only allows a component to return a single html element
 if want to return multiple elements, can import Fragment from 'react' and wrap your 
 elements in that or just put empty angle brackets - '<>' and react will interperet that
 as a fragment

 - In react, 'useState' is a hook functions that returns a length 2 arr
   arr[0] = a variable, arr[1] = functions to change the variable
   once the function to change the variable is called, it will change the variable
   and notify react to update the DOM wherever the variable was used.
  |
  ==> EACH COMPONENT HAS ITS OWN STATE! 
     (eg if I create two ListGroup components, the selectedItemIndex will be separate for each)

- props are a way of passing data to components (like args to a function)
- in JS, instead of defining an interface like here, we import PropTypes and define types that way
-->