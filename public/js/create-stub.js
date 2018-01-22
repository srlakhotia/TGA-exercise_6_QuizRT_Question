(function($){

    function onStubCreationSuccess (data) {
        $('#add-stub-form').trigger('reset');
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
        $('#stub-add-success').show().fadeOut(2000);
    }
    $("#add-stub-form").on("submit", function(e){
        e.preventDefault();

        $.ajax({
            url             : "/stubs/add-stub",
            "success"       : onStubCreationSuccess,
            "type"          :"POST",
            "data-type"     : "JSON",
            "data"          : $("#add-stub-form").serialize(),
            "error"         : function(e){}
        })


    })

})(jQuery);