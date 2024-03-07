const initialTasks = [
	{
		task: "Task 1",
		completed: false,
	},
	{
		task: "Task 2",
		completed: false,
	},
	{
		task: "Task 3",
		completed: false,
	},
];

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
			<i class="fa-solid fa-arrow-right-from-bracket"></i>
		</div>
	);
}

function Main() {
	return (
		<div className="main">
			<Progress />
			<Form />
			<TaskLists />
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

function Form() {
	return (
		<form name="willDoForm" id="todo">
			<input type="text" placeholder="What will you do?"></input>
			<button>+</button>
		</form>
	);
}

function TaskLists() {
	return (
		<ul className="task-lists">
			{initialTasks.map((taskItem) => (
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
					<i class="fa-regular fa-circle"></i>
				</span>
				{taskItem.task}
			</div>

			<span>
				<i class="fa-regular fa-pen-to-square"></i>
				<i class="fa-regular fa-trash-can"></i>
			</span>
		</li>
	);
}

export default App;
