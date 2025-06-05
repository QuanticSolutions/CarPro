const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require("../database/connection");
const fs = require('fs');
const router = express.Router();

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Uploads directory created');
}

function clearUserUploadDir(req, res, next) {
  const userId = req.params.id || 'default';
  const userDir = path.join(uploadDir, userId);

  if (fs.existsSync(userDir)) {
    fs.rmSync(userDir, { recursive: true, force: true });
  }
  fs.mkdirSync(userDir, { recursive: true });

  next();
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userId = req.params.id || 'default';
    const userDir = path.join(uploadDir, userId);

    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir, { recursive: true });
      console.log(`User directory created: ${userDir}`);
    }
    cb(null, userDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});


const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: fileFilter
});


router.post('/upload/:id', upload.single('image'), (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ loggedIn: false, message: 'No token found' });
  }
  try {
    if (!req.file) {
      return res.status(400).send({ message: 'Please upload an image' });
    }
    res.status(201).send({
      message: 'Image uploaded successfully',
      filename: req.file.filename,
      path: req.file.path,
      imageUrl: `/routes/uploads/${req.params.id || 'default'}/${req.file.filename}`
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error uploading image',
      error: error.message
    });
  }
});

router.post('/uploads/:id', clearUserUploadDir, upload.array('images', 10), (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ loggedIn: false, message: 'No token found' });
  }
  try {
    console.log(req.files)
    if (!req.files || req.files.length === 0) {
      return res.status(200)
    }
    const uploadedFiles = req.files.map(file => ({
      filename: file.filename,
      path: file.path,
      imageUrl: `/routes/uploads/${req.params.id || 'default'}/${file.filename}`
    }));

    res.status(201).send({
      message: `${req.files.length} images uploaded successfully`,
      files: uploadedFiles
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error uploading images',
      error: error.message
    });
  }
});

router.get('/upload/:id/', (req, res) => {

  try {
    const { id, filename } = req.params;
    const filepath = path.join(uploadDir, id, filename);

    if (!fs.existsSync(filepath)) {
      return res.status(404).send({ message: 'Image not found' });
    }

    res.sendFile(filepath);
  } catch (error) {
    res.status(500).send({
      message: 'Error retrieving image',
      error: error.message
    });
  }
});

router.get('/uploads/stream/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({ message: 'stream_id is required' });
    }

    const sql = `SELECT * FROM users WHERE stream_id = ?`;
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (!result.length) {
        return res.status(404).json({ message: "User not found" });
      }

      const user = result[0];
      const filepath = path.join(uploadDir, `${user.id}`);

      if (!fs.existsSync(filepath)) {
        return res.status(404).json({ message: "No uploaded images found for user." });
      }

      const files = fs.readdirSync(filepath).filter(file => !file.startsWith('.'));
      const imageUrls = files.map(filename => ({
        filename,
        imageUrl: `/files/uploads/${user.id}/${filename}`
      }));

      res.status(200).send({
        count: files.length,
        images: imageUrls
      });
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error retrieving images',
      error: error.message,
    });
  }
});


router.get('/uploads/:id', (req, res) => {

  try {
    const { id } = req.params;
    const userDir = path.join(uploadDir, id);

    if (!fs.existsSync(userDir)) {
      return res.status(404).send({ message: 'User directory not found' });
    }

    const files = fs.readdirSync(userDir);
    const imageUrls = files.map(filename => ({
      filename,
      imageUrl: `/files/images/${id}/${filename}`
    }));

    res.status(200).send({
      count: files.length,
      images: imageUrls
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error listing images',
      error: error.message
    });
  }
});

router.get('/images/:id/:filename', (req, res) => {
  const { id, filename } = req.params;
  const imagePath = path.join(__dirname, 'uploads', id, filename);
  if (!fs.existsSync(imagePath)) {
    return res.status(404).send({ message: 'Image not found' });
  }

  res.sendFile(imagePath);
});

module.exports = router;
