function query(selector) {
    return document.querySelector(selector);
}

function create(tagName) {
    return document.createElement(tagName);

}
let box = query('.box');
let btn = query('button')
console.log(box, btn);

class Http {

    get(url) {
        return new Promise((resolved, rejected) => {

            //创建ajax对象
            let xhr = new XMLHttpRequest();

            //监听ajax状态变化
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                    //凝固结果
                    resolved(this.responseText);
                }
            }

            //建立服务器连接
            xhr.open('GET', url, true);

            //发送请求
            xhr.send();
        })
    }
}

let http = new Http();

http.get('http://api.tianapi.com/txapi/dujitang/index?key=ae673bd93ba17c1d7f6edd3ee7ab0398').then(result => {
    result = JSON.parse(result);
    console.log('result ==>', result);

    let newlist = result.newslist;
    console.log('newList ==>', newlist);

    for (key in newlist) {
        box.innerHTML = `每天一句毒鸡汤：${newlist[key].content}`;
    }
})

btn.onclick = () => {
    http.get('http://api.tianapi.com/txapi/dujitang/index?key=ae673bd93ba17c1d7f6edd3ee7ab0398').then(result => {
        result = JSON.parse(result);
        console.log('result ==>', result);

        let newlist = result.newslist;
        console.log('newList ==>', newlist);

        for (key in newlist) {
            box.innerHTML = `每天一句毒鸡汤：${newlist[key].content}`;
        }
    })
}
