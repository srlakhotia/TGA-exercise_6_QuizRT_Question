var React = require('react');

class addStubForm extends React.Component {
    render() {
        return (

            <form>
                <div>
                    <label>Add question stub</label>
                    <textarea className="form-control" ref={(input) => { this.topicName = input; }}></textarea>
                </div>
                <div className="form-group">
                    <label>Question Query</label>
                    <textarea className="form-control" ref={(input) => { this.topicName = input; }}></textarea>
                </div>

                <div className="form-group">
                    <label>Correct response query</label>
                    <input className="form-control"
                           ref={(input) => { this.topicName = input; }}
                           type="text">
                    </input>
                </div>


                <div className="form-group">
                    <label>Distractor Query</label>
                    <textarea className="form-control" ref={(input) => { this.topicName = input; }}></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Execute Stub : do the magic</button>
                </div>

            </form>
        )


    }
}

module.exports = addStubForm;