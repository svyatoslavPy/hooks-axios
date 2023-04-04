//mycomponent
import React, { useState } from 'react'
import { useFetchCharacter } from './hooks/use-fetch-data'
import { useFetchEpisode } from './hooks/use-fetchEpisode'
import { Loader } from './components/preloader'
import { Card } from './Card'
export const CardsRickyMorty = () => {
	// hooks
	const [pageEpisode, setPageEpisode] = useState(`episode/?page=1`)
	const [disabledCharacter, setDisabledCharacter] = useState(false)
	const { dataEpisode, loadingEpisode } = useFetchEpisode(`${pageEpisode}`)
	const [disabledEpisode, setDisabledEpisode] = useState(false)
	const [pageCharacter, setPageCharacter] = useState('character/?page=1')
	const { dataCharacter, loadingCharacter } = useFetchCharacter(
		`${pageCharacter}`
	)

	// Character
	const prevPageCharacter = () => {
		if (dataCharacter.info.next) {
			setDisabledCharacter(false)
		}
		setPageCharacter(dataCharacter.info.prev)
	}
	const nextPageCharacter = () => {
		if (!dataCharacter.info.next) {
			setDisabledCharacter(true)
		}
		setPageCharacter(dataCharacter.info.next)
	}

	
	// Episode
	// *************

	const prevPageEpisode = () => {
		if (dataEpisode.info.next) {
			setDisabledEpisode(false)
		}
		setPageEpisode(dataEpisode.info.prev)
	}

	const nextPageEpisode = () => {
		if (!dataEpisode.info.next) {
			setDisabledEpisode(true)
		}
		setPageEpisode(dataEpisode.info.next)
	}

	return (
		<div className='card-flex__wrapper'>
			<div className='card-flex__items'>
				<div className='card-flex'>
					{loadingCharacter ? (
						<Loader></Loader>
					) : (
						dataCharacter.results
							.slice(0, 9)
							.map(i => <Card id={i.id} name={i.name} status={i.status}></Card>)
					)}
				</div>
				{!loadingCharacter && (
					<div className='card-flex__btn'>
						<button onClick={() => prevPageCharacter()}>Prev</button>
						<button
							disabled={disabledCharacter}
							onClick={() => nextPageCharacter()}
						>
							Next
						</button>
					</div>
				)}
			</div>
			<div className='card-flex__items'>
				<div className='card-flex'>
					{loadingEpisode ? (
						<Loader></Loader>
					) : (
						dataEpisode.results
							.slice(0, 9)
							.map(i => <Card id={i.id} name={i.name} status={i.status}></Card>)
					)}
				</div>
				{!loadingCharacter && (
					<div className='card-flex__btn'>
						<button onClick={() => prevPageEpisode()}>Prev</button>
						<button
							disabled={disabledEpisode}
							onClick={() => nextPageEpisode()}
						>
							Next
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
