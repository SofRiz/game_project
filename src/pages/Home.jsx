import { dataGame } from "../utils/data";
import Background from "../components/Background/Background";

const Home = () => {
  return (
    <> 
    <Background id="bgparticles" />
      <h1>{dataGame.title}</h1>
      
     
    </>
  );
};

export default Home;
