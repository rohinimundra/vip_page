// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

$(function () {

    // a simple pop-up function for social sharings windows
    function popup(h, n) {
        var width = 575,
            height = 400,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            url = h,
            opts = 'status=1' +
                ',width=' + width +
                ',height=' + height +
                ',top=' + top +
                ',left=' + left;

        window.open(h, n, opts);
    }

    // set the HREF for the Facebook share button using the "facebookurl"
    // passed from leadpages_input_data
    $('.pop-facebook').attr(
        'href',
        "https://www.facebook.com/sharer/sharer.php?u=" + leadpages_input_data["facebookurl"]
    );

    // attach "click" event handler to the social buttons
    $('.pop-facebook').click(function (event) {
        popup(this.href, this.id);
        return false;
    });
});

$(function() {
    
    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = $("figure");
	    	
	$allVideos.each(function() {
	
	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');
	
	});
	
	$(window).resize(function() {
	
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
	  
	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));
	  
	  });
	
	}).resize();

});

$('#intro_wrapper').imagesLoaded( function() {
	var mLeft = 0,
		mTop = 0;
	
	$(window).resize(function() {
		mLeft = ($('#intro_bg').width() / -2);
		mTop = ($('#intro_bg').height() / -2);
		
		$('#intro_bg').css({
			'margin-left': mLeft,
			'margin-top': mTop
		});
	}).resize();
});