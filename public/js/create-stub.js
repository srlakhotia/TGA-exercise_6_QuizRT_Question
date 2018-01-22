(function($){

    function onStubCreationSuccess (data){
        console.table(data);
    }
    $("#add-stub-form").on("submit", function(e){
        e.preventDefault();

        $.ajax({
            url             : "/stubs/add-stub",
            "success"       : onStubCreationSuccess,
            "type"          :"POST",
            "data-type"     : "JSON",
            "data"          : $("#add-stub-form").serialize(),
            "error"         : function(e){
                console.log(e);
            }
        })


    })

})(jQuery);