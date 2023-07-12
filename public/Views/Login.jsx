const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/login.js" />
      <form action="/login" method="POST" className="loginForm" name="loginForm">
        <div className="container">
          <div className="intro-text">
            <h1>Enter to the site</h1>
          </div>
          <div className="mb-3">
            <input
              placeholder="full name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="fullname"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="login"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="login"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="email address"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};
