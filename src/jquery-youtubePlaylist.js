(function ( $ ) {
    $.fn.youtubePlaylist = function( options ) {
        //default options
        var settings = $.extend({
            chanelName: "",
            userName: "",
        }, options );

        var channelName = 'MrErangalakmal';
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
            });
        });
    };
}( jQuery ));