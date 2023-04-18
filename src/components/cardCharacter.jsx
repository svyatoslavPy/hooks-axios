import React, { useState } from 'react'
import { useFetchCharacter } from '../hooks/use-fetch-data'
import { Loader } from './preloader'
import { Card } from './Card'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const СardCharacter = () => {
	const navigate = useNavigate()
	const [pageCharacter, setPageCharacter] = useState('character/?page=1')
	const [disabledCharacter, setDisabledCharacter] = useState(false)
	const { dataCharacter, loadingCharacter } = useFetchCharacter(
		`${pageCharacter}`
	)
	const [show, setShow] = useState(false)

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

	const showMyInfo = index => {
		navigate(`/character/info/${index}`)
		setShow(true)
	}

	return (
		<div className='card-flex__wrapper'>
			<div className='card-flex__items'>
				<div className='card-flex'>
					{loadingCharacter ? (
						<Loader></Loader>
					) : (
						dataCharacter.results
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
				{!loadingCharacter && <Outlet context={[show]}></Outlet>}
			</div>
		</div>
	)
}
