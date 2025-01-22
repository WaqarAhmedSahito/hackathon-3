import Cloth from "./component/Cloth";
import Featured from "./component/Featured";
import Flook from "./component/Flook";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hello from "./component/Hello";
import Lastly from "./component/Lastly";
import Shoe from "./component/Shoe";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hello/>
      <Flook/>
      <Shoe/>
      <Featured/>
      <Cloth/>
      <Lastly/>
      <Footer/>
    </div>
  );
}
