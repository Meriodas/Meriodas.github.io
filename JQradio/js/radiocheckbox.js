// console.log($('form span'));
		// var isBoolean = true;
		// $('form span').click(function() {
		// 		if (isBoolean) {
		// 				$('form label').eq(0).css({
		// 					background: "#75b936"
		// 				})
		// 				$(this).animate({
		// 					left: "42px",
		// 					background: '#75b936'
		// 				}, 200)
		// 				isBoolean = false;
		// 		} else {
		// 			$(this).animate({
		// 				left: "2.5px",
		// 			}, 500)
		// })
		// console.log($('form span')[3])

		// console.log($('.main-bottom label'))
		// $('form span').eq(3).click(function(){
		// 		$('form span').eq(4).animate({
		// 			left: "2.5px",
		// 		}, 200)
		// 		$('.main-bottom label').eq(1).text("on").css({
		// 			marginLeft: "2.5px"
		// 		});
		// 		$('form label').eq(4).css({
		// 			color: "white",
		// 			background: "#75b936",
		// 		})
		// 		// $('form label').eq(4).parent().prev().children().eq(4).text("on").css({
		// 		// 	marginLeft: "2.5px"
		// 		// });
		// 	})
		// console.log($('.main-bottom label').eq(1).children("p"))
		// console.log($('.main-bottom span').eq(0))
		$('.main-bottom span').eq(0).click(function() {
			$('.main-bottom span').eq(1).animate({
				left: "2.5px",
			}, 200)
			$('.main-bottom span').eq(0).animate({
				left: "42px",
			}, 200)
			$('.main-bottom label').eq(1).css({
				background: "#B2B2B2"
			})
			$('.main-bottom label').eq(0).css({
				background: "#75b936"
			})
			$('.main-bottom label p').eq(1).text("off").css({
				marginLeft: "35px"
			});
			$('.main-bottom label p').eq(0).text("on").css({
				marginLeft: "15px"
			});
		})

		$('.main-bottom span').eq(1).click(function() {
			$('.main-bottom span').eq(0).animate({
				left: "2.5px",
			}, 200)
			$('.main-bottom span').eq(1).animate({
				left: "42px",
			}, 200)
			$('.main-bottom label').eq(0).css({
				background: "#B2B2B2"
			})
			$('.main-bottom label').eq(1).css({
				background: "#75b936"
			})
			$('.main-bottom label p').eq(0).text("off").css({
				marginLeft: "35px"
			});
			$('.main-bottom label p').eq(1).text("on").css({
				marginLeft: "15px"
			});
		})


		// $('.main-bottom span').each(function(index, element) {
		// 	var isBoolean = true;
		// 	$(element).click(function() {
		// 		if (isBoolean) {
		// 			$(this).prev().css({
		// 				background: "#B2B2B2"
		// 			})
		// 			$(this).prev().children().text("off").css({
		// 				marginLeft: "35px"
		// 			});
		// 			$(this).animate({
		// 				left: "2.5px",
		// 			}, 200)
		// 			isBoolean = false;
		// 		} else {
		// 			$(this).prev().css({
		// 				background: "#75b936"
		// 			})
		// 			$(this).prev().children().text("on").css({
		// 				marginLeft: "15px"
		// 			});
		// 			$(this).animate({
		// 				left: "42px",
		// 			}, 200)
		// 			isBoolean = true;
		// 		}
		// 	})
		// })

		// var flag = true;
		// if(flag) {
		// 	$('form span').eq(3).click(function(){
		// 		$('form span').eq(4).animate({
		// 			left: "42px",
		// 		}, 200)
		// 		$('form label').eq(4).css({
		// 			background: "#75b936"
		// 		})
		// 		$('form label').eq(4).text("on").css({
		// 			marginLeft: "2.5px"
		// 		});
		// 	})
		// 	flag = false;
		// }else{
		// 	$('form span').eq(4).animate({
		// 			left: "2.5px",
		// 		}, 200)
		// 		$('form label').eq(4).css({
		// 				background: "#75b936"
		// 			})
		// 			$('form label').eq(4).text("on").css({
		// 				marginLeft: "2.5px"
		// 			});
		// 	flag = true;
		// }

		$('.main-top span').each(function(index, element) {
			var isBoolean = true;
			$(element).click(function() {
				if (isBoolean) {
					$(this).prev().css({
						background: "#B2B2B2"
					})
					$(this).prev().children().text("off").css({
						marginLeft: "35px"
					});
					$(this).animate({
						left: "2.5px",
					}, 200)
					isBoolean = false;
				} else {
					$(this).prev().css({
						background: "#75b936"
					})
					$(this).prev().children().text("on").css({
						marginLeft: "15px"
					});
					$(this).animate({
						left: "42px",
					}, 200)
					isBoolean = true;
				}
			})
		})




		// $('form label').each(function(index,element){
		// 	var isBoolean = true;
		// 	$(element).click(function() {
		// 		if (isBoolean) {
		// 			$(this).css({
		// 				background: "#B2B2B2"
		// 			})
		// 			isBoolean = false;
		// 		} else {
		// 			$(this).css({
		// 				background: "#75b936"
		// 			})
		// 			isBoolean = true;
		// 		}
		// 	})
		// })
		// $('form span').click(function() {
		// 	if (isBoolean) {
		// 		$('form label').css({
		// 			background: "#B2B2B2"
		// 		})
		// 		$(this).animate({
		// 			left: "2.5px",
		// 		}, 200)
		// 		isBoolean = false;
		// 	} else {
		// 		$(this).animate({
		// 			left: "42px",
		// 			background: '#75b936'
		// 		}, 200)
		// 		isBoolean = true;
		// 	}
		// })
		// $("form label").each(function (index, element) {

		//     if ($(element).find('input').prop('checked')) {
		//         $(this).children("span").css({
		//             "left": "70px",
		//             "color":"black"
		//             })
		//         $(this).parent().css("background","#75b936")

		//     } else {
		//         $(this).children("span").css({
		//             "left":"0px",
		//             "color":"white"
		//             })
		//         $(this).parent().css("background","#b2b2b2")

		//     }



		// })
		// $("label").click(function () {
		//     if ($(this).find('input').prop('checked')) {
		//         $(this).children("span").animate({
		//             left: "70px"
		//         })
		//         $(this).parent().css("background","#75b936")
		//     } 
		//     $("form label").each(function (index, element) {

		//         if (!$(element).find('input').prop('checked')) {

		//             $(this).children("span").animate({
		//                 left: "0px"
		//             })
		//             $(this).children("span").css("color","white")
		//             $(this).parent().css({
		//                 "background":"#b2b2b2",
		//                 })
		//         } else {
		//             $(this).children("span").css({
		//                 "left": "70px",
		//                 "color":"black"
		//             })
		//         }

		//     })

		// })