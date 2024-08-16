import Layout from "../reusable-ui/Layout";
import { Outlet } from "react-router-dom";

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default RouterLayout;
