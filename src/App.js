import { useState } from "react";

// const initialTasks = [
// 	{
// 		task: "Task 1",
// 		completed: false,
// 	},
// 	{
// 		task: "Task 2",
// 		completed: false,
// 	},
// 	{
// 		task: "Task 3",
// 		completed: false,
// 	},
// ];

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
}

function Header() {
	return (
		<div className="header">
			<p className="logo-text">
				WILL-<span>DO</span>
			</p>
			<i className="fa-solid fa-arrow-right-from-bracket"></i>
		</div>
	);
}

function Main() {
	const [taskItem, setTaskItem] = useState([]);

	function handleAddTaskItem(item) {
		setTaskItem((taskItem) => [...taskItem, item]);
	}

	return (
		<div className="main">
			<Progress />
			<Form onAddTaskItem={handleAddTaskItem} />
			<TaskLists taskItem={taskItem} />
		</div>
	);
}

function Progress() {
	return (
		<div className="progress">
			<p className="confirmation">
				Todo Done<span className="encourage">Keep it up.</span>
			</p>
			<p className="num-completed">0/3</p>
		</div>
	);
}

function Form({ onAddTaskItem }) {
	const [task, setTask] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!task) return;

		const newTask = {
			task,
			completed: false,
			id: Date.now(),
		};

		onAddTaskItem(newTask);
		console.log(newTask);

		setTask("");
	}

	return (
		<form name="willDoForm" id="todo" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="What will you do?"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			></input>
			<button>+</button>
		</form>
	);
}

function TaskLists({ taskItem }) {
	return (
		<ul className="task-lists">
			{taskItem.map((taskItem) => (
				<Task taskItem={taskItem} key={taskItem.task} />
			))}
		</ul>
	);
}

function Task({ taskItem }) {
	return (
		<li className="task">
			<div>
				<span>
					<i className="fa-regular fa-circle"></i>
				</span>
				{taskItem.task}
			</div>

			<span>
				<i className="fa-regular fa-pen-to-square"></i>
				<i className="fa-regular fa-trash-can"></i>
			</span>
		</li>
	);
}

export default App;
