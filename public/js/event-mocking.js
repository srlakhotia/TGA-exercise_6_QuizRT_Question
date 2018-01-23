(function(){
    $("#questionAttempt").on("submit", function(evt){
        evt.preventDefault();
        $.post({
            url: "/trigger-analytics-update-event",
            data: $("#questionAttempt").serialize()
        })
    });
})(jQuery);