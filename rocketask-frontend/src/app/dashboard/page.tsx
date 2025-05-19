import Session from '@/lib/components/Session'

const Dashboard = () => {
	return (
		<section className="h-screen bg-gray-100 w-full flex flex-col items-center">
			<header className="h-18 bg-white shadow-sm flex items-center p-5 max-w-[1600px] w-full rounded-sm justify-between">
				<h5 className="font-medium">Rocketask</h5>
				<Session/>
			</header>
			<div className="flex flex-col w-full max-w-[1600px] p-5 mt-5">
				<h3 className="text-xl font-semibold text-start">List Tasks</h3>

			</div>
		</section>
	)
}

export default Dashboard;
