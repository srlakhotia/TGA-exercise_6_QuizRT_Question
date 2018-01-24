var React = require('react');

class addStubForm extends React.Component {
    render() {
        return (
            <form method="post" id="add-stub-form" action="/stubs/add-stub">
                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <input type="text"
                           id="topic"
                           name="topic"
                           value="Singer"
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="questionStub">Add question stub</label>
                    <input type="text"
                           name="questionStub"
                           id="questionStub"
                           value = "Where was {{singer}} born?"
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="correctResponse">Correct response query</label>
                    <input type="text"
                           id="correctResponse"
                           name="correctResponse"
                           value="{{place_of_birth}}, {{country}}"
                           className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="questionQuery">Question Query</label>
                    <textarea className="form-control"
                            name="questionQuery"
                              value = "SELECT ?singer ?singerLabel ?place_of_birth ?place_of_birthLabel ?country ?countryLabel WHERE { SERVICE wikibase:label { bd:serviceParam wikibase:language '[AUTO_LANGUAGE],en'. } ?singer wdt:P106 wd:Q177220. OPTIONAL { ?singer wdt:P19 ?place_of_birth. ?place_of_birth wdt:P17 ?country} } LIMIT 100"
                            id="questionQuery">
                    </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="distractorResponse">Distractor response Query</label>
                    <input type="text"
                           name="distractorResponse"
                           id="distractorResponse"
                           className="form-control"
                           value="{{city}}, {{country}}"/>
                </div>

                <div className="form-group">
                    <label htmlFor="distractorQuery">Distractor Query</label>
                    <textarea name="distractorQuery"
                              id="distractorQuery"
                              className="form-control"
                              value ="SELECT DISTINCT ?city ?cityLabel WHERE { SERVICE wikibase:label { bd:serviceParam wikibase:language '[AUTO_LANGUAGE],en'. } ?city wdt:P31 wd:Q515. ?city wdt:P17 wd:{{country}}. FILTER NOT EXISTS { ?city wdt:Q515 wd:{{place_of_birth}}. } } LIMIT 10">

                    </textarea>
                </div>
                <input type="hidden" value="3" name="numberOfDistractors" id="numberOfDistractors" />

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Execute Stub : do the magic</button>
                </div>
                <div id="stub-add-success" style={{display: 'none'}} className="alert alert-success">
                    <strong>Success!</strong> Stub has been saved successfully.
                </div>
            </form>
            )


    }
}

module.exports = addStubForm;