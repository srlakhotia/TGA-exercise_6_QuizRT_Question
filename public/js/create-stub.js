(function($){
    let questionStubSet;

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
            "error": (err) => {
                console.log('Error in add-questions-from-stub ajax '+err);
            }
        });
    }

    const createDistractorOptions = (dataForQuestions, questionStubSet, callback) => {
        let keys = Object.keys(dataForQuestions[0]),
            resCount = 0;
        
        dataForQuestions.forEach((dataInst) => {
            let distractorQuery = questionStubSet.distractors.distractorQuery;
            keys.forEach((key) => {
                let reg = new RegExp('{{' + key + '}}', 'g');
                distractorQuery = distractorQuery.replace(reg, dataInst[key] ? dataInst[key].value : '');
            });
            dataInst.falseOptions = [];
            $.ajax({
                "url": `/sparql/sparql-to-json?sparquery=${distractorQuery}`,
                "success": res => {
                    ++resCount;
                    dataInst.falseOptions = [res[0], res[1], res[2]];
                    if(resCount === dataForQuestions.length) {
                        callback(dataForQuestions);
                    }
                },
                "error": err => {
                    ++resCount;
                    if(resCount === dataForQuestions.length) {
                        callback(dataForQuestions);
                    }
                }  
            });
        });
    };

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
                let dataForQuestions = response;

                createDistractorOptions(dataForQuestions, questionStubSet, (respData) => {
                    createBulkQuestions(dataForQuestions, questionStubSet);
                });
            },
            "error": (err) => {
                console.log('Error in sparql-to-json ajax '+err);
            }
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
            "error"         : function(e){
                console.log('Error in add-stub: '+e);
            }
        });
    });

})(jQuery);