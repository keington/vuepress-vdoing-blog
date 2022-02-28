(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{480:function(a,s,e){"use strict";e.r(s);var t=e(29),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"java运行环境的搭建-java-se"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java运行环境的搭建-java-se"}},[a._v("#")]),a._v(" Java运行环境的搭建（Java SE）")]),a._v(" "),e("h2",{attrs:{id:"_1-下载jdk-jre"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载jdk-jre"}},[a._v("#")]),a._v(" "),e("strong",[a._v("1. 下载JDK/JRE：")])]),a._v(" "),e("p",[a._v("    首先，访问Oracle公司的Java SE的"),e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载主页"),e("OutboundLink")],1),a._v("，选择一个版本（我这里选择Java SE 8），选择Linux栏目，选择"),e("strong",[a._v("x86 Compressed Archive")]),a._v("的Download"),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#java8-linux",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载链接"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("Oracle JDK下载之前得先"),e("a",{attrs:{href:"https://profile.oracle.com/myprofile/account/create-account.jspx",target:"_blank",rel:"noopener noreferrer"}},[a._v("注册Oracle账户"),e("OutboundLink")],1),a._v("才能下载"),e("br"),a._v("\nOracle JDK 1.8_202以上为收费版本，从官网也能下载，但是为了避免侵权问题，建议下载1.8_202以下的"),e("br"),a._v("\n下载JDK之前须先确认服务器的CPU硬件是x86还是Arm的，不同的CPU硬件是不同的安装包")])]),a._v(" "),e("p",[a._v("    下载完成后上传到测试/生产环境的服务器上，利用tar命令解压到/usr/local/目录下然后赋予755权限，然后使用vi/vim命令编辑/etc/profile将以下3-6行代码写入profile文件中，完成后按下键盘上的Esc键，然后输入 "),e("strong",[e("font",{attrs:{color:"green"}},[a._v(":wq")])],1),a._v(" 退出")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/profile\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#JDK Path")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/jdk1.8.0_202\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/jre/lib/rt.jar:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/lib/dt.jar:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/lib/tools.jar\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/bin\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("最后执行以下命令使之生效")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("    至此，Linux下的Java运行环境已经算是搭建完成，在shell中输入")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("java -version \n\njavac -version\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("如果回显显示 "),e("strong",[a._v('java version "1.8.0_xxx" 跟 javac 1.8.0_xxx')]),a._v("，则表明JDK环境已安装配置完成")]),a._v(" "),e("blockquote",[e("p",[a._v("本文作者："),e("a",{attrs:{href:"https://dbsecurity.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("许怀安"),e("OutboundLink")],1),a._v(" "),e("br"),a._v("创作时间：2022.1.17\n"),e("br"),a._v("版权声明：本博客所有文章除特别声明外，均采用"),e("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[a._v("BY-NC-SA"),e("OutboundLink")],1),a._v("许可协议。转载请禀明出处！")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
