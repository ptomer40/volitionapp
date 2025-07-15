const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./database/sequelize');
const TrainingEnquiry = require('./models/trainingEnquiryModel'); // ✅ include this
const fs = require('fs');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Sequelize sync
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Database synced'))
  .catch(err => console.error('❌ Sync failed:', err));

// Default route
app.get("/", (req, res) => {
  res.json({ msg: "Default Endpoint of server" });
});

// Validate form data
function validateFormData(data) {
  const { name, email, phone, qualification, graduationYear, syllabus } = data;
  return name?.trim() && email?.trim() && phone?.trim() &&
         qualification?.trim() && graduationYear?.trim() && syllabus?.trim();
}

// ✅ Combined DB insert + file download
app.post('/download', async (req, res) => {
  const formData = req.body;

  if (!validateFormData(formData)) {
    return res.status(400).json({ message: 'Invalid form data' });
  }

  const { name, email, phone, qualification, graduationYear, syllabus } = formData;
  const filePath = path.join(__dirname, 'Trainings', syllabus); // e.g., Trainings/JavaFsd.pdf

  try {
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'Syllabus file not found' });
    }

    // Insert into DB
    await TrainingEnquiry.create({
      name,
      email,
      phone,
      qualification,
      graduationYear,
      syllabusPath: syllabus
    });

    // ✅ Trigger download
    res.download(filePath, syllabus);
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log("🚀 Server is running on port: " + PORT);
});
