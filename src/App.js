import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './components/about/about'
import Homepage from './components/homepage/homepage'


function App() {

	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Homepage/>}/>
				<Route path='/about/:id' element={<About/>}/>
				
				
			</Routes>
		</div>
	)
}

export default App
