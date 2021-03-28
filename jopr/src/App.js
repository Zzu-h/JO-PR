import Header from './Header';
import Footer from './Footer';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Notice from './Notice';
import Board from './Board';
import Schedule from './Schedule';
import Join from './Join';

function App() {
    return (
        <>
            <Header/>

            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/notice" component={Notice}/>
                <Route path="/board" component={Board}/>
                <Route path="/schedule" component={Schedule}/>
                <Route path="/join" component={Join}/>
            </Switch>

            <Footer/>
        </>
    );
}

export default App;
