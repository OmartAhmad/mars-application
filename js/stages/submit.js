// js/stages/submit.js
import { useEffect } from 'react';

const SubmitPage = ({ restartForm }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.clear(); // Clear local storage upon submission
        }
    }, []);

    return (
        <div id="submit-container">
            <h2>Thank You for Your Application!</h2>
            <p>Your application to visit Mars has been successfully submitted. We will review your details and contact you soon.</p>
            <button onClick={restartForm}>Start New Application</button>
        </div>
    );
};

export default SubmitPage;
