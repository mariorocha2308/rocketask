'use client'
import { useState } from "react"
import dynamic from "next/dynamic";
import { useAppSelector } from "../redux/hooks"

const TaskFormFallback = dynamic(() => import('@/lib/components/Fallbacks/TaskForm'));
const TaskForm = dynamic(() => import('@/lib/components/TaskForm'), {
  ssr: false,loading: () => <TaskFormFallback />,
})


const TaskList = () => {
	const listTasks = useAppSelector(state => state.tasks.listTasks)
	const [open, setOpen] = useState(false)
	const [task, setTask] = useState({
		id: '',
		title: '',
		description: ''
	})

	 // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-MX", {
      month: "short",
      day: "numeric",
      hour: 'numeric',
      minute: 'numeric'
    }).format(date)
  }

  // Helper function to get status badge styling
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const openModal = (data) => {
  	setOpen(!open)
   	if(data) setTask(data)
    else setTask({
 			id: '',
			title: '',
			description: ''
    })
  }

	return (
		<div className="flex flex-col w-full max-w-[1600px] p-5 mt-5">
			<header className='flex justify-between'>
				<h3 className="text-xl font-semibold text-start">List Tasks</h3>
				<button className='bg-blue-400 py-2 px-4 rounded-sm text-sm font-medium active:scale-90 cursor-pointer' onClick={openModal}>New task</button>
			</header>
			{open ? <TaskForm onCancel={() => setOpen(false)} data={task} /> : (
				<div className="overflow-x-auto mt-6">
					<table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
								<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
								<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
								<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
								<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
								<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>

							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{listTasks.map((task) => (
								<tr key={task.id} className="hover:bg-gray-50">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.id}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.title}</td>
									<td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{task.description}</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className={`px-2 py-1 text-xs rounded-full ${getStatusClasses(task.status)}`}>
											{task.status.charAt(0).toUpperCase() + task.status.slice(1).replace("-", " ")}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(task.createdAt)}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{task.id !== 1 && task.id !== 2 && (
											<button className="bg-black text-white px-6 py-1 rounded-2xl text-sm font-semibold cursor-pointer active:scale-90" onClick={() => openModal(task)}>Edit</button>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

export default TaskList;
