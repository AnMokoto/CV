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
          duties: 'Android',
          introduction: '担任Android主程，负责自主项目产品\'我要男神\'和\' 一面\' 两款社交App的Android端<br/>' +
            '在公司接近两年的开发工作中，有效的利用工作和学习积极性提升开发速度和提升自身技术栈。<br/>' +
            '<article>' +
            '<h3>我要</h3>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            '<span>主程项目的开发、和测试等</span>' +
            '<h4>项目实现：</h4>' +
            '<span>' +
            '项目使用MVC模式进行开发，结合Retrofit、Okhttp dagger等实现项目数据传输和处理方案' +
            '</span>' +
            '<h4>项目总结：</h4>' +
            '<span>加深使用优秀开源框架技术方案，对项目进行优化重构。</span>' +
            '<br/>' +
            '<span>增加对应用性能优化和防御式编程的经验。</span>' +
            '<br/>' +
            '</section>' +
            '</article>' +
            '<article>' +
            '<h3>一面</h3>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            '<span>主程项目的设计、分析评估、开发、和测试等</span>' +
            '<h4>项目实现：</h4>' +
            '<span>' +
            '项目整体采MVP模式进行搭建和开发，对模块实现完全解耦。利用rx进行任务调度和事件分发处理，提升处理速度和优化事件' +
            '</span>' +
            '<br/>' +
            '<span>' +
            '配合长链接框架Netty和极光推送服务，实现直播场景内的交互业务（直播，消息，礼物，动画场景等）' +
            '</span>' +
            '<h4>项目总结：</h4>' +
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
              name: '一面',
              image: 'https://img.c1578dn.cn/img2019/3/15/14/2019031540143480.jpg',
              href: 'https://www.zcool.com.cn/work/ZMTk0MTAzNDQ=.html',
              enable: true
            }
          ]
        },
        {
          timestamp: '2017/3 - 2018/3',
          name: '深圳市宏图网络科技有限公司',
          duties: 'Android',
          introduction: '针对公司自主产品\'互娱直播\'的开发和优化，包括游戏，控制产品的错误率和崩溃率<br/>' +
            '对产品内存问题管理，性能优化等，对部分原始初期架构(网络，数据处理，布局适配，长链接通讯优化等)进行重构优化，<br/>' +
            '优化运行时的卡顿，提升产品流畅性。<br/>' +
            '任职期间获得对直播行业的重新认知,和对用户交互的粘性的把控。<br/>' +
            '在职期间学习和实践开发使用Cocos2dx-js,es6,ts 等<br/>' +
            '<article>' +
            '<h3>互娱直播</h3>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            '<span>对产品的直播处理，游戏开发和优化性能，重构等职务。</span>' +
            '<h4>项目实现：</h4>' +
            '<span>' +
            '项目使用MVP模式进行开发，' +
            '</span>' +
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
              image: 'https://img.anfensi.com/upload/2018-9/20189141533266297.png',
              href: '',
              enable: false
            }
          ]
        },
        {
          timestamp: '2018/4 - 至今',
          name: '深圳市吉氪科技有限公司',
          duties: 'Android/运维/H5/小程序',
          introduction: 'Android项目的开发，小程序开发，服务器环境搭建和服务部署，后台管理开发等<br/>' +
            '1. 公司项目Android端的架构和开发。<br/>' +
            '2. 对服务器（CentOS）进行项目部署配置。（Nginx + services[systemctl]），包括不限于代理，数据库，服务监听保活和容灾处理。<br/>' +
            '3. 公司商城项目（沃买）后台开发<br/>' +
            '4. 公司外接项目 小程序开发。<br/>' +
            '<article>' +
            '<h3>NewEco</h3>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            '<span>主程该应用的开发任务。</span>' +
            '<h4>项目实现：</h4>' +
            '<span>' +
            '项目采用MVP模式进行开发，' +
            '</span>' +
            '<br/>' +
            '<span>使用Gradle对模块进行分离实现组件化标准，组件化剥离模块耦合问题，利用脚本实现打包合并。</span>' +
            '<br/>' +
            '<span>架构采用rx,Retrofit,Okhttp等实现应用底层以及业务的调度交互逻辑。</span>' +
            '<h4>项目总结：</h4>' +
            '<span>增加对数字货币类交易的代码安全（失真，密钥，内存溢出等问题）和防御式编程的理解。</span>' +
            '</section>' +
            '</article>' +
            '<article>' +
            '<h3>族上一品</h3>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            '<span>主程该应用的开发任务。</span>' +
            '<h4>项目实现：</h4>' +
            '<span>整体架构复用\'NewEco\'</span>' +
            '</section>' +
            '</article>' +
            '<article>' +
            '<h3>微信小程序（截止未上线）</h3>' +
            '<section style="padding-left: 1rem;">' +
            '<h4>项目职责：</h4>' +
            '<span>主程该应用的开发任务。</span>' +
            '<h4>项目实现：</h4>' +
            '<span>' +
            '项目采用原生微信小程序+Vue实现。' +
            '</span>' +
            '<br/>' +
            '<span>原生实现信息流业务部分。Vue实现3D模型展示部分（使用Threejs开发）。</span>' +
            '<h4>项目总结：</h4>' +
            '<span>初涉Threejs框架和小程序部分，填补对类Hybird开发和技术栈缺陷。</span><br/>' +
            '<span>提升自身开发环境的局限性。扩展技术栈纵向知识。</span>' +
            '</section>' +
            '</article>',
          product: [
            {
              name: 'NewEco',
              image: 'https://os.ozukus.com/uploadfile/20190625/20190625123123_2554.png',
              href: 'https://os.ozukus.com/newpay/',
              enable: false
            },
            {
              name: '族上一品',
              image: 'https://os.ozukus.com/uploadfile/20190603/20190603152646_4097.jpg',
              href: 'https://os.ozukus.com/yiping/',
              enable: true,
            },
            {
              name: '沃买商城',
              image: 'https://os.ozukus.com/uploadfile/20190620/20190620223945_7609.png',
              href: 'https://os.ozukus.com/womai/',
              enable: true
            }
          ]
        }
      ],
      skill: [
        {
          name: 'Android',
          scope: 80,
          percent: 0.80,
          detail: '<h3>Android</h3>' +
            '<ul>' +
            '<li>丰富的手机UI设计开发经验,良好的编程基础</li>' +
            '<li>多年的社交、钱包交易和直播经验</li>' +
            '<li>熟练自定义view编程、熟悉网络编程、多线程、图形界面编程、通讯协议等</li>' +
            '<li>熟悉Android性能及内存调优，能够对移动应用进行性能分析和优化</li>' +
            '<li>能独立承担Android产品开发、喜欢和善于学习新的技术和开源框架</li>' +
            '</ul>'
        },
        {
          name: 'Java',
          scope: 70,
          percent: 0.70,
          detail: '<h3>Java</h3>' +
            '<ul>' +
            '<li>扎实的语言基础</li>' +
            '<li>熟悉集合、IO、多线程、纤程、反射、长链接等开发</li>' +
            '<li>Java7 - Java8</li>' +
            '</ul>'
        },
        {
          name: 'Kotlin',
          scope: 80,
          percent: 0.8,
          detail: '<h3>Kotlin</h3>' +
            '<ul>' +
            '<li>良好的编程基础</li>' +
            '<li>熟练使用函数式和协程、反射等开发</li>' +
            '<li>熟练使用lambda表达式和开发Android</li>' +
            '</ul>'
        },
        {
          name: 'Flutter',
          scope: 67,
          percent: 0.67,
          detail: '<h3>Flutter</h3>' +
            '<ul>' +
            '<li>熟悉使用Dart编程、良好的编程基础</li>' +
            '<li>熟悉Flutter开发三端应用</li>' +
            '<li><a href="https://github.com/AnMokoto/EmptyName.git">参照</a></li>' +
            '</ul>'
        },
        {
          name: 'Go',
          scope: 35,
          percent: 0.35,
          detail: '<h3>Go</h3>' +
            '<ul>' +
            '<li>熟悉IO、协程、Channel、Rpc gRpc等开发</li>' +
            '<li>有gin框架开发经验</li>' +
            '</ul>'
        },
        {
          name: 'Python',
          scope: 45,
          percent: 0.45,
          detail: '<h3>Python</h3>' +
            '<ul>' +
            '<li>依赖DJango框架的使用和开发</li>' +
            '<li>熟悉语法和开发规范、语法糖等</li>' +
            '</ul>'
        },
        {
          name: 'CentOS',
          scope: 55,
          percent: 0.55,
          detail: '<h3>CentOS</h3>' +
            '<ul>' +
            '<li>熟练使用基础和常用命令</li>' +
            '<li>有对搭建Docker容器和配置的经验</li>' +
            '<li>熟练使用Nginx 搭建和部署服务</li>' +
            '<li>有对服务自启动、一键配置启动、存活和容灾的处理经验</li>' +
            '</ul>'
        },
        {
          name: 'JS',
          scope: 60,
          percent: 0.6,
          detail: ''
        },
        {
          name: 'Vue',
          scope: 72,
          percent: 0.72,
          detail: '<h3>Vue</h3>' +
            '<ul>' +
            '<li>本网站搭建：<br/>Vue + VRouter + Axios + Mock + G2 等 [<a href="https://raw.githubusercontent.com/AnMokoto/CV/master/package.json">target</a>]</li>' +
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
