(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2911f106"], {
    "199b": function (e, t, a) {
    }, 4381: function (e, t, a) {
        "use strict";
        a("d3b7"), a("caad"), a("2532");
        var n = a("4360");

        function r(e, t) {
            var a = t.value, r = n["a"].getters && n["a"].getters.roles;
            if (!(a && a instanceof Array)) throw new Error("need roles! Like v-permission=\"['admin','editor']\"");
            if (a.length > 0) {
                var o = a, i = r.some((function (e) {
                    return o.includes(e)
                }));
                i || e.parentNode && e.parentNode.removeChild(e)
            }
        }

        var o = {
            inserted: function (e, t) {
                r(e, t)
            }, update: function (e, t) {
                r(e, t)
            }
        }, i = function (e) {
            e.directive("permission", o)
        };
        window.Vue && (window["permission"] = o, Vue.use(i)), o.install = i;
        t["a"] = o
    }, 6517: function (e, t, a) {
        "use strict";
        a.d(t, "d", (function () {
            return r
        })), a.d(t, "b", (function () {
            return o
        })), a.d(t, "c", (function () {
            return i
        })), a.d(t, "a", (function () {
            return l
        })), a.d(t, "e", (function () {
            return s
        }));
        var n = a("b775");

        function r(e) {
            return Object(n["a"])({url: "/borrow/queryBorrowsByPage", method: "get", params: e})
        }

        function o(e) {
            return Object(n["a"])({url: "/borrow/deleteBorrow", method: "delete", data: e})
        }

        function i(e) {
            return Object(n["a"])({url: "/borrow/deleteBorrows", method: "delete", data: e})
        }

        function l(e, t) {
            return Object(n["a"])({url: "/borrow/borrowBook", method: "post", params: {userid: e, bookid: t}})
        }

        function s(e, t) {
            return Object(n["a"])({url: "/borrow/returnBook", method: "post", params: {borrowid: e, bookid: t}})
        }
    }, 6724: function (e, t, a) {
        "use strict";
        a("8d41");
        var n = "@@wavesContext";

        function r(e, t) {
            function a(a) {
                var n = Object.assign({}, t.value),
                    r = Object.assign({ele: e, type: "hit", color: "rgba(0, 0, 0, 0.15)"}, n), o = r.ele;
                if (o) {
                    o.style.position = "relative", o.style.overflow = "hidden";
                    var i = o.getBoundingClientRect(), l = o.querySelector(".waves-ripple");
                    switch (l ? l.className = "waves-ripple" : (l = document.createElement("span"), l.className = "waves-ripple", l.style.height = l.style.width = Math.max(i.width, i.height) + "px", o.appendChild(l)), r.type) {
                        case"center":
                            l.style.top = i.height / 2 - l.offsetHeight / 2 + "px", l.style.left = i.width / 2 - l.offsetWidth / 2 + "px";
                            break;
                        default:
                            l.style.top = (a.pageY - i.top - l.offsetHeight / 2 - document.documentElement.scrollTop || document.body.scrollTop) + "px", l.style.left = (a.pageX - i.left - l.offsetWidth / 2 - document.documentElement.scrollLeft || document.body.scrollLeft) + "px"
                    }
                    return l.style.backgroundColor = r.color, l.className = "waves-ripple z-active", !1
                }
            }

            return e[n] ? e[n].removeHandle = a : e[n] = {removeHandle: a}, a
        }

        var o = {
            bind: function (e, t) {
                e.addEventListener("click", r(e, t), !1)
            }, update: function (e, t) {
                e.removeEventListener("click", e[n].removeHandle, !1), e.addEventListener("click", r(e, t), !1)
            }, unbind: function (e) {
                e.removeEventListener("click", e[n].removeHandle, !1), e[n] = null, delete e[n]
            }
        }, i = function (e) {
            e.directive("waves", o)
        };
        window.Vue && (window.waves = o, Vue.use(i)), o.install = i;
        t["a"] = o
    }, "8d41": function (e, t, a) {
    }, a434: function (e, t, a) {
        "use strict";
        var n = a("23e7"), r = a("23cb"), o = a("a691"), i = a("50c4"), l = a("7b0b"), s = a("65f0"), c = a("8418"),
            u = a("1dde"), d = a("ae40"), m = u("splice"), p = d("splice", {ACCESSORS: !0, 0: 0, 1: 2}), f = Math.max,
            h = Math.min, b = 9007199254740991, v = "Maximum allowed length exceeded";
        n({target: "Array", proto: !0, forced: !m || !p}, {
            splice: function (e, t) {
                var a, n, u, d, m, p, y = l(this), g = i(y.length), w = r(e, g), k = arguments.length;
                if (0 === k ? a = n = 0 : 1 === k ? (a = 0, n = g - w) : (a = k - 2, n = h(f(o(t), 0), g - w)), g + a - n > b) throw TypeError(v);
                for (u = s(y, n), d = 0; d < n; d++) m = w + d, m in y && c(u, d, y[m]);
                if (u.length = n, a < n) {
                    for (d = w; d < g - n; d++) m = d + n, p = d + a, m in y ? y[p] = y[m] : delete y[p];
                    for (d = g; d > g - n + a; d--) delete y[d - 1]
                } else if (a > n) for (d = g - n; d > w; d--) m = d + n - 1, p = d + a - 1, m in y ? y[p] = y[m] : delete y[p];
                for (d = 0; d < a; d++) y[d + w] = arguments[d + 2];
                return y.length = g - n + a, u
            }
        })
    }, de5a: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "app-container"}, [a("div", {
                staticClass: "filter-container",
                staticStyle: {"margin-bottom": "15px"}
            }, [a("el-input", {
                directives: [{
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin"],
                    expression: "['admin']"
                }],
                staticClass: "filter-item",
                staticStyle: {width: "200px"},
                attrs: {placeholder: "用户名"},
                nativeOn: {
                    keyup: function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleFilter(t)
                    }
                },
                model: {
                    value: e.queryParam.username, callback: function (t) {
                        e.$set(e.queryParam, "username", t)
                    }, expression: "queryParam.username"
                }
            }), a("el-input", {
                staticClass: "filter-item",
                staticStyle: {width: "200px"},
                attrs: {placeholder: "图书名"},
                nativeOn: {
                    keyup: function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleFilter(t)
                    }
                },
                model: {
                    value: e.queryParam.bookname, callback: function (t) {
                        e.$set(e.queryParam, "bookname", t)
                    }, expression: "queryParam.bookname"
                }
            }), a("el-button", {
                directives: [{name: "waves", rawName: "v-waves"}],
                staticClass: "filter-item",
                attrs: {type: "primary", icon: "el-icon-search"},
                on: {click: e.handleFilter}
            }, [e._v(" 搜索 ")]), a("el-button", {
                directives: [{name: "waves", rawName: "v-waves"}],
                staticClass: "filter-item",
                attrs: {type: "primary", icon: "el-icon-search"},
                on: {click: e.handleShowAll}
            }, [e._v(" 显示全部 ")]), a("el-button", {
                directives: [{
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin"],
                    expression: "['admin']"
                }],
                staticClass: "filter-item",
                staticStyle: {"margin-left": "10px"},
                attrs: {type: "danger", icon: "el-icon-delete"},
                on: {click: e.handleDeleteSome}
            }, [e._v(" 批量删除 ")])], 1), a("el-table", {
                ref: "multipleTable",
                staticStyle: {width: "100%"},
                attrs: {data: e.tableData, border: ""}
            }, [a("el-table-column", {
                attrs: {
                    fixed: "",
                    type: "selection",
                    width: "55"
                }
            }), a("el-table-column", {
                attrs: {
                    fixed: "",
                    prop: "borrowid",
                    label: "序号",
                    width: "100"
                }
            }), a("el-table-column", {
                attrs: {
                    prop: "username",
                    label: "用户名",
                    "show-overflow-tooltip": ""
                }
            }), a("el-table-column", {
                attrs: {
                    prop: "bookname",
                    label: "图书名",
                    "show-overflow-tooltip": ""
                }
            }), a("el-table-column", {
                attrs: {
                    prop: "borrowtimestr",
                    label: "借书时间"
                }
            }), a("el-table-column", {
                attrs: {label: "还书时间"}, scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [null === t.row.returntimestr || "" === t.row.returntimestr ? a("span", {staticStyle: {color: "red"}}, [e._v("等待还书")]) : a("span", {staticStyle: {color: "#1aac1a"}}, [e._v(e._s(t.row.returntimestr))])]
                    }
                }])
            }), a("el-table-column", {
                attrs: {fixed: "right", label: "操作", width: e.roleIsAdmin ? "180px" : "110px"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [a("el-button", {
                            directives: [{
                                name: "permission",
                                rawName: "v-permission",
                                value: ["admin"],
                                expression: "['admin']"
                            }], attrs: {type: "danger", size: "small"}, on: {
                                click: function (a) {
                                    return e.handleDelete(t.row, t.$index)
                                }
                            }
                        }, [e._v("删除")]), a("el-button", {
                            attrs: {type: "success", size: "small"},
                            on: {
                                click: function (a) {
                                    return e.handleReturn(t.row, t.$index)
                                }
                            }
                        }, [e._v("归还图书")])]
                    }
                }])
            })], 1), a("el-pagination", {
                staticStyle: {"margin-top": "15px"},
                attrs: {
                    background: "",
                    "current-page": e.queryParam.page,
                    "page-sizes": [5, 10, 20, 50],
                    "page-size": e.queryParam.limit,
                    layout: "total, sizes, prev, pager, next, jumper",
                    total: e.recordTotal
                },
                on: {
                    "size-change": e.handleSizeChange,
                    "current-change": e.handleCurrentChange,
                    "update:currentPage": function (t) {
                        return e.$set(e.queryParam, "page", t)
                    },
                    "update:current-page": function (t) {
                        return e.$set(e.queryParam, "page", t)
                    }
                }
            })], 1)
        }, r = [], o = a("5530"), i = (a("a434"), a("2f62")), l = a("4381"), s = a("6724"), c = a("6517"), u = {
            name: "Bookinfo",
            directives: {waves: s["a"], permission: l["a"]},
            created: function () {
                var e = this;
                Object(c["d"])(this.queryParam).then((function (t) {
                    console.log("首页数据获取成功", t), e.tableData = t.data, e.recordTotal = t.count
                }))
            },
            methods: {
                handleSizeChange: function (e) {
                    var t = this, a = this.queryParam;
                    a.limit = e, Object(c["d"])(a).then((function (e) {
                        console.log("分页数据获取成功", e), t.tableData = e.data, t.recordTotal = e.count
                    }))
                }, handleCurrentChange: function (e) {
                    var t = this, a = this.queryParam;
                    a.page = e, Object(c["d"])(a).then((function (e) {
                        console.log("分页数据获取成功", e), t.tableData = e.data, t.recordTotal = e.count
                    }))
                }, handleFilter: function () {
                    var e = this;
                    this.queryParam.page = 1, Object(c["d"])(this.queryParam).then((function (t) {
                        0 === t.code && (e.tableData = t.data, e.recordTotal = t.count)
                    }))
                }, handleShowAll: function () {
                    var e = this;
                    this.queryParam.page = 1, this.queryParam.username = null, this.queryParam.bookname = null, Object(c["d"])(this.queryParam).then((function (t) {
                        0 === t.code && (e.tableData = t.data, e.recordTotal = t.count)
                    }))
                }, handleDelete: function (e, t) {
                    var a = this;
                    this.$confirm("确定要删除该条记录吗?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then((function () {
                        Object(c["b"])(e).then((function (e) {
                            1 === e ? (a.$message.success("删除记录成功"), a.tableData.splice(t, 1), 0 === a.tableData.length && (a.queryParam.page = a.queryParam.page - 1, a.handleCurrentChange(a.queryParam.page))) : a.$message.error("删除记录失败")
                        }))
                    }))
                }, handleDeleteSome: function () {
                    var e = this;
                    this.$confirm("确定要删除这些记录吗?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then((function () {
                        var t = e.$refs.multipleTable.selection;
                        Object(c["c"])(t).then((function (t) {
                            t > 0 ? (e.$message.success("删除" + t + "条记录成功"), e.tableData.length === t && 0 !== e.queryParam.page && (e.queryParam.page = e.queryParam.page - 1), e.handleCurrentChange(e.queryParam.page)) : e.$message.error("删除记录失败")
                        }))
                    }))
                }, handleReturn: function (e, t) {
                    var a = this;
                    this.$confirm("确定要还书吗?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then((function () {
                        Object(c["e"])(e.borrowid, e.bookid).then((function (e) {
                            1 === e ? (a.$message.success("还书成功"), a.handleCurrentChange(a.queryParam.page)) : a.$message.error("还书失败")
                        }))
                    }))
                }
            },
            data: function () {
                return {
                    tableData: [],
                    recordTotal: 0,
                    queryParam: {page: 1, limit: 10, userid: null, username: null, bookname: null}
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(i["b"])(["id", "name", "roles"])), {}, {
                roleIsAdmin: function () {
                    return "admin" === this.roles[0]
                }
            }),
            watch: {
                "queryParam.userid": {
                    immediate: !0, handler: function () {
                        console.log("我被触发了"), this.roleIsAdmin ? this.queryParam.userid = null : this.queryParam.userid = this.id
                    }
                }
            }
        }, d = u, m = (a("ece8"), a("2877")), p = Object(m["a"])(d, n, r, !1, null, "ef587e74", null);
        t["default"] = p.exports
    }, ece8: function (e, t, a) {
        "use strict";
        a("199b")
    }
}]);