(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{487:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、hutool的入门与安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、hutool的入门与安装"}},[t._v("#")]),t._v(" 一、Hutool的入门与安装")]),t._v(" "),a("h2",{attrs:{id:"_1-1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-简介"}},[t._v("#")]),t._v(" 1.1 简介")]),t._v(" "),a("p",[t._v("Hutool是一个小而全的Java工具类库，通过静态方法封装，降低相关API的学习成本，提高工作效率，使Java拥有函数式语言般的优雅，让Java语言也可以"),a("code",[t._v("甜甜的")]),t._v("。")]),t._v(" "),a("p",[t._v("Hutool中的工具方法来自每个用户的精雕细琢，它涵盖了Java开发底层代码中的方方面面，它既是大型项目开发中解决小问题的利器，也是小型项目中的效率担当；")]),t._v(" "),a("p",[t._v("Hutool是项目中"),a("code",[t._v("util")]),t._v("包友好的替代，它节省了开发人员对项目中公用类和公用工具方法的封装时间，使开发专注于业务，同时可以最大限度的避免封装不完善带来的bug。")]),t._v(" "),a("h2",{attrs:{id:"_1-2-包含的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-包含的组件"}},[t._v("#")]),t._v(" 1.2 包含的组件")]),t._v(" "),a("p",[t._v("一个Java基础工具类，对文件、流、加密解密、转码、正则、线程、XML等JDK方法进行封装，组成各种Util工具类，同时提供以下组件：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("模块")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-aop")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JDK动态代理封装，提供非IOC下的切面支持")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-bloomFilter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("布隆过滤，提供一些Hash算法的布隆过滤")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("简单缓存实现")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-core")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("核心，包括Bean操作、日期、各种Util等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-cron")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("定时任务模块，提供类Crontab表达式的定时任务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-crypto")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("加密解密模块，提供对称、非对称和摘要算法封装")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-db")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JDBC封装后的数据操作，基于ActiveRecord思想")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-dfa")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("基于DFA模型的多关键字查找")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-extra")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("扩展模块，对第三方封装（模板引擎、邮件、Servlet、二维码、Emoji、FTP、分词等）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-http")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("基于HttpUrlConnection的Http客户端封装")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-log")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("自动识别日志实现的日志门面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-script")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("脚本执行封装，例如Javascript")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-setting")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("功能更强大的Setting配置文件和Properties封装")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-system")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("系统参数调用封装（JVM信息等）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-json")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JSON实现")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-captcha")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("图片验证码实现")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-poi")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("针对POI中Excel和Word的封装")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-socket")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("基于Java的NIO和AIO的Socket封装")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hutool-jwt")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JSON Web Token (JWT)封装实现")])])])]),t._v(" "),a("p",[t._v("可以根据需求对每个模块单独引入，也可以通过引入"),a("code",[t._v("hutool-all")]),t._v("方式引入所有模块。")]),t._v(" "),a("h2",{attrs:{id:"_1-3-文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-文档"}},[t._v("#")]),t._v(" 1.3 文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.hutool.cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://apidoc.gitee.com/dromara/hutool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考API"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_1-4-安装hutool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-安装hutool"}},[t._v("#")]),t._v(" 1.4 安装HuTool")]),t._v(" "),a("h3",{attrs:{id:"_1-4-1-maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-maven"}},[t._v("#")]),t._v(" 1.4.1 Maven")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cn.hutool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hutool-all"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.7")]),t._v(".2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v("<")]),t._v("/version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_1-4-2-下载jar包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-下载jar包"}},[t._v("#")]),t._v(" 1.4.2 下载jar包")]),t._v(" "),a("p",[t._v("通过"),a("a",{attrs:{href:"https://repo1.maven.org/maven2/cn/hutool/hutool-all/5.7.20/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven中央库"),a("OutboundLink")],1),t._v("下载 "),a("code",[t._v("hutool-all-X.X.X.jar")]),t._v(" 即可")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("小tips")]),t._v(" "),a("p",[t._v("Hutool 5.x支持JDK8+，对Android平台没有测试，不能保证所有工具类或工具方法可用。 如果你的项目使用JDK7，请使用Hutool 4.x版本（不再更新）")])]),t._v(" "),a("h3",{attrs:{id:"_1-4-3-编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-编译安装"}},[t._v("#")]),t._v(" 1.4.3 编译安装")]),t._v(" "),a("p",[t._v("访问"),a("a",{attrs:{href:"https://gitee.com/dromara/hutool",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hutool的Gitee主页"),a("OutboundLink")],1),t._v(" clone整个项目源码（v5-master或v5-dev分支都可）然后进入Hutool项目目录执行：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("./hutool.sh "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后就可以使用Maven引入啦。")]),t._v(" "),a("h1",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hutool.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("HuTool"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://dbsecurity.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("许怀安"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("创作时间：2022.01.26\n"),a("br"),t._v("版权声明：本博客所有文章除特别声明外，均采用"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("BY-NC-SA"),a("OutboundLink")],1),t._v("许可协议。转载请禀明出处！")])])])}),[],!1,null,null,null);e.default=s.exports}}]);