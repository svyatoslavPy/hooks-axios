export const Card = props => {
	return (
		<div className='card'>
			<p>{props.id}</p>
			<p>{props.name}</p>
			<p>{props.status}</p>
		</div>
	)
}
