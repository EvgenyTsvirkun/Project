const ReactDOMServer = require('react-dom/server');
const React = require('react');

module.exports = function renderTemplate(component, props, res) {
  const home = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
};
