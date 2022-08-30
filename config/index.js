export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxf9e05ea9e651a2b6",
    // 公众号APP_SECRET
    APP_SECRET: "b2715d8cf0d78bd8518cdb768715b50e",
    // 模板消息id
    TEMPLATE_ID: "EhbyEXCWugBC5ORTHY43m0WmK-BT7btXrAQ3iUU-3fM",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["oQKlN5vF6ChDrxGNI246Lo2YYqiQ"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "山东",
    // 所在城市
    CITY: "济宁",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "节日", "name": "中秋", "year": "2022", "date": "09-10"},
      {"type": "节日", "name": "国庆", "year": "2022", "date": "10-01"},
      {"type": "节日", "name": "元旦", "year": "2023", "date": "01-01"},
      {"type": "节日", "name": "今年结束", "year": "2022", "date": "12-31"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 0,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "1998-07-24",
    // 结婚纪念日
    MARRY_DATE: "1999-05-13",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{success_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
