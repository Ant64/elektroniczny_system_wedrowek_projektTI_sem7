import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function ItemGallery() {
    
    return (
        
        <div className="container">
            <h1>To jest test galerii</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    // src='/media/tripImages/test/diTrevi.jpg'
                    src='https://www.lutherchips.com/wp-content/uploads/2019/05/beautiful-hawaii-from-the-sky-900x600.jpg'
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='/media/tripImages/test/coloseum.jpg'
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ItemGallery
