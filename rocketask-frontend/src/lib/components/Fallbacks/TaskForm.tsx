const TaskFormFallback = () => {
	return (
		<section className="flex flex-col mt-5 bg-white p-8 rounded-sm">
      <div className="flex flex-col w-1/2 m-auto animate-pulse">
        {/* Title skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded-md mb-8"></div>

        {/* Input field skeletons */}
        <div className="h-10 bg-gray-200 rounded-md mb-2 mt-8"></div>
        <div className="h-10 bg-gray-200 rounded-md mb-2"></div>

        {/* Footer buttons skeleton */}
        <div className="flex justify-end gap-4 mt-4">
          <div className="h-9 w-20 bg-gray-200 rounded-sm"></div>
          <div className="h-9 w-20 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    </section>
	)
}

export default TaskFormFallback;
