/*	
	By Will McNeilly 2011
	Social Networking feeds
							*/


$(document).ready(function () {

	
	/* Get last artist scrobbled from my last.fm profile */
	
	var numOfTracks = 1;
	
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&callback=?",
	{
		limit : numOfTracks,
		user : "confused031",
		api_key : "05fed4794415cb975f5bd0e29fac89b7",
		format : "json"
	},
	
	function(tracks){
		var trackCount = tracks.recenttracks.track;
		
		
		$.each(trackCount,function(i){
		
			var scrobbledArtist = tracks.recenttracks.track[i].artist['#text'];
			var hyphenatedArtist = scrobbledArtist.replace(/ /g,"-");
			$('a.lastFM').text(hyphenatedArtist + "-scrobbling");
		});
	});
	
	
	
	$.getJSON("http://readernaut.com/api/v1/json/willmcneilly/books/?callback=?",


	function(books){
		var currentBook = books.reader_books[0].book_edition.authors.author;
		var hyphenatedAuthor = currentBook.replace(/ /g,"-")
		$('a.my-readernaut').text(hyphenatedAuthor + "-reading");
		

	});

	
	
	
});