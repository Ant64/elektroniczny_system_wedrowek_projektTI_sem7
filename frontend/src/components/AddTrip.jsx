import React, {useState} from 'react'
import axios from "axios";

function AddTrip() {

    // add url to photoX attr sample https://www.lutherchips.com/wp-content/uploads/2019/05/beautiful-hawaii-from-the-sky-900x600.jpg
    // add path of photos to object, add to db

    const [input, setInput] = useState({
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
        // photoPath: {photo1: '', photo2: '', photo3:'', photo4:'', photo5: '', photo6: ''},
    })

    function handleChange(event) {
        // console.log(event.target);
        const {name, value} = event.target

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        // console.log(input);

        const newTrip = {
            name: input.name,
            dateStart: input.dateStart,
            days: input.days,
            placeStart: input.placeStart,
            placeStop: input.placeStop,
            distance: input.distance,
            description: input.description,
            photo1: input.photo1,
            photo2: input.photo2,
            photo3: input.photo3,
            photo4: input.photo4,
            photo5: input.photo5,
            photo6: input.photo6,
            movie: input.movie,
        }

        axios.post('http://localhost:3001/create', newTrip)
    }

    return (
        <div className="container">
            <h1>Formularz dodawania wycieczki</h1>

            <form>
                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="name" placeholder="tytuł" 
                    value={input.name}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="dateStart" placeholder="data rozpoczęcia" 
                    value={input.dateStart}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="days" placeholder="czas trwania [dni]" 
                    value={input.days}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="placeStart" placeholder="miejsce rozpoczęcia" 
                    value={input.placeStart}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="placeStop" placeholder="miejsce zakończenia" 
                    value={input.placeStop}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="distance" placeholder="dystans [km]" 
                    value={input.distance}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <textarea 
                    onChange={handleChange} 
                    name="description" 
                    value={input.description}
                    placeholder="opis" 
                    autoComplete="off" 
                    className='form-control'>
                    </textarea>
                </div>

                <h4>Zdjęcia [URL]</h4>
                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="photo1" placeholder="url" 
                    value={input.photo1}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="photo2" placeholder="url" 
                    value={input.photo2}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="photo3" placeholder="url" 
                    value={input.photo3}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="photo4" placeholder="url" 
                    value={input.photo4}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="photo5" placeholder="url" 
                    value={input.photo5}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="photo6" placeholder="url" 
                    value={input.photo6}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <h4>Film Youtube [ PPM -> "skopiuj kod do umieszczenia na stronie" ]</h4>
                <div className='form-group'>
                    <input 
                    onChange={handleChange} 
                    name="movie" placeholder="url" 
                    value={input.movie}
                    autoComplete="off" 
                    className='form-control'>
                    </input>
                </div>

                <button onClick={handleClick} className="btn btn-large btn-info">Dodaj</button>
                <h1>.</h1>
            </form>
        </div>
    )
}

export default AddTrip
