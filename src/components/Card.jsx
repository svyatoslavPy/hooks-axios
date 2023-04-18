export const Card = props => {
	const showMyInfoHandler = () => {
		props.showMyInfo();
	}
	
	return (
		<div onClick={() => showMyInfoHandler()} className='card'>
			<p>{props.id}</p>
			<p>{props.name}</p>
			<p>{props.status}</p>
		</div>
	)
}
