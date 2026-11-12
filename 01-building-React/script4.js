console.log(React);
console.log(ReactDOM);

const heading = React.createElement('h1', {
    className: 'heading',
    id: 'heading',
    style: {
        color: 'green',
        fontSize: '16px',
    },
}, 'Hello World');
console.dir(heading); // It is not a real DOM element, it is a React element ( which is nothing but a JS object with type, props and children)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

// Observations :
// 1. React.createElement returns a React element and it does not create a real DOM element.
// 2. ReactDOM.render is a function that actually creates a real DOM element and does the DOM manipulation.