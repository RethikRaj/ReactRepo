


const ReactTwo = {
    createElement : function (tag, children, attributes) {
        const ReactElement = {
            tag: tag,
            props: {
                ...attributes,
                children: children,
            }
        }
        return ReactElement;
    }
}

const ReactDomTwo = {
    render : function (ReactElement, parent) {
        const realDOMElement = document.createElement(ReactElement.tag)
        for (const key in ReactElement.props) {
            if (key === "style") {
                Object.assign(realDOMElement.style, ReactElement.props[key]);
            }
            else if (key === "children") {
                realDOMElement.textContent = ReactElement.props[key];
            }
            else {
                realDOMElement[key] = ReactElement.props[key];
            }
        }
        parent.innerHTML = ''; // This is done to clear the parent before rendering the new child just like how ReactDom.render works.
        parent.append(realDOMElement)
    }
}

const heading = ReactTwo.createElement('h1', 'Hello World', {
    className: 'heading',
    id: 'heading',
    style: {
        color: 'green',
        fontSize: '16px',
    },
});
console.dir(heading);

const heading2 = ReactTwo.createElement('h2', 'Hello, how are you?', {
    className: 'heading',
    id: 'heading',
    style: {
        color: 'blue',
        fontSize: '16px',
    },
});

const root = document.getElementById('root');

ReactDomTwo.render(heading, root);
// ReactDomTwo.render(heading2, root);