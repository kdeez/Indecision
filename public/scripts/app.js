'use strict';

var object = {
  title: 'Indecision App',
  subtitle: 'woooooo',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    object.title,
    '  '
  ),
  object.subtitle && React.createElement(
    'p',
    null,
    ' ',
    object.subtitle,
    ' '
  ),
  React.createElement(
    'p',
    null,
    object.options.length > 0 ? "Here are your options" : 'No options',
    ' '
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      ' List '
    ),
    React.createElement(
      'li',
      null,
      ' List2'
    )
  )
);

var user = {
  name: "Kevin",
  age: '17',
  location: 'Los Angeles'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      ' Location :',
      location,
      ' '
    );
  }
}

/*var template2 = (
  <div>
    <h1> {user.name ? user.name : 'Anonymous'} </h1>
    {user.age >= 18 && <p> Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);*/

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
