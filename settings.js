/**
 * config
 */

var path = require('path');

module.exports = {
  debug: true,
  name: 'TiKe Bar',
  description: 'TiKe Bar 是让年轻人有更多的时间做他们喜欢做的事！',
  version: '0.1.0',

  // site settings
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />',
  ],
  host: '127.0.0.1',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  //google_tracker_id: 'UA-41753901-5',
  site_logo: '', // default is `name`
  site_navs: [
    // [ path, title, [target=''] ]
    [ '/about', '关于' ],
  ],
  site_static_host: '', // 静态文件存储域名
  mini_assets: false, // 静态文件的合并压缩，详见视图中的Loader
  site_enable_search_preview: false, // 开启google search preview
  //site_google_search_domain:  'cnodejs.org',  // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://127.0.0.1:27017/tikebar',
  db_name:'tikebar',
  session_secret: 'tikebar',
  auth_cookie_name: 'tikeba',
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 10000,

  // RSS
  rss: {
    title: '替课吧',
    link: '127.0.0.1',
    language: 'zh-cn',
    description: '替课吧叫年轻人更有活力',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },
 
  // site links
  site_links: [
    {
      'text': '替课吧',
      'url': ''
    }
  ],

  // sidebar ads
  side_ads: [
    {
      'url': 'http://www.upyun.com/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
      'image': 'http://site-cnode.b0.upaiyun.com/images/upyun_logo.png',
      'text': ''
    },
    {
      'url': 'http://ruby-china.org/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
      'image': 'http://site-cnode.b0.upaiyun.com/images/ruby_china_logo.png',
      'text': ''
    },
    {
      'url': 'http://adc.taobao.com/',
      'image': 'http://adc.taobao.com/bundles/devcarnival/images/d2_180x250.jpg',
      'text': ''
    }
  ],

  // mail SMTP
  mail_opts: {
    host: 'smtp.163.com',
    port: 25,
    auth: {
      user: 'alexdotnet@163.com',
      pass: 'xxxx'
    }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { admin: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ]
};