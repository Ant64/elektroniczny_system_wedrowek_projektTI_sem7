import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'

function TripList() {

    const [trips, setTrips] = useState([{
        name: '',
        dateStart: '',
        days: '',
        placeStart: '',
        placeStop: '',
        distance: '',
        description: '',
        photo1: '',
        photo2: '',
        photo3: '',
        photo4: '',
        photo5: '',
        photo6: '',
        movie: '',
    }])

    useEffect(() => {
        fetch("/tripList").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setTrips(jsonRes));
    })

    //Zmienna i metoda do generowania odpowiedniej ilosci carousel - in progress
    // let photoArr = [trips.photo1, trips.photo2, trips.photo3, trips.photo4, trips.photo5, trips.photo6];
    // function generateCaro(array){

    //     let CaroBuffor = <></>;
        
    //     for(let i=0; i<array.lenth; i++){
    //         if(array[i] === '')
    //         {
    //             array.splice(i, 1);
    //         }
    //     }
        
    //     for(let i=0; i<array.lenth; i++){
    //         CaroBuffor +=
    //         <Carousel.Item>
    //             <img
    //             className="d-block w-100"
    //             height="720px"
    //             width="1280px"
    //             src={array[i]}
    //             alt="First slide"
    //             />
    //         </Carousel.Item>
    //     }

    //     return(
    //         <>
    //             {CaroBuffor}
    //         </>
    //     );
    //     {console.log(CaroBuffor)}
    // }

    return (
        
        <div className="container">
            <h1>Lista wycieczek</h1>
            {trips.map(trip =>
            <div>
                <h1>================{trip.name}================</h1>
                <p>data rozpoczęcia: {trip.dateStart}</p>
                <p>ilość dni: {trip.days}</p>
                <p>miejsce rozpoczęcia: {trip.placeStart}</p>
                <p>miejsce zakończenia: {trip.placeStop}</p>
                <p>dystans [km]: {trip.distance}</p>
                <p>krótki opis: {trip.description}</p>

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="720px"
                        width="1280px"
                        src={trip.photo1}
                        alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="720px"
                        width="1280px"
                        src={trip.photo2}
                        alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="720px"
                        width="1280px"
                        src={trip.photo3}
                        alt="third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="720px"
                        width="1280px"
                        src={trip.photo4}
                        alt="forth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="720px"
                        width="1280px"
                        src={trip.photo5}
                        alt="fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="720px"
                        width="1280px"
                        src={trip.photo6}
                        alt="sixth slide"
                        />
                    </Carousel.Item>
                </Carousel>
                
                <div className="Container" dangerouslySetInnerHTML={{__html: trip.movie}}></div>
                <br></br><br></br>
            </div>
            )}
        </div>
    )
}

export default TripList
