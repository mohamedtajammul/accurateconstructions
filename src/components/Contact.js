import './Contact.css'

function Contact() {
    return (
        <section id='contact'>
            <div className="contact__container-1">
                <h2>Need a consultant? <br /> Contact us and we <br /> will help you!</h2>
            </div>
            <div className="contact__container-2">
                <input type="text" placeholder='Your name' />
                <input type="email" placeholder='Email Address' />
                <button>Send Now</button>
            </div>
        </section>
    )
}

export default Contact