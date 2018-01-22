var React = require('react');

class addStubForm extends React.Component {
    render() {
        return (
            <form method="post" action="/stubs/add-stub">
                <div>
                    <label htmlFor="topic">Topic</label>
                    <input type="text" id="topic" name="topic" className="form-control" ref={(input) => { this.topicName = input; }} />
                </div>
                <div>
                    <label htmlFor="questionStub">Add question stub</label>
                    <input type="text" name="questionStub" id="questionStub" className="form-control" ref={(input) => { this.topicName = input; }} />
                </div>
                <div className="form-group">
                    <label htmlFor="correctResponse">Correct response query</label>
                    <input type="text" id="correctResponse" name="correctResponse" className="form-control" ref={(input) => { this.topicName = input; }} />
                </div>

                <div className="form-group">
                    <label htmlFor="questionQuery">Question Query</label>
                    <textarea className="form-control"
                            ref={(input) => { this.topicName = input; }}
                            name="questionQuery"
                            id="questionQuery">
                    </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="distractorResponse">Distractor response Query</label>
                    <input type="text" name="distractorResponse" id="distractorResponse" className="form-control" ref={(input) => { this.topicName = input; }} />
                </div>

                <div className="form-group">
                    <label htmlFor="distractorQuery">Distractor Query</label>
                    <textarea name="distractorQuery" id="distractorQuery" className="form-control" ref={(input) => { this.topicName = input; }}></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Execute Stub : do the magic</button>
                </div>
                <input type="hidden" value="3" name="numberOfDistractors" id="numberOfDistractors" />
            </form>
            )


    }
}

module.exports = addStubForm;