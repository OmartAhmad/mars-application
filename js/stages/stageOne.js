// components/StageOne.js
import { useState, useEffect } from 'react';

const StageOne = ({ nextStage }) => {
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [errors, setErrors] = useState({
        fullName: false,
        dob: false,
        nationality: false,
        email: false,
        phone: false,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFullName(localStorage.getItem('fullName') || '');
            setDob(localStorage.getItem('dob') || '');
            setNationality(localStorage.getItem('nationality') || '');
            setEmail(localStorage.getItem('email') || '');
            setPhone(localStorage.getItem('phone') || '');
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('fullName', fullName);
            localStorage.setItem('dob', dob);
            localStorage.setItem('nationality', nationality);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);
        }
    }, [fullName, dob, nationality, email, phone]);

    const handleNext = () => {
        const newErrors = {
            fullName: !fullName,
            dob: !dob,
            nationality: !nationality,
            email: !email,
            phone: !phone,
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).includes(true)) {
            nextStage();
        }
    };

    return (
        <div id="main-container">
            <div id="text-section">
                <h1>Your Journey to Mars Begins Here!</h1>
                <p>Tell us about yourself to get started on your Mars adventure.</p>
                <p><strong>Provide essential details so we can tailor the application process for you.</strong></p>
                <ul>
                    <li>Enter your full name and contact information</li>
                    <li>Share your nationality and date of birth</li>
                    <li>Help us personalize your Mars experience from the very beginning</li>
                </ul>
            </div>
            <div id="form-container">
                <h2>Personal Information</h2>

                <label>Full Name: (required)
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && <span className="isError">Required</span>}
                </label>

                <label>Date of Birth: (required)
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    {errors.dob && <span className="isError">Required</span>}
                </label>

                <label>Nationality: (required)
                    <select
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                    >
                        <option value="">Select...</option>
                        <option value="hispanicLatino">Hispanic or Latino</option>
                        <option value="white">White</option>
                        <option value="africanAmerican">African American</option>
                        <option value="asian">Asian</option>
                        <option value="nativeHawaiianPacific">Native Hawaiian or Other Pacific Islander</option>
                        <option value="americanIndianAlaska">American Indian or Alaska Native</option>
                    </select>
                    {errors.nationality && <span className="isError">Required</span>}
                </label>

                <label>Email: (required)
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="isError">Required</span>}
                </label>

                <label>Phone: (required)
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span className="isError">Required</span>}
                </label>

                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default StageOne;
