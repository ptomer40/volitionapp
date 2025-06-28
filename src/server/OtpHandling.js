// JavaScript source code
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
let cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));
app.options('*', cors());
// Middleware
app.use(bodyParser.json());

// Twilio configuration
const accountSid = 'ACc65edc423a2db9cb23686822aab47fe3';
const authToken = '81748b02d7f312c4341fc8a5ac900b78';
const client = twilio(accountSid, authToken);
const twilioPhoneNumber ='+919013398220';

// Endpoint to send OTP
app.post('/send-otp', async (req, res) => {
    const { phoneNumber } = req.body;
    console.log("Hello" + phoneNumber);

    
    try {
        const otp = generateOTP(); // Implement your OTP generation logic
        const message = await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: twilioPhoneNumber,
            to: phoneNumber
        });
        res.json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ success: false, error: 'Failed to send OTP' });
    }
});



// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Function to generate OTP
function generateOTP() {
    // Implement your OTP generation logic here
    // This is just a simple example, you may want to use a library for secure OTP generation
    return Math.floor(100000 + Math.random() * 900000);
}
