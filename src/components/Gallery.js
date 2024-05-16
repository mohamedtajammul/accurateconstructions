import { useRef } from 'react'
import './Gallery.css'

function Gallery() {

    const imgSrc = [
        "./assets/gallery1.jpeg",
        "./assets/gallery2.jpeg",
        "./assets/gallery3.jpeg",
        "./assets/gallery4.jpeg",
        "./assets/gallery5.jpeg",
        "./assets/gallery6.jpeg",
        "./assets/gallery7.jpeg",
        "./assets/gallery8.jpeg",
        "./assets/gallery9.jpeg",
    ]

    const myModalRef = useRef()
    const modalImgRef = useRef()

    function clickHandler(e) {
        myModalRef.current.style.display = 'block'
        modalImgRef.current.src = e.target.src
    }

    function closeHandler(e) {
        myModalRef.current.style.display = 'none'
    }

    return (
        <section id='gallery'>
            <div className="grid-container">
                {
                    imgSrc.map((ele, index) => {
                        return <div key={Math.random()} className={"grid-container-" + (index + 1)}>
                            <img onClick={clickHandler} src={ele} alt="" />
                        </div>
                    })
                }
                <div ref={myModalRef} id="myModal" className="modal">
                    <span className="close" onClick={closeHandler}>&times;</span>
                    <div className='img-container'>
                        <img ref={modalImgRef} className="modal-content" id="img01" />
                    </div>
                </div>
                {/* <div className="grid-container-1"><img className="images" src="./assets/gallery1.jpeg" alt="" /></div>
                <div className="grid-container-2"><img className="images" src="./assets/gallery3.jpeg" alt="" /></div>
                <div className="grid-container-3"><img className="images" src="./assets/gallery4.jpeg" alt="" /></div>
                <div className="grid-container-4"><img className="images" src="./assets/gallery5.jpeg" alt="" /></div>
                <div className="grid-container-5"><img className="images" src="./assets/gallery9.jpeg" alt="" /></div>
                <div className="grid-container-6"><img className="images" src="./assets/gallery2.jpeg" alt="" /></div>
                <div className="grid-container-7"><img className="images" src="./assets/gallery7.jpeg" alt="" /></div>
                <div className="grid-container-8"><img className="images" src="./assets/gallery8.jpeg" alt="" /></div>
                <div className="grid-container-9"><img className="images" src="./assets/gallery1.jpeg" alt="" /></div> */}
            </div >
        </section >
    )
}

export default Gallery