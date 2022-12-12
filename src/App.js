import './Components/Style/App.css';
import { Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import Homepage from './Components/Homepage/Homepage'


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
