import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import database from './firebase';
import './ContactForm.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [query, setQuery] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data to Firebase
        push(ref(database, 'contacts'), {
            name,
            email,
            mobile,
            query
        }).then(() => {
            // Show success message
            setSuccessMessage('Your query has been submitted successfully!');
            // Clear form fields
            setName('');
            setEmail('');
            setMobile('');
            setQuery('');
            // Hide success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        }).catch((error) => {
            console.error('Error saving data: ', error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            {successMessage && <div className="success-message">{successMessage}</div>} {/* Success message */}
            <div className="form-group">
                <label className="form-label">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Mobile:</label>
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Query:</label>
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="form-control"
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default ContactForm;
