var size = 4;
			var stage = document.querySelector(".stage");
			var tips = document.querySelector('.Tips');
			var body = document.querySelector('body');
			
			
			var flag = true;
			tips.onclick = function() {
				if (flag) {
					stage.style.background = "url(./img/01.jpg)";
                    stage.style.backgroundSize = "cover";
					alert('提示已开启');
					flag = false;
				} else {
					stage.style.background = "lightcoral";
					alert('提示已关闭');
					flag = true;
				}
			}

			stage.style.width = size * 100 + "px";
			stage.style.height = size * 100 + "px";

			for (var i = 0; i < size * size; i++) {
				var node = document.createElement("li");
				// 动态设置尺寸
				node.style.width = 100 / size + "%";
				node.style.height = 100 / size + "%";

				// 设置背景偏移
				node.style.backgroundPosition =
					(i % size) * -100 +
					"% " +
					Math.floor(i / size) * -100 +
					"%";

				node.style.left = (i % size) * (100 / size) + "%";
				node.style.top = Math.floor(i / size) * (100 / size) + "%";


				node.style.backgroundSize = size * 100 + '% auto'

				node.draggable = "true";

				node.id = "card" + i;
				stage.appendChild(node);
			}

			var cards = stage.querySelectorAll("li");

			// 洗牌
			// function shuffle() {
			//     for (var i = 0; i < size * size; i++) {
			//         var random = Math.floor(Math.random() * size * size);

			//         stage.appendChild(cards[random]);
			//     }
			// }

			function random() {
				return Math.floor(Math.random() * size * size);
			}
			// function shuffle() {
			//     for (var i = 0; i < 9; i++) {
			//         var random1 = random();
			//         do {
			//             var random2 = random();
			//         } while (random1 == random2);

			//         // console.log(random1, random2);
			//         // console.log(cards[random1].style.top)
			//         // console.log(cards[random1].style.left)
			//         var pos1 = {
			//             top: cards[random1].style.top,
			//             left: cards[random1].style.left,
			//         };
			//         var pos2 = {
			//             top: cards[random2].style.top,
			//             left: cards[random2].style.left,
			//         };
			//         cards[random1].style.top = pos2.top;
			//         cards[random1].style.left = pos2.left;

			//         cards[random2].style.top = pos1.top;
			//         cards[random2].style.left = pos1.left;
			//     }
			// }

			function shuffle() {
				var arr = [];
				for (var i = 0; i < size * size; i++) {
					arr.push(i);
				}
				// console.log(arr);

				var tmp = [];

				for (var i = 0; i < size * size; i++) {
					tmp.push(
						arr.splice(Math.floor(Math.random() * arr.length), 1)[0]
					);
				}

				cards.forEach(function(element, index) {
					element.style.left =
						(tmp[index] % size) * (100 / size) + "%";
					element.style.top =
						Math.floor(tmp[index] / size) * (100 / size) + "%";
				});
			}
			// shuffle();
			body.ondrop = function(event){
				event.preventDefault();
			}




			cards.forEach(function(element, index) {
				element.ondragstart = function(event) {
					// event.preventDefault();
					event.dataTransfer.setData("text", event.target.id);
				};
				element.ondragover = function(event) {
					// console.log('x')
					event.preventDefault();
				};
				element.ondrop = function(event) {
					// console.log("drop", event.target, event.dataTransfer.getData('text'));
					event.preventDefault();
					event.stopPropagation();
					// 获取两个元素
					var e1 = event.target;
					var e2 = document.getElementById(
						event.dataTransfer.getData("text")
					);
					// 交叉互换定位
					var tmp = {
						top: e1.style.top,
						left: e1.style.left,
					};

					e1.style.top = e2.style.top;
					e1.style.left = e2.style.left;

					e2.style.top = tmp.top;
					e2.style.left = tmp.left;
					// console.log(e1, e2);

					// 判断每个card 当前定位点 是不是 初始定位点

					var check = Array.prototype.every.call(cards, function(
						element,
						index
					) {
						return (
							parseInt(element.style.top) ==
							parseInt(
								Math.floor(index / size) * (100 / size) +
								"%"
							) &&
							parseInt(element.style.left) ==
							parseInt((index % size) * (100 / size) + "%")
						);
					});
					// var check = cards.every(function (element, index) {

					// });

					if (check) {
						alert("成功");
					}
				};
			});