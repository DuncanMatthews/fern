export default function handler(req, res) {
  const formData = req.body;
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'data', 'reviews.json');

  fs.writeFileSync(filePath, JSON.stringify(formData));
  

  res.status(200).json({ message: 'Form data submitted successfully!' });
}

