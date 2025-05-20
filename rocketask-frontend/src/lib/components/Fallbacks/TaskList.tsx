const TaskListFallback = () => {
	return (
		<div className="flex flex-col w-full max-w-[1600px] p-5 mt-5">
			<div className='flex justify-between'>
				<div className="h-7 bg-gray-200 rounded animate-pulse w-40"></div>
				<div className="h-7 bg-gray-200 rounded animate-pulse w-30"></div>
			</div>
			<div className="min-w-full border border-gray-200 rounded-lg mt-6">
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
					{[...Array(2)].map((_, index) => (
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
		</div>
	)
}

export default TaskListFallback;
