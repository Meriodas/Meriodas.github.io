class Carousel {
            constructor({
                id,
                imgs,
                timeout
            }) {
                this.$wrapper = $(`#${id}`) // 轮播图父容器
                this.imgs = [...imgs, imgs[0]] // 轮播图所有图片
                this.timeout = timeout // 轮播图切图时间
                this.$ul = $('<ul class="carousel">') // 轮播图ul元素
                this._index = 0 // 轮播图当前下标
                this.timer = null

                this.init()
            }

            init() {
                // 渲染函数根据 img渲染轮播图
                this.render()

                // 轮播图开始滚动
                this.start()
            }

            render() {
                this.$wrapper.append(this.$ul)

                this.imgs.forEach(img => {

                    let $li = $(`<li><img src="${img}"></li>`)

                    this.$ul.append($li)
                });
            }

            start() {
                if (this.timer) {
                    clearInterval(this.timer) // 清除上一次计时器
                }
                // 获取图片的宽度
                let wrapperWidth = this.$wrapper.width()

                this.timer = setInterval(() => {
                        this._index++

                        this.$ul.animate({
                            left: -this._index * wrapperWidth
                        }, 
                        1000, 
                        () => {
                            // 每次动画结束做一次判断,判断是否已经到最后一张
                            if (this._index >= this.imgs.length - 1) {
                                // 回到第一张
                                this._index = 0
                                this.$ul.css({
                                    left: 0
                                })
                            }
                        })

                    },
                    this.timeout);
            }
        }


        let carousel = new Carousel({
            id: 'app', // 无缝轮播图渲染到的指定DOM节点的app
            imgs: ['img/header1.jpg', 'img/header2.jpg', 'img/header8.jpg','img/header5.jpg','img/header7.jpg'], // 无缝轮播图的图片路径数组
            timeout: 2000,
            /*
            pageControl: true, // 是否显示无缝轮播图下方小圆点
            pageDotColor: '#ccc',
            pageDotActiveColor: '#fc0'
            */
        })