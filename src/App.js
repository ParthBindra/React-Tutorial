import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title='welcome to the new Blog';
  return (
    <Router>
    <div className="App">
   <div className='content'>
<Navbar/>
<Switch>
<Route path ="/">
  <Home/>
</Route>
<Route path ="/create">
  <Create/>
  
</Route>
<Route path ="/blogs/:id">
  <BlogDetails/>
  
</Route>
</Switch>
    <h1>{title}</h1>
   </div>
    </div>
    </Router>
  );
}

export default App;
