(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({CV:"CV",Index:"Index"}[e]||e)+"."+{CV:"3138c7f9",Index:"82421800"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={CV:1,Index:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({CV:"CV",Index:"Index"}[e]||e)+"."+{CV:"92ace5ab",Index:"37f31895"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===i))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],p=l.getAttribute("data-href");if(p===a||p===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],h.parentNode.removeChild(h),n(o)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(e);var u=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var h=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("64a9")},"30a4":function(e,t,n){"use strict";n.d(t,"b",(function(){return h}));n("456d"),n("ac6a");var a=n("d225"),r=n("b0b4"),i=n("bc3a"),o=n.n(i),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a["a"])(this,e),this.options=Object.assign({timeout:1500},n||{}),this.service=o.a.create(this.options),this._invoke(t)}return Object(r["a"])(e,[{key:"_invoke",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(t).forEach((function(n){var a=new c(e,t[n]);e[n]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.invalidate(e)}}))}}]),e}(),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a["a"])(this,e),this.factory=t,this.config={url:n.url||"",method:n.method||"GET",headers:n.headers||{}},this.invoke()}return Object(r["a"])(e,[{key:"invoke",value:function(){this.request=function(e){var t=(e.config.method||"get").toUpperCase();switch(t){case"POST":return new p(e.config);default:return new l(e.config)}}(this)}},{key:"invalidate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=this;return new Promise((function(n,a){t.factory.service.request(t.request.do(e)).then(n).catch(a)}))}}]),e}(),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(a["a"])(this,e),this.def=t,this.def.headers=Object.assign({"Content-Type":"application/json"},this.def.headers)}return Object(r["a"])(e,[{key:"do",value:function(e){return Object.assign(this.def,{params:e})}}]),e}(),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(a["a"])(this,e),this.def=t,this.def.headers=Object.assign({"Content-Type":"application/x-www-form-urlencoded"},this.def.headers)}return Object(r["a"])(e,[{key:"do",value:function(e){return Object.assign(this.def,{data:e})}}]),e}(),u=Object(r["a"])((function e(){Object(a["a"])(this,e)})),h={cv:{url:"/data/cv",method:"get",data:{company:[{timestamp:"2015/7 - 2017/2",name:"深圳市新心动网络科技有限公司",duties:"Android",introduction:"担任Android主程，负责自主项目产品'我要男神'和' 一面' 两款社交App的Android端<br/>在公司接近两年的开发工作中，有效的利用工作和学习积极性提升开发速度和提升自身技术栈。<br/><article><h3>我要</h3><section style=\"padding-left: 1rem;\"><h4>项目职责：</h4><span>主程项目的开发、和测试等</span><h4>项目实现：</h4><span>项目使用MVC模式进行开发，结合Retrofit、Okhttp dagger等实现项目数据传输和处理方案</span><h4>项目总结：</h4><span>加深使用优秀开源框架技术方案，对项目进行优化重构。</span><br/><span>增加对应用性能优化和防御式编程的经验。</span><br/></section></article><article><h3>一面</h3><section style=\"padding-left: 1rem;\"><h4>项目职责：</h4><span>主程项目的设计、分析评估、开发、和测试等</span><h4>项目实现：</h4><span>项目整体采MVP模式进行搭建和开发，对模块实现完全解耦。利用rx进行任务调度和事件分发处理，提升处理速度和优化事件</span><br/><span>配合长链接框架Netty和极光推送服务，实现直播场景内的交互业务（直播，消息，礼物，动画场景等）</span><h4>项目总结：</h4><span>加深使用优秀开源框架技术方案，对项目进行优化重构。</span><br/><span>对Android防御式开发和性能优化方面经验加强,</span><br/><span>增加对长链接和推送处理的熟练度，并完善对Netty框架的空缺。</span><br/></section></article>",product:[{name:"我要男神",image:"https://pp.myapp.com/ma_icon/0/icon_12152197_1555767358/96",href:"https://sj.qq.com/myapp/detail.htm?apkName=com.ineed",enable:!0},{name:"一面",image:"https://img.c1578dn.cn/img2019/3/15/14/2019031540143480.jpg",href:"https://www.zcool.com.cn/work/ZMTk0MTAzNDQ=.html",enable:!0}]},{timestamp:"2017/3 - 2018/3",name:"深圳市宏图网络科技有限公司",duties:"Android",introduction:"针对公司自主产品'互娱直播'的开发和优化，包括游戏，控制产品的错误率和崩溃率<br/>对产品内存问题管理，性能优化等，对部分原始初期架构(网络，数据处理，布局适配，长链接通讯优化等)进行重构优化，<br/>优化运行时的卡顿，提升产品流畅性。<br/>任职期间获得对直播行业的重新认知,和对用户交互的粘性的把控。<br/>在职期间学习和实践开发使用Cocos2dx-js,es6,ts 等<br/><article><h3>互娱直播</h3><section style=\"padding-left: 1rem;\"><h4>项目职责：</h4><span>对产品的直播处理，游戏开发和优化性能，重构等职务。</span><h4>项目实现：</h4><span>项目使用MVP模式进行开发，</span><br/><span>使用的开源框架有 rx,Retrofit,Okhttp,Netty,lottie 等。</span><br/><span>产品内游戏功能（棋牌,抓娃娃,猜拳等），使用cocos2dx-js 搭建和开发。</span><h4>项目总结：</h4><span>涉足游戏gl开发的理念，加深对项目多元化的理解。</span><br/><span>增加对应用性能优化和防御式编程的经验。</span><br/></section></article>",product:[{name:"互娱直播",image:"./images/20189141533266297.png",href:"",enable:!1}]},{timestamp:"2018/4 - 2019/10",name:"深圳市吉氪科技有限公司",duties:"Android/运维/H5/小程序",introduction:'Android项目的开发，小程序开发，服务器环境搭建和服务部署，后台管理开发等<br/>1. 公司项目Android端的架构和开发。<br/>2. 对服务器（CentOS）进行项目部署配置。（Nginx + services[systemctl]），包括不限于代理，数据库，服务监听保活和容灾处理。<br/>3. 公司商城项目（沃买）后台开发<br/>4. 公司外接项目 小程序开发。<br/><article><h3>NewEco</h3><section style="padding-left: 1rem;"><h4>项目职责：</h4><span>主程该应用的开发任务。</span><h4>项目实现：</h4><span>项目采用MVP模式进行开发，</span><br/><span>使用Gradle对模块进行分离实现组件化标准，组件化剥离模块耦合问题，利用脚本实现打包合并。</span><br/><span>架构采用rx,Retrofit,Okhttp等实现应用底层以及业务的调度交互逻辑。</span><h4>项目总结：</h4><span>增加对数字货币类交易的代码安全（失真，密钥，内存溢出等问题）和防御式编程的理解。</span></section></article><article><h3>族上一品</h3><section style="padding-left: 1rem;"><h4>项目职责：</h4><span>主程该应用的开发任务。</span><h4>项目实现：</h4><span>整体架构复用\'NewEco\'</span></section></article><article><h3>乐享商城(Hybrid)</h3><section style="padding-left: 1rem;"><h4>项目职责：</h4><span>主程该应用的开发任务。</span><h4>项目实现：</h4><span>Vue实现界面,Cordova打包.原生交互部分自定义插件（百川,开普勒）。</span></section></article><article><h3>微信小程序（中国平安生态城）</h3><section style="padding-left: 1rem;"><h4>项目职责：</h4><span>主程该应用的开发任务。</span><h4>项目实现：</h4><span>项目采用原生微信小程序+Vue实现。</span><br/><span>原生实现信息流业务部分。Vue实现3D模型展示部分（使用Threejs开发）。</span><h4>项目总结：</h4><span>初涉Threejs框架和小程序部分，填补对类Hybird开发和技术栈缺陷。</span><br/><span>提升自身开发环境的局限性。扩展技术栈纵向知识。</span></section></article>',product:[{name:"NewEco",image:"https://os.ozukus.com/uploadfile/20190625/20190625123123_2554.png",href:"https://os.ozukus.com/newpay/mobile_index.html#/",enable:!1},{name:"族上一品",image:"https://os.ozukus.com/uploadfile/20190603/20190603152646_4097.jpg",href:"https://os.ozukus.com/yiping/mobile_index.html#/",enable:!0},{name:"乐享商城",image:"https://os.ozukus.com/uploadfile/20190930/20190930185302_4799.png",href:"https://os.ozukus.com/leshare/mobile_index.html#/",enable:!0},{name:"中国平安生态城",image:"./images/931852566.png",href:"",enable:!1}]},{timestamp:"2020/4 - 至今",name:"深圳市乐福衡器有限公司",duties:"Android工程师",introduction:"在司内担任安卓开发任务,任期内主导多款项目进行重构,对项目设计模式和简化开发的推广。<br/><article><h3>岗位职责</h3><section style='padding-left: 1rem;'><h4>主职开发和维护‘热量减肥法’和‘营养秤’</h4></section></article>",product:[{name:"热量减肥法",image:"./images/com.pengpeng.avocado.png",href:"https://sj.qq.com/myapp/detail.htm?apkName=com.lefu.nutritionscale&info=1981CF16F1FD59B099D675A0597C7122",enable:!0},{name:"FoodScale",image:"https://pp.myapp.com/ma_icon/0/icon_54084949_1616502746/96",href:"https://sj.qq.com/myapp/detail.htm?apkName=com.pengpeng.eightysix&info=4DB6BCB92A6783E70004BD45074573E9",enable:!0},{name:"乐福能量云",image:"https://pp.myapp.com/ma_icon/0/icon_52582365_1610454715/96",href:"https://sj.qq.com/myapp/detail.htm?apkName=com.lefu.nutritionscale&info=1981CF16F1FD59B099D675A0597C7122",enable:!0}]}],skill:[{name:"Android",scope:80,percent:.8,print:!0,detail:"<h3>Android</h3><ul><li>丰富的手机UI设计开发经验,良好的编程基础</li><li>多年的社交、钱包交易和直播经验</li><li>熟练自定义view编程、熟悉网络编程、多线程、图形界面编程、通讯协议等</li><li>掌握和运用Jetpack 和 Compose 框架开发</li><li>熟悉Android性能及内存调优，能够对移动应用进行性能分析和优化</li><li>能独立承担Android产品开发、喜欢和善于学习新的技术和开源框架</li></ul>"},{name:"Java",scope:70,percent:.7,print:!0,detail:"<h3>Java</h3><ul><li>扎实的语言基础</li><li>熟悉集合、IO、多线程、反射、长链接等开发</li></ul>"},{name:"Kotlin",scope:80,percent:.8,print:!0,detail:"<h3>Kotlin</h3><ul><li>良好的编程基础</li><li>熟练使用函数式和协程、反射等开发</li><li>熟练使用lambda表达式和开发Android</li><li>已上线多款应用</li></ul>"},{name:"Vue",scope:75,percent:.75,print:!0,detail:'<h3>Vue</h3><ul><li>本网站搭建：<br/>Vue + VRouter + Axios + Mock + G2 等 [<a href="https://raw.githubusercontent.com/AnMokoto/CV/master/package.json">target</a>]</li></ul>'}]}}};t["a"]=new s(h,{baseURL:Object({NODE_ENV:"production",BASE_URL:""}).baseURL})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("c-footer")],1)},i=[],o=(n("034f"),n("2877")),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),l=c.exports,p=n("8c4f"),u=function(){return n.e("CV").then(n.bind(null,"f928"))},h=function(){return n.e("Index").then(n.bind(null,"1e4b"))},d=[];d.push({path:"/profile",name:"profile",component:u,meta:{title:"阅历"}});var m=d;a["default"].use(p["a"]);var f=new p["a"]({mode:"hash",scrollBehavior:function(e){return e.hash?{selector:e.hash,behavior:"smooth"}:{x:0,y:0}},routes:[]});f.addRoutes(m),f.addRoutes([{path:"*",name:"home",component:h,meta:{title:"yoyoyo~~~"}}]),f.afterEach((function(e){e.meta&&e.meta.title&&(document.title=e.meta.title)}));var b=f,g=n("5c96"),v=n.n(g);n("0fae"),n("8691");n("9cab"),a["default"].use(v.a);n("7f7f");var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("span",[e._v("Copyright ©"+e._s(e.year)+" -\n    "),n("el-link",{attrs:{href:"https://github.com/anmokoto",underline:!1,target:"_blank"}},[e._v("Mr.Xu")]),e._v("\n    . All Rights Reserved .\n  ")],1),n("div",[n("el-link",{attrs:{rel:"license",underline:!1,href:"http://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"}})]),n("br"),e._v("License By\n    "),n("el-link",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank"}},[e._v("\n      Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License\n    ")]),e._v("\n    .\n  ")],1)])},k=[],j={name:"cFooter",computed:{year:function(){return(new Date).getFullYear()}}},_=j,w=(n("d52a"),Object(o["a"])(_,y,k,!1,null,"286b1d75",null)),O=w.exports,C={install:function(e){e.component(O.name,O)}};a["default"].use(C),a["default"].config.productionTip=!1,new a["default"]({router:b,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){},8691:function(e,t,n){},"9cab":function(e,t,n){"use strict";n.r(t);n("456d"),n("ac6a");var a=n("96eb"),r=n.n(a),i=n("30a4");Object.keys(i["b"]).forEach((function(e){var t=i["b"][e];r.a.mock(t.url,t.method,t.data)}))},b4a6:function(e,t,n){},d52a:function(e,t,n){"use strict";n("b4a6")}});
//# sourceMappingURL=app.30d773d7.js.map