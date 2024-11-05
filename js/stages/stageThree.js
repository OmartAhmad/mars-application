// components/StageThree.js
import { useState, useEffect } from 'react';

const StageThree = ({ nextStage, prevStage }) => {
    const [healthDeclaration, setHealthDeclaration] = useState(localStorage.getItem('healthDeclaration') || 'yes');
    const [emergencyContact, setEmergencyContact] = useState(localStorage.getItem('emergencyContact') || '');
    const [medicalConditions, setMedicalConditions] = useState(localStorage.getItem('medicalConditions') || '');

    const [errors, setErrors] = useState({
        healthDeclaration: false,
        emergencyContact: false,
        medicalConditions: false,
    });

    useEffect(() => {
        localStorage.setItem('healthDeclaration', healthDeclaration);
        localStorage.setItem('emergencyContact', emergencyContact);
        localStorage.setItem('medicalConditions', medicalConditions);
    }, [healthDeclaration, emergencyContact, medicalConditions]);

    const handleSubmit = () => {
        const newErrors = {
            healthDeclaration: !healthDeclaration,
            emergencyContact: !emergencyContact,
            medicalConditions: !medicalConditions,
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
                <h1>Ensuring a Safe Mars Experience</h1>
                <p>Your health and safety are our priority for this extraordinary journey.</p>
                <p><strong>Provide important health information for a safe and enjoyable Mars visit.</strong></p>
                <ul>
                <li>Complete a health declaration to confirm your fitness for space travel</li>
                <li>Enter emergency contact information</li>
                <li>Disclose any medical conditions to support safety measures</li>
                </ul>
            </div>

            {/* Form Section */}
            <div id="form-container">
                <h2>Health and Safety</h2>

                <label>Health Declaration: (required)
                    <select
                        value={healthDeclaration}
                        onChange={(e) => setHealthDeclaration(e.target.value)}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {errors.healthDeclaration && <span className="isError">Required</span>}
                </label>

                <label>Emergency Contact: (required)
                    <input
                        type="text"
                        value={emergencyContact}
                        onChange={(e) => setEmergencyContact(e.target.value)}
                    />
                    {errors.emergencyContact && <span className="isError">Required</span>}
                </label>

                <label>Medical Conditions: (required)
                    <textarea
                        value={medicalConditions}
                        onChange={(e) => setMedicalConditions(e.target.value)}
                        placeholder="Any medical conditions you'd like us to know"
                        rows="5"
                        style={{ width: '100%', padding: '10px', height: '120px', borderRadius: '5px' }}
                    ></textarea>
                    {errors.medicalConditions && <span className="isError">Required</span>}
                </label>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10%' }}>
                    <button onClick={prevStage} style={{ width: '48%' }}>Previous</button>
                    <button onClick={handleSubmit} style={{ width: '48%' }}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default StageThree;
