import '../common.css'
import './Home.css'

function Home() {
    return (
        <section id="home">
            <div className="home__container--text">
                <h1 className="home__container-gray--heading">Your dream,<br /> our passion.</h1>
                <p className="home__container-gray--para">We will build your dream home at affordable prices.</p>
                <a href="mailto:tajammul183@gmail.com">
                    <p>Contact</p>
                </a>
            </div>
            <div className="home__container-gray"></div>
            <div className="home__container-img">
                <img src="./assets/building.jpg" alt="" />
            </div>
        </section>
    )
}

export default Home