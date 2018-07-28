 // 简单的文件下载 加密~~
 // 你都看到这里了  想必多少也懂一些
 // 但是这个软件是给我女朋友定做的  你下载下来也没啥用吧~
 // 如果你想要源码  请把这段注释截图后  Q我~~(1374134625)
		function testDownload(){
			var DownloadPwd = prompt('这个App是给女朋友做的哦~   其他人可以下载下面的小游戏~','请输入六位数专属密码');
			
			if(DownloadPwd=='161120') {
			    window.location.href="2018.2.14(专属版).apk";
			}else{
				alert('嘿!请输入正确的密码吧~');
			}
		}
	 // 响应式布局????   这样的做法好Low
		$(function(){
			test();
			window.setInterval(test,500);
			function test(){
				var windowTidth = window.outerWidth;
				var contentCss = {
					'margin-top':'100px',
					'width':'910px',
					'height':'1700px'
				}
				var loveHeartCss={
					'float':'left',
					'margin-left':'100px'
				}
				var codeCss={
					'font-size':'25px',
					'width':'800px',
					'margin-top':'100px',
					'margin-left':'60px'
				}
				if(windowTidth<600) {
					$('#myContent').css(contentCss);
					$('#code').css(codeCss);
					$('#loveHeart').css(loveHeartCss);
					// $('#mobileClient').hide();
				}
				console.log(windowTidth)
			}
		})