const React = require('react');
const Layout = require('./Layout');

module.exports = function Home(props) {
  console.log(props);
  return (
    <Layout>
      <div className="greetings">
        <p className="page">Welcome to yours menu!</p>
      </div>
    </Layout>
  );
};
