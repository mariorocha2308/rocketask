"use client";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { postTask, putTask } from "../redux/slices/task.slice";


const TaskForm = (props) => {
	const dispatch = useAppDispatch();
	const session = useAppSelector(state => state.user)
	const [error, setError] = useState('')
	const taskForm = useRef({
		title: props.data.title || "",
		description: props.data.description || "",
	});

	const handleTask = (e) => {
		e.preventDefault();

		if(Object.values(taskForm.current).includes('')) return
		console.log(taskForm.current.title)
		if(taskForm.current.title.length <= 5) {
			setError('Titulo no puede contener menos de 5 caracteres')

			setTimeout(() => {
				setError('')
				return;
			},3000)
			return;
		}

		console.log(taskForm.current)

		const task = {
			id: props?.data?.id,
			token: session.user.access_token,
			title: taskForm.current.title,
			description: taskForm.current.description
		}


		dispatch(props.data.id ? putTask(task) : postTask(task));
		props.onCancel()
	};

	const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		taskForm.current[e.target.name] = e.target.value;
	};

	return (
		<section className="flex flex-col mt-10 bg-white p-8 rounded-sm shadow-md sm:w-full md:max-w-2xl m-auto gap-3">
			<form className="flex flex-col w-full m-auto" onSubmit={handleTask}>
				{error && (
					<div className="bg-red-300 py-4 px-2 rounded-md text-white font-semibold">
						<label htmlFor="alert">{error}</label>
					</div>
				)}
				<h4 className="font-semibold">Create new task</h4>
				<input
					type="text"
					placeholder="Title"
					name="title"
					defaultValue={props.data.title}
					className="border border-gray-300 rounded-md px-3 py-2 mb-2 mt-8"
					onChange={eventInput}
				/>
				<input
					placeholder="Description"
					name="description"
					defaultValue={props.data.description}
					className="border border-gray-300 rounded-md px-3 py-2 mb-2"
					onChange={eventInput}
				/>
				<footer className="flex justify-end gap-4 mt-4">
					<button
						className="bg-red-100 py-2 px-4 rounded-sm text-sm font-medium active:scale-90 cursor-pointer"
						onClick={() => props.onCancel()}
					>
						Cancel
					</button>
					<button className="bg-blue-400 py-2 px-4 rounded-sm text-sm font-medium active:scale-90 cursor-pointer">
						{props.data.id ? "Edit" : "Create"}
					</button>
				</footer>
			</form>
		</section>
	);
};

export default TaskForm;
