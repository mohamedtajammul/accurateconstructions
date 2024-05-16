
function ServicesCard(props) {
    return (
        <div className="services__card">
            <img src={props.imgSrc} alt="" />
            <h3>{props.serviceTitle}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ServicesCard