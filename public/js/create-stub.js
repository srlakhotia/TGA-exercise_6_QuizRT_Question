(function($){
    let questionStubSet;
    const sanitizeWikiDataResponse = function sanitizeWikiDataResponse(rawData) {
        let fetchedHeads = rawData.head.vars.filter((head) => {
            return head.lastIndexOf('Label') === (head.length - 5);
        });

        let fetchedSets = [];
        rawData.results.bindings.forEach((resSet) => {
            let currentSet = {};
            fetchedHeads.forEach((head) => {
                currentSet[head] = resSet[head] ? resSet[head].value : '';
            });
            fetchedSets.push(currentSet);
        });
        return fetchedSets;
    };

    function createBulkQuestions(questionData, questionStub) {
        $.ajax({
            "type": "POST",
            "url": "/questions/add-questions-from-stub",
            "data-type": "json",
            "data": {
                questionData: questionData,
                questionStub: questionStub
            },
            "success": (response) => {
                console.log('HURRAY questions are added:: ', response);
            },
            "error": (err) => {}
        });
    }

    function onStubCreationSuccess (data) {
        $('#add-stub-form').trigger('reset');
        questionStubSet = data;
        //Fetching Wikidata the from the queries
        $.ajax({
            "url": `/sparql/sparql-to-json?sparquery=${data.questionQuery}`,
            "type": "GET",
            "success": (response) => {
                $("html, body").animate({ scrollTop: $(document).height() }, 500);
                $('#stub-add-success').show().fadeOut(2000);
                let dataForQuestions = sanitizeWikiDataResponse(response);
                createBulkQuestions(dataForQuestions, questionStubSet);
            },
            "error": (err) => {}
        });
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
        });
    });

})(jQuery);