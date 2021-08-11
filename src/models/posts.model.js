'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Post = function (post) {
    this.id = post.id;
    this.title = post.title;
    this.content = post.content;
    this.created_at = new Date();
    this.updated_at = post.updated_at;
};
Post.create = function (newPost, result) {
    dbConn.query("INSERT INTO post set ?", newPost, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Post.findById = function (id, result) {
    dbConn.query("Select * from post where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Post.findAll = function (result) {
    dbConn.query("Select * from post", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('post : ', res);
            result(null, res);
        }
    });
};
Post.update = function (id, post, result) {
    dbConn.query("UPDATE post SET title=?,content=?,updated_at=? WHERE id = ?", [post.title, post.content, new Date(), id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Post.delete = function (id, result) {
    dbConn.query("DELETE FROM post WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Post;