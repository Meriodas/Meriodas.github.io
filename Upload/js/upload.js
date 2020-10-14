// window.onload=function(){
// 	var input=document.getElementById("uploadfile");
// 	var div;
// 	// 当用户上传时触发事件
// 	input.onchange=function(){
// 		readFile(this);
// 	}
// 	//处理图片并添加都dom中的函数
// 	var readFile=function(obj){
// 		// 获取input里面的文件组
// 		var fileList=obj.files;
// 		//对文件组进行遍历，可以到控制台打印出fileList去看看
// 		for(var i=0;i<fileList.length;i++){
// 			var reader= new FileReader();
// 			reader.readAsDataURL(fileList[i]);
// 			 // 当文件读取成功时执行的函数
// 			reader.onload=function(e){
// 				div=document.createElement('div');
// 				div.innerHTML='<img src="'+this.result+'" />';
// 				document.getElementById("img-box").appendChild(div);
// 			}
// 		}
// 	}
// }

document.querySelector('input').onchange = function() {
    const upload = new ReadFile(this);
}
class ReadFile {
    constructor(obj) {
        this.file = obj.files[0];
        this.fil = obj.files;
        this.upload();
    }

    upload() {
        for (let i = 0; i < this.fil.length; i++) {
            this.reads(this.fil[i]);
        }
    }

    reads(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let renPic = document.getElementById("renPic");
            renPic.innerHTML += "<img src='" + reader.result + "'>";

            renPic.onclick = () => {
                // console.log('this ==> ', this);
                this.deleteResume();
            }
        };
    }

    deleteResume() {
        let renPic = document.getElementById("renPic");
        let imgs = document.querySelectorAll('img');

        imgs.forEach(function(element, index) {
            element.onclick = function() {
                element.style.display = 'none';
            }
        })

        console.log(imgs);
        // renPic.innerHTML = "";
    }

}
