var React = require('react');
var DefaultLayout = require('./layouts/default-layout');
var Navigaton = require('./navigation/index');


class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <Navigaton data={this.props.nav}></Navigaton>

                <div class="container">
                    <h1>On question attempt</h1>
                    <form id="questionAttempt">
                        <div className="form-group">
                            <label>Question Id</label>
                            <input type="text" value="1" className="form-control" name="questionId"/>
                        </div>
                        <div className="form-group">
                            <label>Time taken to answer</label>
                            <input type="text" value="10" className="form-control" name="timeTaken" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Fire</button>
                        </div>

                    </form>
                </div>


            </DefaultLayout>
        );
    }
}

module.exports = indexPage;