import React from 'react';
import { Jar } from './components/jar';
import { ActivityEditor } from './components/activityEditor';

function App() {
	const mainContainer = "w-screen h-screen flex flex-wrap justify-center text-[#fff]";

	return (
		<div className={mainContainer}>
			<Jar />
			<ActivityEditor />
		</div>
	);
}

export default App
