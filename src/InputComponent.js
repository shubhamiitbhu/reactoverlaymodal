import React from 'react';

const InputComponent = (props) => {
	const changeContent = (event) => {
		const value = event.target.value;
		props.change(value);
	};
	return (
		<div>
			<input type='text' onChange={changeContent} />
		</div>
	);
};

export default InputComponent;
