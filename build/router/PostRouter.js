"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Post_1 = require("../models/Post");
var PostRouter = /** @class */ (function () {
    function PostRouter() {
        this.router = express_1.Router();
        this.routes();
        ;
    }
    /**
     * GetPosts
     */
    PostRouter.prototype.GetPosts = function (req, res) {
        Post_1.default.find({})
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
    * GetPosts
    */
    PostRouter.prototype.GetPost = function (req, res) {
        var slug = req.params.slug;
        Post_1.default.findOne({ slug: slug })
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
    * CreatePost
    */
    PostRouter.prototype.CreatePost = function (req, res) {
        var title = req.body.title;
        var content = req.body.content;
        var featuredImage = req.body.featuredimage;
        var slug = req.body.slug;
        var post = new Post_1.default({
            title: title,
            content: content,
            featuredImage: featuredImage,
            slug: slug,
        });
        post.save()
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
    * UpdatePost
    */
    PostRouter.prototype.UpdatePost = function (req, res) {
        var slug = req.params.slug;
        Post_1.default.findOneAndUpdate({ slug: slug }, req.body)
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
    * DeletePosts
    */
    PostRouter.prototype.DeletePost = function (req, res) {
        var slug = req.params.slug;
        Post_1.default.findOneAndRemove({ slug: slug })
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
    PostRouter.prototype.routes = function () {
        this.router.get('/', this.GetPosts);
        this.router.get('/:slug', this.GetPost);
        this.router.post('/', this.CreatePost);
        this.router.put('/:slug', this.UpdatePost);
        this.router.delete('/:slug', this.DeletePost);
    };
    return PostRouter;
}());
// export
var postRoutes = new PostRouter();
postRoutes.routes();
exports.default = postRoutes.router;
