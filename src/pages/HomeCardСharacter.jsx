import { СardCharacter } from '../components/cardCharacter'
import { useOutletContext } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useFetchCharacter } from '../hooks/use-fetch-data'
// import { useEffect, useState } from 'react'

export const HomeCardCharacter = () => <СardCharacter></СardCharacter>

export const InfoCharacter = () => {
	const { id } = useParams()
	const [show] = useOutletContext()
	const { dataCharacter } = useFetchCharacter(`character/${id}`)
	console.log(dataCharacter)

	return (
		<div className='info'>
			{show && dataCharacter && (
				<>
					<p>{dataCharacter.gender}</p>
					<p>{dataCharacter.species}</p>
					<img src={dataCharacter.image} alt="img" />
				</>
			)}
		</div>
	)
}
