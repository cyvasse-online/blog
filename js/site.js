(function($) {
    $(document).ready(function() {
        var externalSitesCheckbox = $("#external-sites-dd");

        $(document).click(function() {
    		// deactivate external sites dropdown if it's active
    		externalSitesCheckbox.prop("checked", false);
    	});

    	$(".external-sites-icons-v").click(function(ev) {
    		// without this the external-sites-dd checkbox would
    		// deactive itself through the above click handler
    		ev.stopPropagation();
    	});
    });
})(jQuery);
