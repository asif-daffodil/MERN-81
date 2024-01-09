const express = require('express');
const router = express.Router();
const multer = require('multer');

router.get('/', (req, res) => {
    res.render('file/upload', { errors: [], message: '' });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            req.fileValidationError = 'Please upload an image';
            return cb(null, false);
        }
        cb(null, true);
    },
});

router.post('/upload', upload.single('myfile'), (req, res) => {
    const file = req.file;

    if (req.fileValidationError) {
        return res.render('file/upload', { errors: req.fileValidationError, message: '' });
    }

    if (!file) {
        return res.render('file/upload', { errors: 'File upload failed. Please try again.' , message: '' });
    }

    // Process your data or save it to a database
    // ...

    // Send a response
    res.render('file/upload', { message: 'File uploaded successfully!', errors: [] });
});

module.exports = router;
