(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1a25f0cc"], {
    4565: function (e, t, n) {
        "use strict";
        n("6bec")
    }, 5936: function (e, t, n) {
    }, "6bec": function (e, t, n) {
    }, d5c2: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "login-container"}, [n("el-form", {
                ref: "loginForm",
                staticClass: "login-form",
                attrs: {model: e.loginForm, rules: e.loginRules, "auto-complete": "on", "label-position": "left"}
            }, [n("div", {staticClass: "title-container"}, [n("h3", {staticClass: "title"}, [e._v("图书管理系统-注册界面")])]), n("el-form-item", {attrs: {prop: "username"}}, [n("span", {staticClass: "svg-container"}, [n("svg-icon", {attrs: {"icon-class": "user"}})], 1), n("el-input", {
                ref: "username",
                attrs: {
                    placeholder: "请输入用户名",
                    name: "username",
                    type: "text",
                    tabindex: "1",
                    "auto-complete": "on"
                },
                model: {
                    value: e.loginForm.username, callback: function (t) {
                        e.$set(e.loginForm, "username", t)
                    }, expression: "loginForm.username"
                }
            })], 1), n("el-form-item", {attrs: {prop: "password"}}, [n("span", {staticClass: "svg-container"}, [n("svg-icon", {attrs: {"icon-class": "password"}})], 1), n("el-input", {
                ref: "password",
                attrs: {
                    type: "password",
                    placeholder: "请输入密码",
                    name: "password",
                    tabindex: "2",
                    "auto-complete": "on"
                },
                model: {
                    value: e.loginForm.password, callback: function (t) {
                        e.$set(e.loginForm, "password", t)
                    }, expression: "loginForm.password"
                }
            })], 1), n("el-form-item", {attrs: {prop: "repeat"}}, [n("span", {staticClass: "svg-container"}, [n("svg-icon", {attrs: {"icon-class": "password"}})], 1), n("el-input", {
                ref: "repeat",
                attrs: {
                    type: "password",
                    placeholder: "请确认密码",
                    name: "repeat",
                    tabindex: "3",
                    "auto-complete": "on"
                },
                nativeOn: {
                    keyup: function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleRight(t)
                    }
                },
                model: {
                    value: e.loginForm.repeat, callback: function (t) {
                        e.$set(e.loginForm, "repeat", t)
                    }, expression: "loginForm.repeat"
                }
            })], 1), n("div", {
                staticStyle: {
                    height: "40px",
                    "margin-bottom": "30px"
                }
            }, [n("el-button", {
                staticStyle: {width: "48%", float: "left"},
                attrs: {loading: e.loading, type: "primary"},
                nativeOn: {
                    click: function (t) {
                        return t.preventDefault(), e.handleRight(t)
                    }
                }
            }, [e._v("确认")]), n("el-button", {
                staticStyle: {width: "48%", float: "right"},
                attrs: {loading: e.loading, type: "success"},
                nativeOn: {
                    click: function (t) {
                        return t.preventDefault(), e.handleBack(t)
                    }
                }
            }, [e._v("返回登录")])], 1)], 1)], 1)
        }, s = [], a = n("c24f"), o = {
            name: "Login", data: function () {
                var e = this, t = function (t, n, r) {
                    n !== e.loginForm.password ? r(new Error("两次输入的密码不一致!")) : r()
                };
                return {
                    loginForm: {username: "", password: "", repeat: ""},
                    loginRules: {
                        username: [{required: !0, message: "请输入用户名", trigger: "blur"}],
                        password: [{required: !0, message: "请输入密码", trigger: "blur"}],
                        repeat: [{required: !0, message: "请再次输入密码", trigger: "blur"}, {
                            trigger: "blur",
                            validator: t
                        }]
                    },
                    loading: !1
                }
            }, methods: {
                handleRight: function () {
                    var e = this;
                    this.$refs.loginForm.validate((function (t) {
                        if (!t) return console.log("不允许提交!"), !1;
                        Object(a["k"])({
                            username: e.loginForm.username,
                            password: e.loginForm.password
                        }).then((function (t) {
                            0 === t ? e.$message.error("注册失败，可能账号重复了") : e.$message.success("注册成功")
                        }))
                    }))
                }, handleBack: function () {
                    this.$router.push("/login")
                }
            }
        }, i = o, l = (n("4565"), n("e509"), n("2877")), c = Object(l["a"])(i, r, s, !1, null, "3a7f9b16", null);
        t["default"] = c.exports
    }, e509: function (e, t, n) {
        "use strict";
        n("5936")
    }
}]);