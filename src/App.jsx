import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeGreeting } from './pages/HomeGreeting'
import { HomeCardCharacter } from './pages/HomeCardСharacter'
import { HomeCardEpisode } from './pages/HomeCardEpisode'
import { InfoEpisode } from './pages/HomeCardEpisode'
import { InfoCharacter } from './pages/HomeCardСharacter'

const App = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeGreeting />} />
				<Route path='/character' element={<HomeCardCharacter />}>
					<Route path='info/:id' element={<InfoCharacter />} /> 
				</Route>
				<Route path='/episode' element={<HomeCardEpisode />}>
					<Route path='info/:id' element={<InfoEpisode />} /> 
				</Route>
			</Routes>
		</BrowserRouter>
	)
}



export default App
