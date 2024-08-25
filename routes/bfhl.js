const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid data format' });
    }

    const numbers = data.filter(item => !isNaN(item)).map(item => item.toString());
    const alphabets = data.filter(item => isNaN(item));

    const lowercaseAlphabets = alphabets.filter(c => c >= 'a' && c <= 'z');
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [Math.max(...lowercaseAlphabets.map(c => c.charCodeAt(0)))] : [];

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet.map(code => String.fromCharCode(code))
    });
});

router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
