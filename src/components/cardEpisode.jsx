//mycomponent
import React, { useState } from 'react'
import { useFetchEpisode } from '../hooks/use-fetchEpisode'
import { Loader } from './preloader'
import { Card } from './Card'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const CardsEpisode = () => {
	const navigate = useNavigate()
	// hooks
	const [pageEpisode, setPageEpisode] = useState(`episode/?page=1`)
	const { dataEpisode, loadingEpisode } = useFetchEpisode(`${pageEpisode}`)
	const [disabledEpisode, setDisabledEpisode] = useState(false)
	const [show, setShow] = useState(false)


	// Episode
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


	const showMyInfo = index => {
		navigate(`/episode/info/${index}`)
		setShow(true)
	}

	return (
		<>
			<div className='card-flex__wrapper'>
				<div className='card-flex__items'>
					<div className='card-flex'>
						{loadingEpisode ? (
							<Loader></Loader>
						) : (
							dataEpisode.results
								.slice(0, 12)
								.map(i => (
									<Card
										id={i.id}
										name={i.name}
										status={i.status}
										showMyInfo={() => showMyInfo(i.id)}
									></Card>
								))
						)}
					</div>
					{!loadingEpisode && (
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
					{!loadingEpisode && <Outlet context={[show]}></Outlet>}
				</div>
			</div>
		</>
	)
}
