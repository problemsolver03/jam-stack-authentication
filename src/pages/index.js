import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const App = () => {
  return (
    <Layout>
      <h1>Dashboard App</h1>
      <Link to="/dashboard">Go to dashboard</Link>
    </Layout>
  );
};

export default App;
