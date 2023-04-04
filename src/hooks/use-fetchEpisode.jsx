import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchEpisode = url => {
	const [dataEpisode, setData] = useState(null)
	const [loadingEpisode, setLoading] = useState(true)
	// const [error, setError] = useState(undefined);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
		axios
			.get(url)
			.then(res => {
				setData(res.data)
				// setLoading(false)
			})
			.then(error => {
				console.log(error)
			})
	}, [url])

	return { dataEpisode, loadingEpisode }
}
