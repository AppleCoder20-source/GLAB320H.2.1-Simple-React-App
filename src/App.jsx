import Header from "./components/Header";
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is a React Application!" />
      <Content color="red" text="Working with props for the lab!" />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;