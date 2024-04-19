import { useState } from "react";

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
	const [taskItems, setTaskItems] = useState([]);

	function handleAddTaskItems(item) {
		setTaskItems((taskItems) => [...taskItems, item]);
	}

	function handleDeleteTaskItem(id) {
		setTaskItems((taskItems) =>
			taskItems.filter((taskItem) => taskItem.id !== id)
		);
	}

	function handleToggleItem(id) {
		setTaskItems((taskItems) =>
			taskItems.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		);
	}

	return (
		<div className="main">
			<Progress />
			<Form onAddTaskItems={handleAddTaskItems} />
			<TaskLists
				taskItems={taskItems}
				onDeleteTaskItem={handleDeleteTaskItem}
				onToggleItem={handleToggleItem}
			/>
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

function Form({ onAddTaskItems }) {
	const [task, setTask] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!task) return;

		const newTask = {
			task,
			completed: false,
			id: Date.now(),
		};

		onAddTaskItems(newTask);

		setTask("");
	}

	return (
		<form action="" onSubmit={handleSubmit}>
			<input
				name="input"
				id="taskInput"
				type="text"
				placeholder="What will you do?"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			></input>
			<button className="addBtn">+</button>
		</form>
	);
}

function TaskLists({ taskItems, onDeleteTaskItem, onToggleItem }) {
	return (
		<ul className="task-lists">
			{taskItems.map((taskItem) => (
				<Task
					taskItem={taskItem}
					onDeleteTaskItem={onDeleteTaskItem}
					onToggleItem={onToggleItem}
					key={taskItem.id}
				/>
			))}
		</ul>
	);
}

function Task({ taskItem, onDeleteTaskItem, onToggleItem }) {
	return (
		<li className="task">
			<div>
				<span>
					<i
						className={
							!taskItem.completed
								? "fa-regular fa-circle"
								: "fa-solid fa-circle-check"
						}
						value={taskItem.completed}
						onClick={() => onToggleItem(taskItem.id)}
					></i>
				</span>
				<span
					style={taskItem.completed ? { textDecoration: "line-through" } : {}}
				>
					{taskItem.task}
				</span>
			</div>

			<span>
				<i className="fa-regular fa-pen-to-square"></i>
				<i
					onClick={() => onDeleteTaskItem(taskItem.id)}
					className="fa-regular fa-trash-can"
				></i>
			</span>
		</li>
	);
}

export default App;
