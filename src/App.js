import React, { Component}from 'react';
import Main from './Main';
import {Switch, Route} from 'react-router-dom'
import Tasks from './components/task/Tasks'
class App extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(<>
        <Switch>
            <Route exact path="/" component={(history) => <Main history={history} />} />
            <Route path="/tasks" component={() => <Tasks/>} />
        </Switch>
       </> )
    }
}
export default App
