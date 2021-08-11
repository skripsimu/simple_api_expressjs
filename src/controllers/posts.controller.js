'use strict';
const Post = require('../models/posts.model');
exports.findAll = function (req, res) {
    Post.findAll(function (err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
exports.create = function (req, res) {
    const new_post = new Post(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Post.create(new_post, function (err, post) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Post added successfully!", data: post });
        });
    }
};
exports.findById = function (req, res) {
    Post.findById(req.params.id, function (err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Post.update(req.params.id, new Post(req.body), function (err, post) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Post successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Post.delete(req.params.id, function (err, post) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Post successfully deleted' });
    });
};