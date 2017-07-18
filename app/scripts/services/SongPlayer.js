 (function() {
      function SongPlayer(Fixtures) {
         
        var SongPlayer = {};
        var currentAlbum = Fixtures.getAlbum();
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
          
        /**
        * @desc Active song object from list of songs
        * @type {Object}
        */
          
        SongPlayer.currentSong = null;
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
        var stopSong = function(song){
            currentBuzzObject.stop();
            song.playing = null;
        };
    /**
    * @function SongPlayer.play
    * @desc If the buzz object Song is not the same as the current then a new song will load and play. 
    * If the buzz object Song is the same, and the song is paused, then the song will play.
     * @param {Object} song
     */
     SongPlayer.play = function(song) {
        song = song || SongPlayer.currentSong;
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
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        song.playing = false;
    };
    
    SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;
    
          
    if (currentSongIndex < 0) {
         currentBuzzObject.stop();
         SongPlayer.currentSong.playing = null;
     } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
     }
    };
    
    SongPlayer.next = function(){
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex++;
        
        if (currentSongIndex === currentAlbum.songs.length) {
				stopSong(SongPlayer.currentSong);
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
        
    };
        return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();