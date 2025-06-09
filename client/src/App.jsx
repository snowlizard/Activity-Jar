import { Jar } from './components/jar';
import { mainContainer } from './css/index.css';
import { ActivityEditor } from './components/activityEditor';

const App = () => {
	return (
		<div className={mainContainer}>
			<Jar />
			<ActivityEditor />
		</div>
	);
}

export default App
