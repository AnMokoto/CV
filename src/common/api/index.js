import APIFactory from '@/plugin/axios'

const request = {
  cv: {
    url: '/data/cv',
    method: 'get',
    //  测试数据
    data: {
      company: [
        {
          timestamp: '2015/7 - 2017/2',
          name: '深圳市新心动网络科技有限公司',
          duties: 'Android主程',
          introduction: '担任Android主程，负责自主项目产品\'我要男神\'和\' 一面App\' 两款社交App的Android端<br/>' +
            '在公司接近两年的开发工作中，有效的利用工作和学习积极性提升开发速度和提升自身技术栈。<br/>' +
            '<article>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>职责：</h4>' +
            '<span>主程项目的架构，排期安排，开发、和交付等</span>' +
            '<br/>' +
            '<h4>项目总结：</h4>' +
            '<span>加深使用优秀开源框架技术方案，对项目进行优化重构。</span>' +
            '<br/>' +
            '<span>增加对应用性能优化和防御式编程的经验。</span>' +
            '<br/>' +
            '<span>' +
            '项目整体采MVP模式进行搭建和开发，对模块实现完全解耦。利用rx进行任务调度和事件分发处理，提升处理速度和优化事件' +
            '</span>' +
            '<br/>' +
            '<span>' +
            '配合长链接框架Netty和极光推送服务，实现直播场景内的交互业务（直播，消息，礼物，动画场景等）' +
            '</span>' +
            '<span>加深使用优秀开源框架技术方案，对项目进行优化重构。</span>' +
            '<br/>' +
            '<span>对Android防御式开发和性能优化方面经验加强,</span>' +
            '<br/>' +
            '<span>增加对长链接和推送处理的熟练度，并完善对Netty框架的空缺。</span>' +
            '<br/>' +
            '</section>' +
            '</article>',
          product: [
            {
              name: '我要男神',
              image: 'https://pp.myapp.com/ma_icon/0/icon_12152197_1555767358/96',
              href: 'https://sj.qq.com/myapp/detail.htm?apkName=com.ineed',
              enable: true
            },
            {
              name: '一面App',
              image: 'https://img.c1578dn.cn/img2019/3/15/14/2019031540143480.jpg',
              href: 'https://www.zcool.com.cn/work/ZMTk0MTAzNDQ=.html',
              enable: true
            }
          ]
        },
        {
          timestamp: '2017/3 - 2018/3',
          name: '深圳市宏图网络科技有限公司',
          duties: 'Android主程/Cocos工程师',
          introduction: '针对公司自主产品\'互娱直播\'的开发和优化，包括游戏，控制产品的错误率和崩溃率<br/>' +
            '对产品内存问题管理，性能优化等，对部分原始初期架构(网络，数据处理，布局适配，长链接通讯优化等)进行重构优化，<br/>' +
            '优化运行时的卡顿，提升产品流畅性。<br/>' +
            '任职期间获得对直播行业的重新认知,和对用户交互的粘性的把控。<br/>' +
            '在职期间学习和实践开发使用Cocos2dx-js,es6,ts 等<br/>' +
            '<article>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            '<span>对产品“互娱直播”的直播处理，游戏开发和优化性能，重构等职务。</span>' +
            '<h4>项目实现：</h4>' +
            '<span>项目使用MVP模式进行开发</span>' +
            '<br/>' +
            '<span>使用的开源框架有 rx,Retrofit,Okhttp,Netty,lottie 等。</span>' +
            '<br/>' +
            '<span>产品内游戏功能（棋牌,抓娃娃,猜拳等），使用cocos2dx-js 搭建和开发。</span>' +
            '<h4>项目总结：</h4>' +
            '<span>涉足游戏gl开发的理念，加深对项目多元化的理解。</span>' +
            '<br/>' +
            '<span>增加对应用性能优化和防御式编程的经验。</span>' +
            '<br/>' +
            '</section>' +
            '</article>',
          product: [
            {
              name: '互娱直播',
              image: './images/20189141533266297.png',
              href: '',
              enable: false
            }
          ]
        },
        {
          timestamp: '2018/4 - 2019/10',
          name: '深圳市吉氪科技有限公司',
          duties: 'Android主程/运维主程/Web工程师',
          introduction: 
            '<article>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            'Android项目的开发，小程序开发，服务器环境搭建和服务部署，后台管理开发等<br/>'
            '<ul>' +
              '<li>公司项目Android端的架构和开发。</li>'
              '<li>对服务器（CentOS）进行项目部署配置。（Nginx + services[systemctl]），包括不限于代理，数据库，服务监听保活和容灾处理。</li>'
              '<li>公司商城项目（沃买）后台开发 和 中国平安生态城 小程序开发</li>'
            '</ul>
            '</section>' +
            '</article>',
          product: [
            {
              name: 'NewEco',
              image: 'https://os.ozukus.com/uploadfile/20190625/20190625123123_2554.png',
              href: 'https://os.ozukus.com/newpay/mobile_index.html#/',
              enable: false
            },
            {
              name: '族上一品',
              image: 'https://os.ozukus.com/uploadfile/20190603/20190603152646_4097.jpg',
              href: 'https://os.ozukus.com/yiping/mobile_index.html#/',
              enable: true,
            },
            {
              name: '乐享商城',
              image: 'https://os.ozukus.com/uploadfile/20190930/20190930185302_4799.png',
              href: 'https://os.ozukus.com/leshare/mobile_index.html#/',
              enable: true
            },
            {
              name: '中国平安生态城（小程序）',
              image: './images/931852566.png',
              href: '',
              enable: false
            }
          ]
        },
        {
          timestamp: '2020/4 - 2021/7',
          name: '深圳市乐福衡器有限公司',
          duties: 'Android中级工程师/算法工程师',
          introduction: "在司内担任安卓开发任务,任期内主导多款项目进行重构,对项目设计模式和简化开发的推广。<br/>" +
            "<article>" +
            "<h3>岗位职责</h3>" +
            "<section style='padding-left: 1rem;'>" +
            "<h4>主职开发和维护‘热量减肥法’和‘营养秤’App项目</h4>" +
            "</section>" +
            "</article>" +
            "<article>" +
            "<h3>主要贡献</h3>" +
            "<section style='padding-left: 1rem;'>" +
            "<h4>重构</h4>" +
            "<ul>" +
            "<li><span>对\"热量减肥法\"等项目进行架构层重构,并全面介入Jetpack生态</span></li>"+
            "<li><span>项目进行统一管理,统一组件化进行模块划分,加入MVVM和线程调度等,提高项目扩展能力</span></li>" +
            "<li><span>项目全面遵循设计模式和MVVM架构进行设计,并利用 CheckStyle & Lint 等对项目进行检测,提升软件代码规范</span></li>" +
            "<li><span>规范命名,遵循开发规范</span></li>" +
            "</ul>" +
            "<h4>优化</h4>" +
            "<ul>" +
            "<li><span>利用StudioProfile & Mat & BlockCanary & Leak 等对项目进行检测,并解决性能瓶颈和内存泄漏等问题</span></li>" +
            "<li><span>通过混淆, png to webp & svg , AndResGuard 等策略对项目大小进行压缩 </span></li>" +
            "</ul>" +
            "<h4>成绩</h4>" +
            "<ul>" +
            "<li><span>在职期间“热量减肥法”突破百万用户</span></li>" +
            "<li><span>稳定项目异常崩溃率在1%下</span></li>" +
            "<li><span>实现项目半配置化动态生成技术</span></li>" +
            "</ul>" +
            "</section>" +
            "</article>",
          product: [
            {
              name: "热量减肥法",
              image: './images/com.pengpeng.avocado.png',
              href: 'https://sj.qq.com/myapp/detail.htm?apkName=com.lefu.nutritionscale&info=1981CF16F1FD59B099D675A0597C7122',
              enable: true

            },
            {
              name: "FoodScale",
              image: 'https://pp.myapp.com/ma_icon/0/icon_54084949_1616502746/96',
              href: 'https://sj.qq.com/myapp/detail.htm?apkName=com.pengpeng.eightysix&info=4DB6BCB92A6783E70004BD45074573E9',
              enable: true
            },
            {
              name: "乐福能量云",
              image: 'https://pp.myapp.com/ma_icon/0/icon_52582365_1610454715/96',
              href: 'https://sj.qq.com/myapp/detail.htm?apkName=com.lefu.nutritionscale&info=1981CF16F1FD59B099D675A0597C7122',
              enable: true
            }
          ]
        },
        {
          timestamp: '2021/7 - 至今',
          name: '深圳市轻松企业管理集团有限公司',
          duties: '腾讯音乐项目组-项目组技术负责人（Java,Web,Android,DevOps,FR）',
          introduction:
            "公司与腾讯音乐娱乐集团深度合作,负责酷狗音乐在\"IOT,车载大屏,可穿戴\"K歌方案的商务合作与技术开发支持.<br/>" +
            "我在司期间担任项目组技术负责人,主导\"酷狗唱唱\"项目的架构与开发,项目进度等.<br/>" +
			"产品已上线平台 TCL,海尔,海信,长虹,康佳等TV应用市场.<br/>"
            "<article>" +
            "<h3>岗位职责</h3>" +
            "<section style='padding-left: 1rem;'>" +
            "<span>1. 主导和设计项目框架</span><br/>" +
            "<span>2. 推进项目进度与厂商技术支持</span><br/>" +
            "<span>3. 后端微服务与服务器分布式运维</span><br/>" +
            "</section>" +
            "</article>" +
            "<article>" +
            "<h3>主要贡献</h3>" +
            "<section style='padding-left: 1rem;'>" +
            "<span>1. 利用OAuth2搭建多商户多用户RBAC管理平台,和开放平台</span><br/>"+
            "<span>2. 基于SpringCloud + AlibabaCloud 完成微服务开发</span><br/>"+
            "<span>3. 搭配ASM技术开发与设计Android端插件自动注册框架</span><br/>"+
            "<span>4. 完善分布式开发,利用k8s部署和管理微服务</span><br/>"+
            "<span>5. 推进项目上线,提供厂商技术支持</span>"+
            "<span>6. 从0到1主导完成‘酷狗唱唱’和‘轻松聚合支付’的架构和研发</span>"+
            "</section>" +
            "</article>" +
            "",
          product: [
            {
              name: "酷狗唱唱（TV平台不同名称不同）",
              image: 'http://acsing.kugou.com/sing7/static/staticPub/images/_e91c5e3.png',
              href: 'http://acsing.kugou.com/sing7/static/staticPub/mobile/download/views/index.html?source=weibo',
              enable: true
            },
            {
              name: "轻松聚合支付",
              image: '',
              href: '',
              enable: true
            }
          ]
        }
      ],
      skill: [
        {
          name: 'K8s',
          scope: 60,
          percent: 0.60,
          print: true,
          detail: '<h3>K8s 容器化服务部署与运维</h3>' +
            '<ul>' +
            '<li>基于istio与NAT搭建服务内网环境</li>' +
            '<li>熟悉企业监控和集群架构方案</li>' +
            '<li>分布式部署和完善的项目运维经验</li>' +
            '</ul>'
        },
       {
          name: 'JAVA',
          scope: 70,
          percent: 0.70,
          print: true,
          detail: '<h3>后台服务分布式开发</h3>' +
            '<ul>' +
            '<li>SpringCloud全家桶</li>' +
            '<li>AlibabaCloud全家桶</li>' +
            '<li>OAuth2权限管理</li>' +
            '<li>微服务架构/分布式部署</li>' +
            '<li>分布式事务/链路跟踪/熔断降级</li>' +
            '<li>扎实的语言基础</li>' +
            '<li>熟悉集合、IO、多线程、反射、长链接等开发</li>' +
            '</ul>'
        },
        {
          name: 'Android',
          scope: 80,
          percent: 0.80,
          print: true,
          detail: '<h3>Android</h3>' +
            '<ul>' +
            '<li>丰富的手机UI设计开发经验,良好的编程基础</li>' +
            '<li>多年的社交、钱包交易和直播经验，IOT设备开发经验</li>' +
            '<li>熟练自定义view编程、网络编程、多线程、图形界面编程、通讯协议等</li>' +
            '<li>掌握和运用Jetpack 和 Compose 框架开发</li>' +
            '<li>熟悉Android性能及内存调优，能够对移动应用进行性能分析和优化</li>' +
            '<li>能独立承担Android产品开发、喜欢和善于学习新的技术和开源框架</li>' +
            '</ul>'
        },
        {
          name: 'Kotlin',
          scope: 80,
          percent: 0.8,
          print: true,
          detail: '<h3>Kotlin</h3>' +
            '<ul>' +
            '<li>良好的编程基础</li>' +
            '<li>熟练使用函数式和协程、反射等开发</li>' +
            '<li>熟练使用lambda表达式和开发Android</li>' +
            '<li>已上线多款应用（一面App,热量减肥法等）</li>' +
            '</ul>'
        },
        {
          name: 'Vue',
          scope: 75,
          percent: 0.75,
          print: true,
          detail: '<h3>Vue</h3>' +
            '<ul>' +
			      '<li>掌握和丰富的Vue2网页开发和App开发</li>' +
            '<li>Vue + VRouter + Axios + Mock + G2 等 [<a href="https://raw.githubusercontent.com/AnMokoto/CV/master/package.json">target</a>]</li>' +
            '</ul>'
        }
      ]
    }
  }
}

export { request }

export default new APIFactory(request, {
  baseURL: process.env.baseURL
})
