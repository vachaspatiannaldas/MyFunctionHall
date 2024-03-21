import React from 'react';

function Test() {
  const usertype = 'admin'; // Replace with the actual usertype from your logic

  // Based on usertype, decide what content to render in the sidebar
  let sidebarContent = null;
  if (usertype === 'admin') {
    sidebarContent = (
      <React.Fragment>
        <h1>Admin</h1>
        {/* Add admin sidebar content here */}
      </React.Fragment>
    );
  } else if (usertype === 'vendor') {
    sidebarContent = (
      <React.Fragment>
        <h1>Vendor</h1>
        {/* Add vendor sidebar content here */}
      </React.Fragment>
    );
  } else {
    console.error("Invalid usertype:", usertype);
    return null;
  }

  return (
    <div className="vendor-sidebar">
      {/* Common sidebar elements */}
      {sidebarContent}
    </div>
  );
}

export default Test;
