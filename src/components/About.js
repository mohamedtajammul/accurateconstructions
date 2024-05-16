import './About.css'
import AboutData from './about-components/AboutData'

function About() {
    return (
        <section id="about">
            <div className="about__container-1">
                <h2 className="about__container-1--heading">For more than a decade we have <br /> been helping people get their <br /> dream Home</h2>
                <div className="about__container-1--data">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, a.</p> */}
                    <AboutData heading="15+" para="Years of Experience" />
                    <AboutData heading="300+" para="Buildings" />
                    <AboutData heading="250+" para="Happy Clients" />
                </div>
            </div>
            <div className="about__container-2">
                <div className="about__container-2--img-wrapper">
                    <div className="about__container-2--img">
                        <img src="./assets/gallery5.jpeg" alt="" />
                    </div>
                </div>
                <div className="about__container-2--detail-wrapper">
                    <h3>Why our company?</h3>
                    <p>Accurate Constructions is one of the reputed real-estate brands of the country with 15 plus years of legacy in the Property Development arena. We operate in major cities and towns across India including Bangalore, Chennai, Mysore, Vellore, Ambur etc... Accurate Constructions covers all apt portfolios of property development domain and their establishments spread across retail, commercial, residential, leisure and hotel segments. We are professionally providing an in-house home construction service for client ranging from moderate to premium.</p>
                </div>
            </div>
        </section>
    )
}

export default About