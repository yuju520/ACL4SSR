// 微博链接重定向到 Lolipop
// 请根据 Lolipop 的实际 URL Scheme 修改 SCHEME 变量
const url = $request.url;
const SCHEME = 'lolipop'; // 若实际为 'lollipop' 请修改此处

// 默认跳转格式：lolipop://open?url=<原始微博链接>
const redirectUrl = SCHEME + '://open?url=' + encodeURIComponent(url);

$done({
    response: {
        status: 302,
        headers: {
            Location: redirectUrl
        }
    }
});
