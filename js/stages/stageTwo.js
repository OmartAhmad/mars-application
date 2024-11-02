// components/StageTwo.js
import { useState, useEffect } from 'react';

const StageTwo = ({ nextStage, prevStage }) => {
    const [departureDate, setDepartureDate] = useState(localStorage.getItem('departureDate') || '');
    const [returnDate, setReturnDate] = useState(localStorage.getItem('returnDate') || '');
    const [accommodation, setAccommodation] = useState(localStorage.getItem('accommodation') || 'spaceHotel');
    const [specialRequests, setSpecialRequests] = useState(localStorage.getItem('specialRequests') || '');

    useEffect(() => {
        localStorage.setItem('departureDate', departureDate);
        localStorage.setItem('returnDate', returnDate);
        localStorage.setItem('accommodation', accommodation);
        localStorage.setItem('specialRequests', specialRequests);
    }, [departureDate, returnDate, accommodation, specialRequests]);

    const handleNext = () => {
        if (departureDate && returnDate) {
            nextStage();
        } else {
            alert("Please fill out required fields");
        }
    };

    return (
        <div id="container">
            <h2>Travel Preferences</h2>
            <label>Departure Date:
                <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            </label><br />
            <label>Return Date:
                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
            </label><br />
            <label>Accommodation Preference:
                <select value={accommodation} onChange={(e) => setAccommodation(e.target.value)}>
                    <option value="spaceHotel">Space Hotel</option>
                    <option value="martianBase">Martian Base</option>
                </select>
            </label><br />
            <label>Special Requests:
                <input type="text" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
            </label><br />
            <button onClick={prevStage}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default StageTwo;
