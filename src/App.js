import React, { useState } from 'react';
import './App.css';
import InputComponent from './InputComponent';
import Dialoguebox from './Dialoguebox';

function App() {
	const [ inputContent, setInputContent ] = useState('hello world');
	const [ isModalOpen, setIsModalOpen ] = useState(false);

	const changeInputContent = (value) => {
		setInputContent(value);
	};

	const changeModalView = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<div className='App'>
			<InputComponent change={changeInputContent} />
			<button onClick={changeModalView}>Open Modal</button>
			<Dialoguebox content={inputContent} open={isModalOpen} onClose={changeModalView} />
			<div>{inputContent}</div>
		</div>
	);
}

export default App;
