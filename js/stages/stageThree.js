// components/StageThree.js
import { useState, useEffect } from 'react';

const StageThree = ({ nextStage, prevStage }) => {
    const [healthDeclaration, setHealthDeclaration] = useState(localStorage.getItem('healthDeclaration') || 'yes');
    const [emergencyContact, setEmergencyContact] = useState(localStorage.getItem('emergencyContact') || '');
    const [medicalConditions, setMedicalConditions] = useState(localStorage.getItem('medicalConditions') || '');

    useEffect(() => {
        localStorage.setItem('healthDeclaration', healthDeclaration);
        localStorage.setItem('emergencyContact', emergencyContact);
        localStorage.setItem('medicalConditions', medicalConditions);
    }, [healthDeclaration, emergencyContact, medicalConditions]);

    const handleSubmit = () => {
        if (emergencyContact) {
            nextStage(); // Proceed to the submission confirmation page
        } else {
            alert("Please fill out required fields");
        }
    };

    return (
        <div id="container">
            <h2>Health and Safety</h2>
            <label>Health Declaration:
                <select value={healthDeclaration} onChange={(e) => setHealthDeclaration(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label><br />
            <label>Emergency Contact:
                <input type="text" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} />
            </label><br />
            <label>Medical Conditions:
                <textarea value={medicalConditions} onChange={(e) => setMedicalConditions(e.target.value)} placeholder="Any medical conditions you'd like us to know"></textarea>
            </label><br />
            <button onClick={prevStage}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default StageThree;
