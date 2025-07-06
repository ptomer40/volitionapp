import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [verificationStatus, setVerificationStatus] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };

    
    async function sendOtp(e) {
        e.preventDefault();
        console.log("Inside DataSend");
        console.log(phoneNumber);
    
       if(phoneNumber==null ||  phoneNumber==""){
          alert("enter mobile number");
          return;
       }
       
        const response = await fetch("http://localhost:3001/send-otp", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                phoneNumber

            })


        });
        alert("Hello after fetch");
        const recieved = await response.json();
        setOtpSent(true);
        setVerificationStatus('OTP sent successfully');
        alert(recieved);
}
    const verifyOtp = async () => {
        try {
            const response = await axios.post('/verify-otp', { phoneNumber, otp });
            console.log(response.data);
            setVerificationStatus('OTP verified successfully');
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setVerificationStatus('Failed to verify OTP');
        }
    };


    return (
        <div>
            
            <div>
                <label>Phone Number:</label>
                <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} required
  maxLength={10}
  pattern="[0-9]{10}"
  title="Please enter a valid 10-digit mobile number"
/>
            </div>
            {!otpSent && (
                <button onClick={sendOtp}>Send OTP</button>
            )}
            {otpSent && (
                <div>
                    <div>
                        <label>Enter OTP:</label>
                        <input type="text" value={otp} onChange={handleOtpChange} required />
                    </div>
                    <button onClick={verifyOtp}>Verify OTP</button>
                </div>
            )}
            {verificationStatus && <p>{verificationStatus}</p>}
        </div>
    );
};

export default EnquiryForm;
