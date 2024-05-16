import './Services.css'
import ServicesCard from './services-components/ServicesCard'

function Services() {

    const services = [
        {
            imgSrc: './assets/planning.jpeg',
            serviceTitle: "Planning",
            description: "Developing strategies, determining materials and labor costs."
        },
        {
            imgSrc: '/assets/construction.jpeg',
            serviceTitle: "Construction",
            description: "Managing construction projects and ensuring that they are scheduled and built in accordance with plans."
        },
        {
            imgSrc: '/assets/building.jpg',
            serviceTitle: "Renovation",
            description: " Improving a broken, damaged, or outdated structure."
        }
    ]

    const servicesCard = services.map((card) => {
        return <ServicesCard key={card.imgSrc} imgSrc={card.imgSrc} serviceTitle={card.serviceTitle} description={card.description} />
    })

    return (
        <section id='services'>
            {servicesCard}
        </section>
    )
}

export default Services