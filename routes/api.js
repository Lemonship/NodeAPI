﻿var express = require('express');
var router = express.Router();

router.get('/images', function(req, res) {
    res.json({ message: "Image List" });
});
router.route('/images/:id') // 輸入id當作參數
.get(function(req, res) {
    res.json({
        id: req.params.id, // 以req.params.id 取得參數

        message: 'The get api for image: ' + req.params.id
    })
})

.post(function(req, res) {
    res.json({
        id: req.params.id,
        message: 'The post api for image: ' + req.params.id
    })
})

.put(function(req, res) {
    res.json({
        id: req.params.id,
        message: 'The put api for image: ' + req.params.id
    })
})

.delete(function(req, res) {
    res.json({
        id: req.params.id,
        message: 'The delete api for image: ' + req.params.id
    })
})
.copy(function(req, res) {
    res.json({
        id: req.params.id,
        message: 'The copy api for image: ' + req.params.id
    })
})
.head(function(req, res) {
    res.json({
        id: req.params.id,
        message: 'The head api for image: ' + req.params.id
    })
});

module.exports = router;