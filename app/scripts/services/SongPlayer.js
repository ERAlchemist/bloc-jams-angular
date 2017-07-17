 (function() {
     function SongPlayer() {
        var SongPlayer = {};
        var currentSong = null;
          /**
        * @desc Buzz object audio file
        * @type {Object}
        */
         var currentBuzzObject = null;
         
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
    
         var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
 
             currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
             });
 
            currentSong = song;
        };
        /**
		 * @function playSong
		 * @desc Plays the currentBuzzObject and sets the property of the song Object to true.
		 * @param {Object} song
		 */ 
        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true;
        };
    /**
    * @function SongPlayer.play
    * @desc If the buzz object Song is not the same as the current then a new song will load and play. 
    * If the buzz object Song is the same, and the song is paused, then the song will play.
     * @param {Object} song
     */
     SongPlayer.play = function(song) {
         if (currentSong !== song) {
            setSong(song);
            playSong(song);
         }   
     };
     /**
     * @function SongPlayer.pause
     * @desc Pauses the currently playing Buzz Object and sets the song's 'playing' attribute to false.
     * @param {Object} song
     */    
     SongPlayer.pause = function(song) {
     currentBuzzObject.pause();
     song.playing = false;
    };
        return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();