var React = require('react');

class addStubForm extends React.Component {
    render() {
        return (
            <form name='stubForm' id='stubForm' method='post' action=''>
                <div>
                    <label>Add question stub</label>
                    <input type='text' id='questionstub' required />
                </div>
                <div>
                    <label>Correct response fields</label>
                    <input type='text' id='correctResponse' required />
                </div>
                <div>
                    <label>Question Query</label>
                    <input type='text' id='questionQuery' required />
                </div>
                <div>
                    <label>Topic</label>
                    <input type='text' id='topic' required />
                </div>
                <div>
                    <label>Number of distractos</label>
                    <input type='text' id='distractorCount' required />
                </div>
                <div>
                    <label>Distractor Query</label>
                    <input type='text' id='distractorQuery' required />
                </div>
                <div>
                    <label>Distractor resonse fields</label>
                    <input type='text' id='distractorResponse' required />
                </div>
                <div>
                    <input type='submit' value='Submit Stub' id='btnSubmit' />
                </div>
            </form>
            )


    }
}

module.exports = addStubForm;