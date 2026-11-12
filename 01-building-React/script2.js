

const root = document.getElementById('root');

const heading = document.createElement('h1');
heading.textContent = 'Hello World';
heading.className = 'heading';
heading.id = 'heading';

// We should not do this because browser already has some properties in the style object so we cant replace it entirely.
// heading.style = {
//     color: 'yellow',
//     fontSize: '16px',
// }

// Instead we can do like below :
heading.style.color = 'yellow';
heading.style.fontSize = '16px';


const heading2 = document.createElement('h2');
heading2.textContent = 'Hello, how are you?';
heading2.className = 'heading';
heading2.id = 'heading';
heading2.style.color = 'blue';
heading2.style.fontSize = '16px';

root.append(heading, heading2)

/*
Problems with this approach:
- Code becomes messy and hard to maintain and create new elements.
- Code repitition => Solution: Functions .
*/