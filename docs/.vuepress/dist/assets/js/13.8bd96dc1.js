(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{483:function(s,t,a){"use strict";a.r(t);var r=a(29),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux下使用命令systemctl管理部署java-jar包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下使用命令systemctl管理部署java-jar包"}},[s._v("#")]),s._v(" Linux下使用命令systemctl管理部署Java jar包")]),s._v(" "),a("h1",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("Java项目编译完后通常都是 "),a("strong",[s._v("jar")]),s._v(" 包跟 "),a("strong",[s._v("war")]),s._v(" 包，war包都是在tomcat里面通过tomcat的管理方式来管理，而jar包一般都是通过 "),a("strong",[s._v("java -jar")]),s._v(" 或者 "),a("strong",[s._v("nohub java -jar")]),s._v("\n的方式来启动，而停止的话得先找出服务的进程ID，然后再kill掉，比较麻烦，使用systemctl来管理会更方便一点。")]),s._v(" "),a("p",[s._v("systemd是Linux系统最新的初始化系统，作用是方便管理系统服务，尽可能启动较少的进程，尽可能更多进程并发启动。\nsystemd对应的进程管理命令是systemctl")]),s._v(" "),a("h1",{attrs:{id:"一、在linux下部署服务步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、在linux下部署服务步骤"}},[s._v("#")]),s._v(" 一、在linux下部署服务步骤：")]),s._v(" "),a("h2",{attrs:{id:"_1-1-在目录-etc-systemd-system下建立hellword-service文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-在目录-etc-systemd-system下建立hellword-service文件"}},[s._v("#")]),s._v(" 1.1 在目录/etc/systemd/system下建立hellword.service文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/systemd/system/helloword.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("后缀不变，名称随意，例如：helloword.service")])]),s._v(" "),a("h2",{attrs:{id:"_1-2-在刚新建的-service中写入以下内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在刚新建的-service中写入以下内容"}},[s._v("#")]),s._v(" 1.2 在刚新建的.service中写入以下内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Spring Boot Application "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 描述")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("syslog.target network.target "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依赖")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/java -jar /opt/javaapps/hellword.jar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前面是java命令的绝对路径 后面是jar包的绝对路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -15 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v(".service文件定义了一个服务，分为 "),a("strong",[s._v("[Unit]，[Service]，[Install]")]),s._v(" 三个小节")]),s._v(" "),a("p",[a("strong",[s._v("[Unit]")]),a("br"),s._v("\nDescription：描述"),a("br"),s._v("\nAfter：在network.target,auditd.service启动后才启动"),a("br"),s._v("\nConditionPathExists：执行条件"),a("br")]),s._v(" "),a("p",[a("strong",[s._v("[Service]")]),a("br"),s._v("\nEnvironmentFile：变量所在文件"),a("br"),s._v("\nExecStart：执行启动脚本"),a("br"),s._v("\nRestart：fail时重启"),a("br")]),s._v(" "),a("p",[a("strong",[s._v("[Install]")]),a("br"),s._v("\nAlias：服务别名"),a("br"),s._v("\nWangtedBy：多用户模式下需要的"),a("br")]),s._v(" "),a("h1",{attrs:{id:"二、使用命令-systemctl-start-xxx-如-systemctl-start-helloword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、使用命令-systemctl-start-xxx-如-systemctl-start-helloword"}},[s._v("#")]),s._v(" 二、使用命令 systemctl start xxx，如 systemctl start helloword")]),s._v(" "),a("h1",{attrs:{id:"_2-1-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-常用命令"}},[s._v("#")]),s._v(" 2.1 常用命令")]),s._v(" "),a("p",[s._v("二、常用命令")]),s._v(" "),a("p",[s._v("systemctl 提供了一组子命令来管理单个的 unit，其命令格式为：")]),s._v(" "),a("p",[s._v("systemctl [command] [unit]")]),s._v(" "),a("p",[s._v("command 主要有："),a("br"),s._v("\nstart：立刻启动后面接的 unit。"),a("br"),s._v("\nstop：立刻关闭后面接的 unit。"),a("br"),s._v("\nrestart：立刻关闭后启动后面接的 unit，亦即执行 stop 再 start 的意思。"),a("br"),s._v("\nreload：不关闭 unit 的情况下，重新载入配置文件，让设置生效。"),a("br"),s._v("\nenable：设置下次开机时，后面接的 unit 会被启动。"),a("br"),s._v("\ndisable：设置下次开机时，后面接的 unit 不会被启动。"),a("br"),s._v("\nstatus：目前后面接的这个 unit 的状态，会列出有没有正在执行、开机时是否启动等信息。"),a("br"),s._v("\nis-active：目前有没有正在运行中。"),a("br"),s._v("\nis-enable：开机时有没有默认要启用这个 unit。"),a("br"),s._v("\nkill ：不要被 kill 这个名字吓着了，它其实是向运行 unit 的进程发送信号。"),a("br"),s._v("\nshow：列出 unit 的配置。"),a("br"),s._v("\nmask：注销 unit，注销后你就无法启动这个 unit 了。"),a("br"),s._v("\nunmask：取消对 unit 的注销。"),a("br")]),s._v(" "),a("h1",{attrs:{id:"三、踩坑记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、踩坑记录"}},[s._v("#")]),s._v(" 三、踩坑记录")]),s._v(" "),a("h2",{attrs:{id:"_3-1-执行start语句时-不成功-服务无法启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-执行start语句时-不成功-服务无法启动"}},[s._v("#")]),s._v(" 3.1 执行start语句时，不成功，服务无法启动")]),s._v(" "),a("p",[s._v("通过执行 "),a("strong",[s._v("status")]),s._v(" 命令发现报错203，原因是因为文件权限不足需要提升文件权限")]),s._v(" "),a("p",[s._v("解决办法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" helloword.jar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-2-main-process-exited-code-exited-status-203-exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-main-process-exited-code-exited-status-203-exec"}},[s._v("#")]),s._v(" 3.2 main process exited, code=exited, status=203/EXEC")]),s._v(" "),a("p",[s._v("问题原因是jar包不是可执行的")]),s._v(" "),a("p",[s._v("解决办法\n修改pom文件，加入以下内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("spring-boot-maven-plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("finalName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project.artifactId}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/finalName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("executable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/executable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("blockquote",[a("p",[s._v("本文作者："),a("a",{attrs:{href:"https://dbsecurity.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("许怀安"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("创作时间：2022.02.18\n"),a("br"),s._v("版权声明：本博客所有文章除特别声明外，均采用"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[s._v("BY-NC-SA"),a("OutboundLink")],1),s._v("许可协议。转载请禀明出处！")])])])}),[],!1,null,null,null);t.default=e.exports}}]);