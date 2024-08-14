import Footer from "./reusable-ui/Footer";
import Header from "./reusable-ui/Header";
import Layout from "./reusable-ui/Layout";

function App() {
  return (
    <main className="">
      <Header />
      <Layout>
        {" "}
        <div className="">Shop Rizza Today!</div>
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
