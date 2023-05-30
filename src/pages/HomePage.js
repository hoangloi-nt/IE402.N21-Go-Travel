import React from "react";
import Layout from "components/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="h-screen bg-slate-600">
        <h1 className="pt-10 mx-auto text-2xl font-bold text-center text-white">
          Home Page
        </h1>
      </div>
    </Layout>
  );
};

export default HomePage;
