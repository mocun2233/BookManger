(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-168c9df3"], {
    4381: function (e, t, o) {
        "use strict";
        o("d3b7"), o("caad"), o("2532");
        var r = o("4360");

        function a(e, t) {
            var o = t.value, a = r["a"].getters && r["a"].getters.roles;
            if (!(o && o instanceof Array)) throw new Error("need roles! Like v-permission=\"['admin','editor']\"");
            if (o.length > 0) {
                var n = o, i = a.some((function (e) {
                    return n.includes(e)
                }));
                i || e.parentNode && e.parentNode.removeChild(e)
            }
        }

        var n = {
            inserted: function (e, t) {
                a(e, t)
            }, update: function (e, t) {
                a(e, t)
            }
        }, i = function (e) {
            e.directive("permission", n)
        };
        window.Vue && (window["permission"] = n, Vue.use(i)), n.install = i;
        t["a"] = n
    }, "5d67": function (e, t, o) {
        "use strict";
        o("dbf9")
    }, 6517: function (e, t, o) {
        "use strict";
        o.d(t, "d", (function () {
            return a
        })), o.d(t, "b", (function () {
            return n
        })), o.d(t, "c", (function () {
            return i
        })), o.d(t, "a", (function () {
            return l
        })), o.d(t, "e", (function () {
            return s
        }));
        var r = o("b775");

        function a(e) {
            return Object(r["a"])({url: "/borrow/queryBorrowsByPage", method: "get", params: e})
        }

        function n(e) {
            return Object(r["a"])({url: "/borrow/deleteBorrow", method: "delete", data: e})
        }

        function i(e) {
            return Object(r["a"])({url: "/borrow/deleteBorrows", method: "delete", data: e})
        }

        function l(e, t) {
            return Object(r["a"])({url: "/borrow/borrowBook", method: "post", params: {userid: e, bookid: t}})
        }

        function s(e, t) {
            return Object(r["a"])({url: "/borrow/returnBook", method: "post", params: {borrowid: e, bookid: t}})
        }
    }, 6724: function (e, t, o) {
        "use strict";
        o("8d41");
        var r = "@@wavesContext";

        function a(e, t) {
            function o(o) {
                var r = Object.assign({}, t.value),
                    a = Object.assign({ele: e, type: "hit", color: "rgba(0, 0, 0, 0.15)"}, r), n = a.ele;
                if (n) {
                    n.style.position = "relative", n.style.overflow = "hidden";
                    var i = n.getBoundingClientRect(), l = n.querySelector(".waves-ripple");
                    switch (l ? l.className = "waves-ripple" : (l = document.createElement("span"), l.className = "waves-ripple", l.style.height = l.style.width = Math.max(i.width, i.height) + "px", n.appendChild(l)), a.type) {
                        case"center":
                            l.style.top = i.height / 2 - l.offsetHeight / 2 + "px", l.style.left = i.width / 2 - l.offsetWidth / 2 + "px";
                            break;
                        default:
                            l.style.top = (o.pageY - i.top - l.offsetHeight / 2 - document.documentElement.scrollTop || document.body.scrollTop) + "px", l.style.left = (o.pageX - i.left - l.offsetWidth / 2 - document.documentElement.scrollLeft || document.body.scrollLeft) + "px"
                    }
                    return l.style.backgroundColor = a.color, l.className = "waves-ripple z-active", !1
                }
            }

            return e[r] ? e[r].removeHandle = o : e[r] = {removeHandle: o}, o
        }

        var n = {
            bind: function (e, t) {
                e.addEventListener("click", a(e, t), !1)
            }, update: function (e, t) {
                e.removeEventListener("click", e[r].removeHandle, !1), e.addEventListener("click", a(e, t), !1)
            }, unbind: function (e) {
                e.removeEventListener("click", e[r].removeHandle, !1), e[r] = null, delete e[r]
            }
        }, i = function (e) {
            e.directive("waves", n)
        };
        window.Vue && (window.waves = n, Vue.use(i)), n.install = i;
        t["a"] = n
    }, "8d41": function (e, t, o) {
    }, a434: function (e, t, o) {
        "use strict";
        var r = o("23e7"), a = o("23cb"), n = o("a691"), i = o("50c4"), l = o("7b0b"), s = o("65f0"), u = o("8418"),
            c = o("1dde"), d = o("ae40"), m = c("splice"), p = d("splice", {ACCESSORS: !0, 0: 0, 1: 2}), b = Math.max,
            f = Math.min, h = 9007199254740991, k = "Maximum allowed length exceeded";
        r({target: "Array", proto: !0, forced: !m || !p}, {
            splice: function (e, t) {
                var o, r, c, d, m, p, g = l(this), y = i(g.length), v = a(e, y), w = arguments.length;
                if (0 === w ? o = r = 0 : 1 === w ? (o = 0, r = y - v) : (o = w - 2, r = f(b(n(t), 0), y - v)), y + o - r > h) throw TypeError(k);
                for (c = s(g, r), d = 0; d < r; d++) m = v + d, m in g && u(c, d, g[m]);
                if (c.length = r, o < r) {
                    for (d = v; d < y - r; d++) m = d + r, p = d + o, m in g ? g[p] = g[m] : delete g[p];
                    for (d = y; d > y - r + o; d--) delete g[d - 1]
                } else if (o > r) for (d = y - r; d > v; d--) m = d + r - 1, p = d + o - 1, m in g ? g[p] = g[m] : delete g[p];
                for (d = 0; d < o; d++) g[d + v] = arguments[d + 2];
                return g.length = y - r + o, c
            }
        })
    }, cbee: function (e, t, o) {
        "use strict";
        o.r(t);
        var r = function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {staticClass: "app-container"}, [o("div", {
                staticClass: "filter-container",
                staticStyle: {"margin-bottom": "15px"}
            }, [o("el-input", {
                staticClass: "filter-item",
                staticStyle: {width: "200px"},
                attrs: {placeholder: "书名"},
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
            }), o("el-input", {
                staticClass: "filter-item",
                staticStyle: {width: "200px"},
                attrs: {placeholder: "作者"},
                nativeOn: {
                    keyup: function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleFilter(t)
                    }
                },
                model: {
                    value: e.queryParam.bookauthor, callback: function (t) {
                        e.$set(e.queryParam, "bookauthor", t)
                    }, expression: "queryParam.bookauthor"
                }
            }), o("el-select", {
                staticClass: "filter-item",
                staticStyle: {width: "200px"},
                attrs: {filterable: "", placeholder: "类型", clearable: ""},
                model: {
                    value: e.queryParam.booktypeid, callback: function (t) {
                        e.$set(e.queryParam, "booktypeid", t)
                    }, expression: "queryParam.booktypeid"
                }
            }, e._l(e.typeData, (function (e) {
                return o("el-option", {key: e.booktypeid, attrs: {label: e.booktypename, value: e.booktypeid}})
            })), 1), o("el-button", {
                directives: [{name: "waves", rawName: "v-waves"}],
                staticClass: "filter-item",
                attrs: {type: "primary", icon: "el-icon-search"},
                on: {click: e.handleFilter}
            }, [e._v(" 搜索 ")]), o("el-button", {
                directives: [{name: "waves", rawName: "v-waves"}],
                staticClass: "filter-item",
                attrs: {type: "primary", icon: "el-icon-search"},
                on: {click: e.handleShowAll}
            }, [e._v(" 显示全部 ")]), o("el-button", {
                directives: [{
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin"],
                    expression: "['admin']"
                }],
                staticClass: "filter-item",
                staticStyle: {"margin-left": "10px"},
                attrs: {type: "primary", icon: "el-icon-edit"},
                on: {click: e.handleCreate}
            }, [e._v(" 添加图书 ")]), o("el-button", {
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
            }, [e._v(" 批量删除 ")])], 1), o("el-dialog", {
                attrs: {
                    title: e.formTitle,
                    visible: e.dialogFormVisible,
                    width: "40%"
                }, on: {
                    "update:visible": function (t) {
                        e.dialogFormVisible = t
                    }
                }
            }, [o("el-row", [o("el-col", {attrs: {span: 16}}, [o("el-form", {
                ref: "ruleForm",
                attrs: {model: e.form, rules: e.rules, "label-width": "80px"}
            }, [o("el-form-item", {
                attrs: {
                    label: "图书名称",
                    prop: "bookname"
                }
            }, [o("el-input", {
                model: {
                    value: e.form.bookname, callback: function (t) {
                        e.$set(e.form, "bookname", t)
                    }, expression: "form.bookname"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "作者",
                    prop: "bookauthor"
                }
            }, [o("el-input", {
                model: {
                    value: e.form.bookauthor, callback: function (t) {
                        e.$set(e.form, "bookauthor", t)
                    }, expression: "form.bookauthor"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "价格",
                    prop: "bookprice"
                }
            }, [o("el-input", {
                model: {
                    value: e.form.bookprice, callback: function (t) {
                        e.$set(e.form, "bookprice", t)
                    }, expression: "form.bookprice"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "图书类型",
                    prop: "booktypeid"
                }
            }, [o("el-select", {
                attrs: {placeholder: "请选择类型"},
                model: {
                    value: e.form.booktypeid, callback: function (t) {
                        e.$set(e.form, "booktypeid", t)
                    }, expression: "form.booktypeid"
                }
            }, e._l(e.typeData, (function (e) {
                return o("el-option", {key: e.booktypeid, attrs: {label: e.booktypename, value: e.booktypeid}})
            })), 1)], 1), o("el-form-item", {
                attrs: {
                    label: "书籍描述",
                    prop: "bookdesc"
                }
            }, [o("el-input", {
                attrs: {type: "textarea"}, model: {
                    value: e.form.bookdesc, callback: function (t) {
                        e.$set(e.form, "bookdesc", t)
                    }, expression: "form.bookdesc"
                }
            })], 1)], 1)], 1), o("el-col", {attrs: {span: 8}}, [o("div", {attrs: {align: "center"}}, [o("h3", [e._v("点击下方图片上传封面")]), o("el-upload", {
                staticClass: "avatar-uploader",
                attrs: {
                    action: "http://localhost:8092/BookManager/update/updateImg",
                    "show-file-list": !1,
                    "on-success": e.handleAvatarSuccess,
                    "before-upload": e.beforeAvatarUpload
                }
            }, [e.form.bookimg ? o("img", {
                staticClass: "avatar",
                attrs: {src: e.form.bookimg, alt: "封面无法显示"}
            }) : o("i", {staticClass: "el-icon-plus avatar-uploader-icon"})])], 1)])], 1), o("div", {
                staticClass: "dialog-footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [o("el-button", {
                on: {
                    click: function (t) {
                        e.dialogFormVisible = !1
                    }
                }
            }, [e._v("取 消")]), o("el-button", {
                attrs: {type: "primary"},
                on: {click: e.submitForm}
            }, [e._v("确 定")])], 1)], 1), o("el-dialog", {
                attrs: {
                    title: "选择用户",
                    visible: e.dialogFormVisible2,
                    width: "400px"
                }, on: {
                    "update:visible": function (t) {
                        e.dialogFormVisible2 = t
                    }
                }
            }, [o("el-form", {attrs: {model: e.form2}}, [o("el-form-item", {
                attrs: {
                    label: "用户名",
                    prop: "userid",
                    "label-width": "80px"
                }
            }, [o("el-select", {
                attrs: {placeholder: "请选择用户"},
                model: {
                    value: e.form2.booktypeid, callback: function (t) {
                        e.$set(e.form2, "booktypeid", t)
                    }, expression: "form2.booktypeid"
                }
            }, e._l(e.userData, (function (e) {
                return o("el-option", {key: e.userid, attrs: {label: e.username, value: e.userid}})
            })), 1)], 1)], 1), o("div", {
                staticClass: "dialog-footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [o("el-button", {
                on: {
                    click: function (t) {
                        e.dialogFormVisible2 = !1
                    }
                }
            }, [e._v("取 消")]), o("el-button", {
                attrs: {type: "primary"},
                on: {click: e.submitForm2}
            }, [e._v("确 定")])], 1)], 1), o("el-table", {
                ref: "multipleTable",
                staticStyle: {width: "100%"},
                attrs: {data: e.tableData, border: ""}
            }, [o("el-table-column", {
                attrs: {
                    fixed: "",
                    type: "selection",
                    width: "55"
                }
            }), o("el-table-column", {
                attrs: {
                    fixed: "",
                    prop: "bookid",
                    label: "序号",
                    width: "100"
                }
            }), !1 === e.roleIsAdmin ? o("el-table-column", {
                attrs: {label: "图书封面", width: "155"},
                scopedSlots: e._u([{
                    key: "default", fn: function (e) {
                        return [o("el-image", {
                            staticStyle: {width: "130px", height: "180px"},
                            attrs: {src: e.row.bookimg}
                        })]
                    }
                }], null, !1, 4292957155)
            }) : e._e(), o("el-table-column", {
                attrs: {
                    prop: "bookname",
                    label: "图书名称",
                    width: "150",
                    "show-overflow-tooltip": ""
                }
            }), o("el-table-column", {
                attrs: {
                    prop: "bookauthor",
                    label: "图书作者",
                    width: "100",
                    "show-overflow-tooltip": ""
                }
            }), o("el-table-column", {
                attrs: {
                    prop: "bookprice",
                    label: "图书价格",
                    width: "100"
                }
            }), o("el-table-column", {
                attrs: {
                    prop: "booktypename",
                    label: "图书类型名",
                    width: "100",
                    "show-overflow-tooltip": ""
                }
            }), o("el-table-column", {
                attrs: {
                    prop: "bookdesc",
                    label: "图书描述",
                    "min-width": "300",
                    "show-overflow-tooltip": ""
                }
            }), o("el-table-column", {
                attrs: {label: "图书状态", width: "100"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [1 === t.row.isborrowed ? o("span", {staticStyle: {color: "red"}}, [e._v("已借出")]) : o("span", {staticStyle: {color: "#1aac1a"}}, [e._v("未借出")])]
                    }
                }])
            }), o("el-table-column", {
                attrs: {fixed: "right", label: "操作", width: e.roleIsAdmin ? "240px" : "110px"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [o("el-button", {
                            directives: [{
                                name: "permission",
                                rawName: "v-permission",
                                value: ["admin"],
                                expression: "['admin']"
                            }], attrs: {type: "primary", size: "small"}, on: {
                                click: function (o) {
                                    return e.handleUpdate(t.row)
                                }
                            }
                        }, [e._v("编辑")]), o("el-button", {
                            directives: [{
                                name: "permission",
                                rawName: "v-permission",
                                value: ["admin"],
                                expression: "['admin']"
                            }], attrs: {type: "danger", size: "small"}, on: {
                                click: function (o) {
                                    return e.handleDelete(t.row, t.$index)
                                }
                            }
                        }, [e._v("删除")]), o("el-button", {
                            attrs: {type: "success", size: "small"},
                            on: {
                                click: function (o) {
                                    return e.handleBorrow(t.row)
                                }
                            }
                        }, [e._v("借阅图书")])]
                    }
                }])
            })], 1), o("el-pagination", {
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
        }, a = [], n = o("5530"), i = (o("a434"), o("2f62")), l = o("4381"), s = o("6724"), u = o("b775");

        function c() {
            return Object(u["a"])({url: "/bookInfo/getCount", method: "get"})
        }

        function d(e) {
            return Object(u["a"])({url: "/bookInfo/queryBookInfosByPage", method: "get", params: e})
        }

        function m(e) {
            return Object(u["a"])({url: "/bookInfo/addBookInfo", method: "post", data: e})
        }

        function p(e) {
            return Object(u["a"])({url: "/bookInfo/deleteBookInfo", method: "delete", data: e})
        }

        function b(e) {
            return Object(u["a"])({url: "/bookInfo/deleteBookInfos", method: "delete", data: e})
        }

        function f(e) {
            return Object(u["a"])({url: "/bookInfo/updateBookInfo", method: "put", data: e})
        }

        var h = o("dbc7"), k = o("6517"), g = o("c24f"), y = {
            name: "Bookinfo",
            directives: {waves: s["a"], permission: l["a"]},
            created: function () {
                var e = this;
                d(this.queryParam).then((function (t) {
                    console.log("首页数据获取成功", t), e.tableData = t.data, e.recordTotal = t.count
                })), Object(h["e"])().then((function (t) {
                    console.log("图书类型获取成功", t), e.typeData = t
                }))
            },
            mounted: function () {
                !1 === this.roleIsAdmin && (this.queryParam.limit = 5, this.handleSizeChange(this.queryParam.limit))
            },
            methods: {
                handleSizeChange: function (e) {
                    var t = this, o = this.queryParam;
                    o.limit = e, d(o).then((function (e) {
                        console.log("分页数据获取成功", e), t.tableData = e.data, t.recordTotal = e.count
                    }))
                }, handleCurrentChange: function (e) {
                    var t = this, o = this.queryParam;
                    o.page = e, d(o).then((function (e) {
                        console.log("分页数据获取成功", e), t.tableData = e.data, t.recordTotal = e.count
                    }))
                }, handleFilter: function () {
                    var e = this;
                    this.queryParam.page = 1, d(this.queryParam).then((function (t) {
                        0 === t.code && (e.tableData = t.data, e.recordTotal = t.count)
                    }))
                }, handleShowAll: function () {
                    var e = this;
                    this.queryParam.page = 1, this.queryParam.bookname = null, this.queryParam.bookauthor = null, this.queryParam.booktypeid = null, d(this.queryParam).then((function (t) {
                        0 === t.code && (e.tableData = t.data, e.recordTotal = t.count)
                    }))
                }, handleAvatarSuccess: function (e, t) {
                    console.log(e), console.log(t), 0 === e.code ? (this.$message.success("上传成功"), this.form.bookimg = e.data) : this.$message.error("上传失败，请联系管理员")
                }, beforeAvatarUpload: function (e) {
                    var t = "image/jpeg" === e.type, o = e.size / 1024 / 1024 < 2;
                    return t || this.$message.error("上传封面图片只能是 JPG 格式!"), o || this.$message.error("上传封面图片大小不能超过 2MB!"), t && o
                }, handleCreate: function () {
                    var e = this;
                    Object(h["e"])().then((function (t) {
                        console.log("图书类型获取成功", t), e.typeData = t
                    })), this.formType = 0, this.form = {
                        bookid: null,
                        bookname: "红楼梦",
                        bookauthor: "曹雪芹",
                        bookprice: "35.5",
                        booktypeid: 1,
                        bookdesc: "为闺阁立传",
                        isborrowed: 0,
                        bookimg: "http://wangpeng-imgsubmit.oss-cn-hangzhou.aliyuncs.com/img/202111131322401.jpg"
                    }, this.dialogFormVisible = !0
                }, handleUpdate: function (e) {
                    var t = this;
                    Object(h["e"])().then((function (e) {
                        console.log("图书类型获取成功", e), t.typeData = e
                    })), this.formType = 1, this.form = {
                        bookid: e.bookid,
                        bookname: e.bookname,
                        bookauthor: e.bookauthor,
                        bookprice: e.bookprice,
                        booktypeid: e.booktypeid,
                        bookdesc: e.bookdesc,
                        isborrowed: e.isborrowed,
                        bookimg: e.bookimg
                    }, this.dialogFormVisible = !0
                }, handleBorrow: function (e) {
                    var t = this;
                    this.roleIsAdmin ? (this.dialogFormVisible2 = !0, this.form2.bookid = e.bookid, Object(g["i"])().then((function (e) {
                        t.userData = e
                    }))) : this.$confirm("您确定要借书吗?", "提示").then((function () {
                        Object(k["a"])(t.id, e.bookid).then((function (e) {
                            1 === e ? (t.$message.success("借书成功"), t.handleCurrentChange(t.queryParam.page)) : t.$message.error("借书失败"), t.dialogFormVisible2 = !1
                        }))
                    }))
                }, submitForm: function () {
                    var e = this;
                    0 === this.formType ? m(this.form).then((function (t) {
                        1 === t ? (e.$message.success("添加记录成功"), c().then((function (t) {
                            e.recordTotal = t, e.queryParam.page = Math.ceil(e.recordTotal / e.queryParam.limit), e.handleCurrentChange(e.queryParam.page)
                        }))) : e.$message.error("添加记录失败"), e.dialogFormVisible = !1
                    })) : 1 === this.formType && f(this.form).then((function (t) {
                        1 === t ? (e.$message.success("更新记录成功"), e.handleCurrentChange(e.queryParam.page)) : e.$message.error("更新记录失败"), e.dialogFormVisible = !1
                    }))
                }, submitForm2: function () {
                    var e = this;
                    Object(k["a"])(this.form2.userid, this.form2.bookid).then((function (t) {
                        1 === t ? (e.$message.success("借书成功"), e.handleCurrentChange(e.queryParam.page)) : e.$message.error("借书失败"), e.dialogFormVisible2 = !1
                    }))
                }, handleDelete: function (e, t) {
                    var o = this;
                    this.$confirm("确定要删除该条记录吗?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then((function () {
                        p(e).then((function (e) {
                            1 === e ? (o.$message.success("删除记录成功"), o.tableData.splice(t, 1), 0 === o.tableData.length && (o.queryParam.page = o.queryParam.page - 1, o.handleCurrentChange(o.queryParam.page))) : o.$message.error("删除记录失败")
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
                        b(t).then((function (t) {
                            t > 0 ? (e.$message.success("删除" + t + "条记录成功"), e.tableData.length === t && 0 !== e.queryParam.page && (e.queryParam.page = e.queryParam.page - 1), e.handleCurrentChange(e.queryParam.page)) : e.$message.error("删除记录失败")
                        }))
                    }))
                }
            },
            data: function () {
                return {
                    tableData: [],
                    recordTotal: 0,
                    typeData: [],
                    userData: [],
                    queryParam: {page: 1, limit: 10, bookname: null, bookauthor: null, booktypeid: null},
                    dialogFormVisible: !1,
                    dialogFormVisible2: !1,
                    formType: 0,
                    form: {
                        bookid: null,
                        bookname: "",
                        bookauthor: "",
                        bookprice: 0,
                        booktypeid: 1,
                        bookdesc: "",
                        isborrowed: 0,
                        bookimg: ""
                    },
                    form2: {userid: 1, bookid: 1},
                    rules: {
                        bookname: [{required: !0, message: "请输入图书名称", trigger: "blur"}],
                        bookauthor: [{required: !0, message: "请输入作者", trigger: "blur"}],
                        bookprice: [{required: !0, message: "请输入价格", trigger: "blur"}],
                        booktypeid: [{required: !0, message: "请选择类型", trigger: "blur"}],
                        bookdesc: [{required: !0, message: "请输入描述", trigger: "blur"}],
                        isborrowed: [{required: !0, message: "请选择状态", trigger: "blur"}]
                    }
                }
            },
            computed: Object(n["a"])(Object(n["a"])({}, Object(i["b"])(["id", "name", "roles"])), {}, {
                formTitle: function () {
                    return 0 === this.formType ? "添加记录" : "修改记录"
                }, roleIsAdmin: function () {
                    return "admin" === this.roles[0]
                }
            })
        }, v = y, w = (o("5d67"), o("2877")), q = Object(w["a"])(v, r, a, !1, null, "7b20c9e1", null);
        t["default"] = q.exports
    }, dbc7: function (e, t, o) {
        "use strict";
        o.d(t, "d", (function () {
            return a
        })), o.d(t, "e", (function () {
            return n
        })), o.d(t, "f", (function () {
            return i
        })), o.d(t, "a", (function () {
            return l
        })), o.d(t, "b", (function () {
            return s
        })), o.d(t, "c", (function () {
            return u
        })), o.d(t, "g", (function () {
            return c
        }));
        var r = o("b775");

        function a() {
            return Object(r["a"])({url: "/bookType/getCount", method: "get"})
        }

        function n() {
            return Object(r["a"])({url: "/bookType/queryBookTypes", method: "get"})
        }

        function i(e) {
            return Object(r["a"])({url: "/bookType/queryBookTypesByPage", method: "get", params: e})
        }

        function l(e) {
            return Object(r["a"])({url: "/bookType/addBookType", method: "post", data: e})
        }

        function s(e) {
            return Object(r["a"])({url: "/bookType/deleteBookType", method: "delete", data: e})
        }

        function u(e) {
            return Object(r["a"])({url: "/bookType/deleteBookTypes", method: "delete", data: e})
        }

        function c(e) {
            return Object(r["a"])({url: "/bookType/updateBookType", method: "put", data: e})
        }
    }, dbf9: function (e, t, o) {
    }
}]);