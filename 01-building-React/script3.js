
// attributes = { 
//     className: 'container',
//     id: 'root',
//     style: {
//         color: 'red',
//         fontSize: '16px',
//     },
// }

const ReactOne = {
    createElement : function (tag, children, attributes) {
        const element = document.createElement(tag);

        element.textContent = children;

        for (const key in attributes) {
            if (key === "style") {
                Object.assign(element.style, attributes[key]);
            }
            else {
                element[key] = attributes[key];
            }
        }

        return element;
    }
}

const ReactDomOne = {
    render : function (child, parent) {
        parent.innerHTML = ''; // This is done to clear the parent before rendering the new child just like how ReactDom.render works.
        parent.append(child);
    }
}

const heading = ReactOne.createElement('h1', 'Hello World', {
    className: 'heading',
    id: 'heading',
    style: {
        color: 'green',
        fontSize: '16px',
    },
});
console.dir(heading);

const heading2 = ReactOne.createElement('h2', 'Hello, how are you?', {
    className: 'heading',
    id: 'heading',
    style: {
        color: 'blue',
        fontSize: '16px',
    },
});

const root = document.getElementById('root');

ReactDomOne.render(heading, root);
ReactDomOne.render(heading2, root);

/*
Problems with this approach:
1. createElement creates a new real DOM element and it is heavy because it has many properties and methods. 
*/