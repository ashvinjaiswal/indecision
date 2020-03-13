'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'this is inforamation'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'first item'
        ),
        React.createElement(
            'li',
            null,
            'second item'
        )
    )
);

var user = {
    name: 'Ashvin Jaiswal',
    age: 32,
    location: 'India'
};

//conditional template
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'unknown';
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
