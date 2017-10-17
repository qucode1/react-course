// Higher Order Component (HOC) - A component that renders another component
// Reuse Code
// Render hijacking
// Prop manipulation
// Abstart state

import React from "react";
import ReactDom from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private Info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You are not authenticated. Please Log in!</p>
      )}
    </div>
  );
};

// requireAuthentication
//

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDom.render(
  // <AdminInfo isAdmin={true} info="These are the details" />,
  <AuthInfo isAuthenticated={true} info="These are the details" />,
  document.querySelector("#app")
);
