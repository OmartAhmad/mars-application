// components/StageOne.js
import { useState, useEffect } from 'react';

const StageOne = ({ nextStage }) => {
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        // Check if localStorage is available on the client side
        if (typeof window !== 'undefined') {
            setFullName(localStorage.getItem('fullName') || '');
            setDob(localStorage.getItem('dob') || '');
            setNationality(localStorage.getItem('nationality') || '');
            setEmail(localStorage.getItem('email') || '');
            setPhone(localStorage.getItem('phone') || '');
        }
    }, []);

    useEffect(() => {
        // Save values to localStorage 
        if (typeof window !== 'undefined') {
            localStorage.setItem('fullName', fullName);
            localStorage.setItem('dob', dob);
            localStorage.setItem('nationality', nationality);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);
        }
    }, [fullName, dob, nationality, email, phone]);

    const handleNext = () => {
        if (fullName && email) {  // Vaildation for required fields
            nextStage();
        } else {
            alert("Please fill out required fields");
        }
    };

    return (
        <div id="container">
            <h2>Personal Information</h2>
            <label>Full Name:
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label><br />
            <label>Date of Birth:
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </label><br />
            <label>Nationality:
                <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                    <option value="hispanicLatino">Hispanic or Latino</option>
                    <option value="white">White</option>
                    <option value="africanAmerican">African American</option>
                    <option value="asian">Asian</option>
                    <option value="nativeHawaiianPacific">Native Hawaiian or Other Pacific Islander</option>
                    <option value="americanIndianAlaska">American Indian or Alaska Native</option>
                </select>
            </label><br /> 
            <label>Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label><br />
            <label>Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label><br />
            <button onClick={handleNext}>Next</button>
        </div>
    );
   
};

export default StageOne;
