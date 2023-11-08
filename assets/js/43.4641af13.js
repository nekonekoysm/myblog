(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{460:function(s,a,n){"use strict";n.r(a);var e=n(3),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"nginx-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安装"}},[s._v("#")]),s._v(" nginx 安装")]),s._v(" "),a("p",[s._v("从 / 根目录下查找文件名为 "),a("code",[s._v("nginx.conf")]),s._v(" 的文件 查看是否安装了 nginx")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" nginx.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装相关依赖包")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc zlib zlib-devel pcre-devel openssl openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上传已下载好的压缩包"),a("code",[s._v("nginx-1.22.1.tar.gz")]),s._v(" 到 "),a("code",[s._v("/usr/local")]),s._v(" 目录下\n（官网下载地址：http://nginx.org/en/download.html）")]),s._v(" "),a("p",[s._v("解压")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" nginx-1.22.1.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("cd 进入 "),a("code",[s._v("nginx-1.22.1")]),s._v(" 目录并按顺序执行命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./configure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("以上三条命令执行结束后，会在 "),a("code",[s._v("/usr/local")]),s._v(" 目录下多一个 nginx 目录，\ncd 进入 "),a("code",[s._v("/usr/local/nginx/sbin")]),s._v(" 目录，启动 nginx：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("直接在浏览器输入服务器的 ip 地址测试 nginx 是否启动成功（由于端口号默认是 80 可以省略）\n出现 welcome to nginx！页面即成功")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("配置 "),a("code",[s._v("nginx.conf")]),s._v(" 目录："),a("code",[s._v("/usr/local/nginx/conf/nginx.conf")]),s._v("\n重启 "),a("code",[s._v("./nginx -s reload")]),s._v(" 目录："),a("code",[s._v("/usr/local/nginx/sbin")])]),s._v(" "),a("p",[a("strong",[s._v("若 80 端口被占用，需换其他端口，例如开放 8085 端口：")]),s._v("\n（如果是云服务器需要在云后台开放对应端口）")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("重启防火墙：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询端口号 8085 是否开启：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("firewall-cmd --query-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),s._v("/tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"ps-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ps-常用命令"}},[s._v("#")]),s._v(" PS：常用命令")]),s._v(" "),a("p",[s._v("查看已知端口(80)占用情况")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-anp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看 nginx 进程是否启动：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("（以下命令的执行都需要先进入指定目录，例如：cd /usr/local/nginx/sbin）\n启动 nginx："),a("code",[s._v("./nginx")]),s._v("\n关闭 nginx："),a("code",[s._v("./nginx -s stop")]),s._v("\n重启 nginx："),a("code",[s._v("./nginx -s reload")])])])}),[],!1,null,null,null);a.default=t.exports}}]);