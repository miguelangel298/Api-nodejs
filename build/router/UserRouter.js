"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = require("../models/User");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
        ;
    }
    /**
     * GetUser
     */
    UserRouter.prototype.GetUsers = function (req, res) {
        User_1.default.find({})
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        }).catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    /**
    * GetUser
    */
    UserRouter.prototype.GetUser = function (req, res) {
        var username = req.params.username;
        User_1.default.findOne({ username: username }).populate('posts', 'title content slug featuredImage')
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        }).catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    /**
    * CreateUser
    */
    UserRouter.prototype.CreateUser = function (req, res) {
        var name = req.body.name;
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var posts = req.body.posts;
        var user = new User_1.default({
            name: name,
            username: username,
            email: email,
            password: password,
            posts: posts
        });
        user.save()
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        }).catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    /**
    * UpdateUser
    */
    UserRouter.prototype.UpdateUser = function (req, res) {
        var username = req.params.username;
        User_1.default.findOneAndUpdate({ username: username }, req.body)
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        }).catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    /**
    * DeleteUser
    */
    UserRouter.prototype.DeleteUser = function (req, res) {
        var username = req.params.username;
        User_1.default.findOneAndRemove({ username: username })
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        }).catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    UserRouter.prototype.routes = function () {
        this.router.get('/', this.GetUsers);
        this.router.get('/:username', this.GetUser);
        this.router.post('/', this.CreateUser);
        this.router.put('/:username', this.UpdateUser);
        this.router.delete('/:username', this.DeleteUser);
    };
    return UserRouter;
}());
// export
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
