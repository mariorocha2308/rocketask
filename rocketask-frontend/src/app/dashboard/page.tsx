'use client'

import { useAppSelector } from '@/lib/redux/hooks'
import Session from '@/lib/components/Session'
import { useEffect, useState } from 'react'

const Dashboard = () => {
	const listTasks = useAppSelector(state => state.tasks.listTasks)

	 // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-MX", {
      year: "numeric",
      month: "short",
      day: "numeric",
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

	const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
	
	return (
		<section className="h-screen bg-gray-100 w-full flex flex-col items-center">
			<header className="h-18 bg-white shadow-sm flex items-center p-5 max-w-[1600px] w-full rounded-sm justify-between">
				<h5 className="font-medium">Rocketask</h5>
				<Session/>
			</header>
			<div className="flex flex-col w-full max-w-[1600px] p-5 mt-5">
				<header className='flex justify-between'>
					<h3 className="text-xl font-semibold text-start">List Tasks</h3>
					<button className='bg-blue-400 py-1 px-4 rounded-sm text-sm font-medium active:scale-90 cursor-pointer'>New task</button>
				</header>
					
					<div className="overflow-x-auto mt-6">
						{isLoading ? (
							<div className="min-w-full border border-gray-200 rounded-lg">
								<div className="bg-gray-50 border-b border-gray-200">
									<div className="grid grid-cols-5 gap-4 px-6 py-3">
										<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
										<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
										<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
										<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
										<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
									</div>
								</div>
								<div className="bg-white divide-y divide-gray-200">
									{[...Array(5)].map((_, index) => (
										<div key={index} className="grid grid-cols-5 gap-4 px-6 py-4">
											<div className="h-5 bg-gray-200 rounded animate-pulse"></div>
											<div className="h-5 bg-gray-200 rounded animate-pulse"></div>
											<div className="h-5 bg-gray-200 rounded animate-pulse"></div>
											<div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse"></div>
											<div className="h-5 bg-gray-200 rounded animate-pulse"></div>
										</div>
									))}
								</div>
							</div>
						) : (
							<table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											ID
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Title
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Description
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Created At
										</th>
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
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
			</div>
		</section>
	)
}

export default Dashboard;
