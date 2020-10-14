  
    class Http {

        // get请求
        get(url) {
            return new Promise((resolved, rejected) => {

                // 创建ajax对象
                let xhr = new XMLHttpRequest();
                // 监听ajax状态变化
                xhr.onreadystatechange = function () {

                    if (this.readyState == 4 && this.status == 200) {
                        // 凝固结果

                        resolved(this.responseText);
                    }
                }

                // 建立服务器连接
                xhr.open("GET", url, true);

                // 发起请求
                xhr.send();
            })
        }
    }
