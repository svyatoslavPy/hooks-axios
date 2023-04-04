import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchCharacter = url => {
	const [dataCharacter, setData] = useState(null)
	const [loadingCharacter, setLoading] = useState(true)
	// const [error, setError] = useState(undefined);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000);
		axios
			.get(url)
			.then(res => {
				setData(res.data)
				// setLoading(false)
			})
			.catch(err => {
				// setError(data.error);
				console.log(err)
			})
	}, [url])

	return { dataCharacter, loadingCharacter }
}

