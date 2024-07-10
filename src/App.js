import './App.css';
import DraggableBox from './components/DraggableBox';
import React, { useEffect, useState } from 'react';

function App() {
	const [clickCount, setClickCount] = useState(1)
	const [draggableComponents, setDraggableComponents] = useState([])

	useEffect(() => {
		let draggableComponentsArray = [<DraggableBox index={0} />]
		for (let i = 1; i < clickCount; i++) {
			draggableComponentsArray = [<DraggableBox index={i} childComponent={draggableComponentsArray}></DraggableBox>]
		}
		setDraggableComponents(draggableComponentsArray)
	}, [clickCount])

	const handleAddParent = () => {
		setClickCount(clickCount + 1)
	}

	return (
		<div className='main-page'>
			<button onClick={handleAddParent}>Add Parent</button>
			{draggableComponents}
		</div>
	);
}

export default App;
