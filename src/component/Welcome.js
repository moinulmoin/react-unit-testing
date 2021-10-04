import { useState } from 'react';

const Welcome = () => {
	const [changeText, setChangeText] = useState(false);

	return (
		<div>
			<h1>Welcome to React!</h1>
			{!changeText && <p>This is a simple React component.</p>}
			{changeText && <p>Changed successfully!</p>}
			<button type='button' onClick={() => setChangeText(!changeText)}>
				Change Text
			</button>
		</div>
	);
};

export default Welcome;
