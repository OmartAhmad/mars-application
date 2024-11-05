// components/StageTwo.js
import { useState, useEffect } from 'react';

const StageTwo = ({ nextStage, prevStage }) => {
    const [departureDate, setDepartureDate] = useState(localStorage.getItem('departureDate') || '');
    const [returnDate, setReturnDate] = useState(localStorage.getItem('returnDate') || '');
    const [accommodation, setAccommodation] = useState(localStorage.getItem('accommodation') || 'spaceHotel');
    const [specialRequests, setSpecialRequests] = useState(localStorage.getItem('specialRequests') || '');

    const [errors, setErrors] = useState({
        departureDate: false,
        returnDate: false,
        accommodation: false,
        specialRequests: false,
    });

    useEffect(() => {
        localStorage.setItem('departureDate', departureDate);
        localStorage.setItem('returnDate', returnDate);
        localStorage.setItem('accommodation', accommodation);
        localStorage.setItem('specialRequests', specialRequests);
    }, [departureDate, returnDate, accommodation, specialRequests]);

    const handleNext = () => {
        const newErrors = {
            departureDate: !departureDate,
            returnDate: !returnDate,
            accommodation: !accommodation,
            specialRequests: !specialRequests,
        };

        setErrors(newErrors);

        // Proceed if there are no errors
        if (!Object.values(newErrors).includes(true)) {
            nextStage();
        }
    };

    return (
        <div id="main-container">
            {/* Text Section */}
            <div id="text-section">
                <h1>Customize Your Mars Expedition</h1>
                <p>Shape your journey with preferred travel and accommodation choices.</p>
                <p><strong>Let us know your ideal timeline and living arrangements for a memorable stay.</strong></p>
                <ul>
                <li>Pick your preferred departure and return dates</li>
                <li>Choose between a Space Hotel or Martian Base accommodation</li>
                <li>Share any specific requests to enhance your journey</li>
                </ul>
            </div>

            {/* Form Section */}
            <div id="form-container">
                <h2>Travel Preferences</h2>

                <label>Departure Date: (required)
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                    {errors.departureDate && <span className="isError">Required</span>}
                </label>

                <label>Return Date: (required)
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                    {errors.returnDate && <span className="isError">Required</span>}
                </label>

                <label>Accommodation Preference: (required)
                    <select
                        value={accommodation}
                        onChange={(e) => setAccommodation(e.target.value)}
                    >
                        <option value="">Select...</option>
                        <option value="spaceHotel">Space Hotel</option>
                        <option value="martianBase">Martian Base</option>
                    </select>
                    {errors.accommodation && <span className="isError">Required</span>}
                </label>

                <label>Special Requests: (required)
                    <input
                        type="text"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                    />
                    {errors.specialRequests && <span className="isError">Required</span>}
                </label>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10%' }}>
                    <button onClick={prevStage} style={{ width: '48%' }}>Previous</button>
                    <button onClick={handleNext} style={{ width: '48%' }}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default StageTwo;
