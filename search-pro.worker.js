const d=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},g=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of g(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=d(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&g(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=d(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/intro.html\":{\"title\":\"个人介绍\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"这个人很懒，什么都没有留下。\"]}]},\"/CodeLearning/NginxOpenHttps.html\":{\"title\":\"Nginx 开启 Https\",\"contents\":[{\"header\":\"前期准备：\",\"slug\":\"前期准备\",\"contents\":[\"Windows 10+\",\"Nginx\",\"keytool（Windows 自带）\",\"openssl（Git 自带）\",\"JDK（实验环境：JDK11）\"]},{\"header\":\"生成 JKS 格式密钥库\",\"slug\":\"生成-jks-格式密钥库\",\"contents\":[\"打开 Windows 终端\",\"在终端键入\",\"替换 <> 里的内容，并回车\"]},{\"header\":\"将 JKS 转为 P12 密钥库\",\"slug\":\"将-jks-转为-p12-密钥库\",\"contents\":[\"在终端键入\",\"替换 <> 里的内容，并回车\"]},{\"header\":\"生成证书\",\"slug\":\"生成证书\",\"contents\":[\"注意替换为自己的名称\",\"证书生成后移动到 nginx 根目录的 conf 文件夹下\"]},{\"header\":\"修改 Nginx 内容\",\"slug\":\"修改-nginx-内容\",\"contents\":[\"Windows 终端输入命令重新加载\"]},{\"header\":\"免费 SSL 证书机构\",\"slug\":\"免费-ssl-证书机构\",\"contents\":[\"Certbot\",\"Let's Encrypt\",\"提供以上两个申请 SSL 的机构，具体使用方法可以自行使用搜索引擎。\"]},{\"header\":\"使用前提\",\"slug\":\"使用前提\",\"contents\":[\"有一台服务器\",\"域名已解析到服务器 IP\"]}]},\"/CodeLearning/\":{\"title\":\"编程学习\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Nginx 开启 https\"]}]},\"/Docs/\":{\"title\":\"系列文档\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"MySQL 学习\"]}]},\"/SoftwareGuide/AdguardHome.html\":{\"title\":\"OpenWrt 配置 AdguardHome 搭配 OpenClash\",\"contents\":[{\"header\":\"注意：\",\"slug\":\"注意\",\"contents\":[\"本指南环境为 N1 软路由 OpenWrt 系统\",\"确保关闭其它 DNS 插件\",\"检查所有配置，并且 保存&应用\",\"例：Turbo ACC 网络加速设置\",\"关闭 DNS 缓存\",\"查看左侧菜单网络下的 DHCP/DNS\"]},{\"header\":\"OpenClash 配置\",\"slug\":\"openclash-配置\",\"contents\":[\"DNS 设置\",\"*本地 DNS 劫持：停用\",\"*自定义上游 DNS 服务器 [✔️]\",\"追加上游 DNS [✔️]\",\"追加默认 DNS [✔️]\"]},{\"header\":\"Adguard Home 配置\",\"slug\":\"adguard-home-配置\",\"contents\":[\"设置上游 DNS 服务器为 OpenClash 的 DNS 监听端口：7874（默认）\",\"[✔️]并行请求\",\"Bootstrap DNS 服务器设置几个国内 DNS\",\"可参考：DNS 服务配置\",\"常规设置\",\"[✔️]使用过滤器和Hoss文件以拦截指定域名\",\"如果需要过滤广告=>DNS黑名单\",\"可以添加以下规则并勾选\"]}]},\"/SoftwareGuide/\":{\"title\":\"杂七杂八的使用指南\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"使用终端修改时区\",\"MacOS 手动删除允许在后台列表\",\"OpenWrt 配置 AdguardHome 搭配 OpenClash\",\"Windows 10 右键运行 Terminal 终端\"]}]},\"/SoftwareGuide/RemoveListsInTheBackground.html\":{\"title\":\"将 MacOS 已删除的程序在登录项中的允许在后台列表中去除\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"方法一：在终端中查看允许在后台列表应用的 .plist 路径\",\"方法二：输出到桌面\"]}]},\"/SoftwareGuide/Terminal.html\":{\"title\":\"Windows 10 添加 Terminal 右键菜单\",\"contents\":[{\"header\":\"准备工作\",\"slug\":\"准备工作\",\"contents\":[\"一台 Windows 10 系统的电脑\",\"已在微软应用(Microsoft Store)商店 安装 Windows Terminal\"]},{\"header\":\"编写注册表项\",\"slug\":\"编写注册表项\",\"contents\":[\"新建 .reg 后缀的文件，填写内容，注意 {用户名} 需要填写自己电脑当前账号的用户名\",\"如果需要管理员运行终端，也可以填写以下内容\",\"保存并双击运行\"]},{\"header\":\"在注册表中手动添加\",\"slug\":\"在注册表中手动添加\",\"contents\":[]},{\"header\":\"当前用户打开终端\",\"slug\":\"当前用户打开终端\",\"contents\":[\"键盘按住 Windows 图标 + R 键\",\"输入regedit，点击确定\",\"在地址栏输入HKEY_CLASSES_ROOT\\\\Directory\\\\background\\\\shell或手动查找HKEY_CLASSES_ROOT -> Directory -> background -> shell\",\"右键shell -> 新建 项 -> 输入 wt\",\"右键wt -> 新建 字符串值(S) -> 输入 Icon，设置 Terminal 图标\",\"双击 Icon 并输入C:\\\\Users\\\\{用户名}\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps\\\\terminal.ico，{用户名}替换为电脑当前的用户名\",\"修改(默认)项为：在终端中打开\",\"右键左侧 wt 新建 项 -> 输入 command，设置启动路径\",\"定位到 command 修改(默认)项为：C:\\\\Users\\\\{用户名}\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps\\\\wt.exe，{用户名}替换为电脑当前的用户名\",\"添加完成，右键桌面测试是否添加成功\"]},{\"header\":\"管理员打开终端\",\"slug\":\"管理员打开终端\",\"contents\":[\"步骤与上一节一样\",\"需要注意\",\"在第4步中，wt替换为runas\",\"在第7步中，在终端中打开替换为在终端中打开(管理员)\"]}]},\"/SoftwareGuide/Timezone.html\":{\"title\":\"使用终端修改时区\",\"contents\":[{\"header\":\"MacOS 设置时区\",\"slug\":\"macos-设置时区\",\"contents\":[]},{\"header\":\"查看(Get)\",\"slug\":\"查看-get\",\"contents\":[]},{\"header\":\"设置(Set)\",\"slug\":\"设置-set\",\"contents\":[]}]},\"/Docs/MySQL/Install.html\":{\"title\":\"1、MySQL8.0 安装\",\"contents\":[{\"header\":\"准备\",\"slug\":\"准备\",\"contents\":[\"MySQL 下载地址\"]},{\"header\":\"Windows 安装\",\"slug\":\"windows-安装\",\"contents\":[\"下载时选择不登录直接下载，下面将展示如何安装绿色版 (MySQL Community Server) 和安装版 (MySQL Installer for Windows)\"]},{\"header\":\"绿色版 (MySQL Community Server)\",\"slug\":\"绿色版-mysql-community-server\",\"contents\":[]},{\"header\":\"安装 MySQL\",\"slug\":\"安装-mysql\",\"contents\":[\"绿色版下载的是一个压缩包，没有 图形界面\",\"解压后，文件结构如下\",\"安装完成后根目录应该是下图所示\",\"需要自己在 MySQL 的根目录 创建 一个 my.ini 的文件，基本内容如下，此配置基本满足学习需要。\",\"以管理员身份打开终端，进入 bin 目录，执行命令。\",\"安装 MySQL 服务\",\"启动服务\",\"进入 MySQL 命令行\",\"修改密码\"]},{\"header\":\"删除 MySQL\",\"slug\":\"删除-mysql\",\"contents\":[\"进入 MySQL 的根目录上一层 Environment，选中 mysql-8.x.xx，按住键盘 Shift + Del，回车。\"]},{\"header\":\"安装版 (MySQL Installer for Windows)\",\"slug\":\"安装版-mysql-installer-for-windows\",\"contents\":[]},{\"header\":\"安装 MySQL\",\"slug\":\"安装-mysql-1\",\"contents\":[\"双击下载好的 .msi 文件，以管理员运行，选择 Custom 安装\",\"将 MySQL 服务选择到下载列表，单击右边的 MySQL Server 8.0.32 - X64 ，出现蓝色字体 Advanced Options ，单击。\",\"将数据目录修改为 MySQL 的根目录下，点击 OK。\",\"下一步直到如图所示\",\"选择修改端口 Port，或者保持默认。\",\"点击下一步直到提示输入密码界面，输入两次密码。\",\"修改 MySQL 服务名或保持默认\",\"连续点击下一步，安装完成。\"]},{\"header\":\"删除 MySQL\",\"slug\":\"删除-mysql-1\",\"contents\":[\"双击 .msi 安装文件\",\"勾选当前卸载项\",\"勾选删除数据文件\"]}]},\"/Docs/MySQL/\":{\"title\":\"MySQL 学习\",\"contents\":[{\"header\":\"目标\",\"slug\":\"目标\",\"contents\":[\"学习MySQL数据库的基本知识和应用，包括如何建立和管理数据库、如何使用SQL查询、如何优化数据库性能等。\"]},{\"header\":\"学习资源\",\"slug\":\"学习资源\",\"contents\":[\"在这个部分，需要列出将要使用的学习资源。例如，教程、网站、书籍、视频等。\",\"资源1：MySQL 官方文档\"]},{\"header\":\"学习计划\",\"slug\":\"学习计划\",\"contents\":[]},{\"header\":\"阶段一：基础知识\",\"slug\":\"阶段一-基础知识\",\"contents\":[]},{\"header\":\"学习内容\",\"slug\":\"学习内容\",\"contents\":[\"数据库和表的创建、修改和删除\",\"数据类型和约束\",\"SQL查询语句的基本语法\"]},{\"header\":\"检查点\",\"slug\":\"检查点\",\"contents\":[\"使用SQL查询语句，创建一个简单的学生信息表，并插入一些测试数据。\"]},{\"header\":\"阶段二：中级知识\",\"slug\":\"阶段二-中级知识\",\"contents\":[]},{\"header\":\"学习内容\",\"slug\":\"学习内容-1\",\"contents\":[\"索引和优化查询\",\"外键和关联表\",\"存储过程和触发器\"]},{\"header\":\"检查点\",\"slug\":\"检查点-1\",\"contents\":[\"优化之前查询的性能，并解释所做的优化步骤。\"]},{\"header\":\"阶段三：高级知识\",\"slug\":\"阶段三-高级知识\",\"contents\":[]},{\"header\":\"学习内容\",\"slug\":\"学习内容-2\",\"contents\":[\"备份和恢复数据库\",\"安全性和用户权限\",\"高可用性和容灾\"]},{\"header\":\"检查点\",\"slug\":\"检查点-2\",\"contents\":[\"设计一个简单的数据库架构，并描述其高可用性和容灾策略。\"]},{\"header\":\"总结\",\"slug\":\"总结\",\"contents\":[\"MySQL是一种功能强大的数据库管理系统，掌握MySQL的基础知识和应用是一项非常重要的技能，也是许多软件开发和数据分析工作的基础。本文档提供了一个基础的学习计划，旨在帮助读者建立起MySQL的基础知识和应用能力，并提供了一些有用的学习资源和检查点，以便评估自己的学习进展。\"]}]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
