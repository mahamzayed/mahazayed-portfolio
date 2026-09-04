import Header from '../components/Header';
import '../styles/Home.css'

const Home = () => {
    return (
        <>
        <Header />
         <div className="container">
        <section>
          <h1 className="home-title">Hi. I'm Maha.</h1>
          <h1 className="home-subtitle">Software Engineer</h1>
          <h1 className="home-subtitle__last">& Digital Artist.</h1>
        </section>
        </div>
        </>
       
    );
};

export default Home;