var oVideoMain = document.querySelector('.videoMain');

var oVIDEO={
    videoOOP:{},
    initVideos:function(name){ 
       oVideoMain.innerHTML += oVIDEO.makeVideoFrame('V01'); //第一段视频
       //oVideoMain.innerHTML += oVIDEO.makeVideoFrame('V02');//第二段视频
    },
    makeVideoFrame:function(name){                                                      // 视频实际高度
        var content= "<iframe src='video.html?vid="+name+"' frameborder='0'  width='750' height='413' id='"+name+"' style='display: none'/>";
        oVIDEO.videoOOP[name+"_content"]=content;
        return content;
    },
    playVideo:function(vid){
        document.querySelector(".video_Box").style.display = "block";
        document.querySelector("#"+vid).style.display = "block";
        oVIDEO.videoOOP[vid].start();
    },
    hideVideo:function(vid){
        oVideoMain.innerHTML = "";
        document.querySelector(".video_Box").style.display = "none";
        oVIDEO.initVideos();
    }
};


function VFRAME_READY(vid){oVIDEO.videoOOP[vid]=document.querySelector("#"+vid).contentWindow.videoManager;}
function onVideoPlay(vid){}
function endVideo(vid){ //视频播放完
    oVIDEO.hideVideo();
}

//点击视频背景  关闭视频
document.querySelector(".video_black").addEventListener("touchstart",function(){
   oVIDEO.hideVideo();
},false);

