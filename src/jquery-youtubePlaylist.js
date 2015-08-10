(function ( $ ) {
    $.fn.youtubePlaylist = function( options ) {
        //default options
        var settings = $.extend({
            // These are the defaults.
            chanelName: "",
            userName: "",
        }, options );

        var channelName = 'MrErangalakmal'; //example
        var channelTitle = '';
        var apiKey = 'AIzaSyBVr-2n-aTSnlhM4CU5eKtmSzr8hflJqwI';

        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername='+channelName+'&key='+apiKey,
            crossDomain: true,
            dataType: 'json'
        }).done(function(response) {
            console.log(response);
            var playlistId = response.items[0].contentDetails.relatedPlaylists.uploads;
            var key = response;
            var pageToken = '';

            $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='+playlistId+'&key='+apiKey+'&pageToken='+pageToken,
            crossDomain: true,
            dataType: 'json'
            }).done(function(b) {
                console.log(b);
                // var b = a.items[0].contentDetails.relatedPlaylists.uploads,
                //     chid = a.items[0].id,
                //     nekpag = '';
                // youtube_video_list(b, apikey, nekpag, channels_title, chid, channels_name)
            });

            // var b = a.items[0].contentDetails.relatedPlaylists.uploads,
            //     chid = a.items[0].id,
            //     nekpag = '';
            // youtube_video_list(b, apikey, nekpag, channels_title, chid, channels_name)
        });

        
 
        // Greenify the collection based on the settings variable.
        // return this.css({
        //     color: settings.color,
        //     backgroundColor: settings.backgroundColor
        // });
    };
}( jQuery ));