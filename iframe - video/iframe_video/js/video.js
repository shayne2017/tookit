var vObj={
    vid:"",
    getQueryString:function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)','i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {return decodeURIComponent(r[2]);}else{ return null;}
    },
    handleVideoOver:function(e){
        if(window.parent){
            try{window.parent.endVideo(vObj.vid);}
            catch(error){throw('NO Parent Or Doman not Allowed!');}
        }
    },
    handleVideoPlay:function(e){
        if(window.parent){
            try{window.parent.onVideoPlay(vObj.vid);}
            catch(error){throw (error);}
        }
    },
    tellInit:function(vid){
        if(window.parent){
            try{window.parent.VFRAME_READY(vid);}
            catch(error){
                //console.log(error);
            }
        }
    }
};

var videoManager={
    video:null,
    init:function(){
        document.addEventListener('touchstart',function(e){e.preventDefault()});
        videoManager.video=document.getElementById('video');
        var video=videoManager.video;
        video.addEventListener('ended',vObj.handleVideoOver);
        video.addEventListener('canplaythrough',vObj.handleVideoPlay);
        vObj.tellInit(vObj.getQueryString('vid'));
        var vid=vObj.getQueryString('vid') || 'V01';
        vObj.vid=vid;
        var videosrc='video/'+vid+".mp4";
        var video=videoManager.video;
        video.src=videosrc;
    },
    start:function(){
        videoManager.video.play();
    }
}

