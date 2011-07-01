/*	Rumble Scroll
	------------- */


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
}



$(document).ready(function(){
	$(window).scroll(function(){
	
		if(isScrolledIntoView(div#ding-ding)){
		
			alert("In View");
		
		}
	
	
	})


});
