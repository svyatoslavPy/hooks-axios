import { CardsEpisode } from '../components/cardEpisode'
import { useOutletContext } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useFetchEpisode } from '../hooks/use-fetchEpisode'
// import { useEffect, useState } from 'react'

// import { useOutletContext } from 'react-router-dom'

//parent
export const HomeCardEpisode = () => <CardsEpisode />

export const InfoEpisode = () => {
	const { id } = useParams()
	const [show] = useOutletContext()
	const { dataEpisode } = useFetchEpisode(`episode/${id}`)

	return (
		<div className='info'>
			{show && dataEpisode && (
				<>
					<p>{dataEpisode.id}</p>
					<p>{dataEpisode.air_date}</p>
					<p>{dataEpisode.episode}</p>
				</>
			)}
		</div>
	)
}



