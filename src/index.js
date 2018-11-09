
var player;
var player_obj;
// window.onload = function(e){
    function onYouTubeIframeAPIReady() {
        player = new window['YT'].Player('player', {
            height: '0',
            width: '0',
            host: 'https://www.youtube.com',
            videoId: 'SAOT-zecw_A',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };
    // 4. The API will call this function when the video player is ready.
    var onPlayerReady = function(event) {
        document.getElementById('play').disabled = false;
        document.getElementById('pause').disabled = false;
        player_obj = event.target;
        // event.target.playVideo();
    }

    function play() {
        console.log(1);
        player_obj.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
        }
    }
    function stopVideo() {
        player.stopVideo();
    }

   
// }.bind(this)
window.onload = function(e){
    onYouTubeIframeAPIReady()
}.bind(this);