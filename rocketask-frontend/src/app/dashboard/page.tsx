'use client'
import dynamic from 'next/dynamic'
import Session from '@/lib/components/Session'
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { session } from '@/lib/redux/slices/user.slice';

const TaskListFallback = dynamic(() => import('@/lib/components/Fallbacks/TaskList'));
const TaskList = dynamic(() => import('@/lib/components/TaskList'), {
  ssr: false,loading: () => <TaskListFallback />,
})

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (getCookie('session')) {
			const user = getCookie('session')
			dispatch(session(JSON.parse(user)))
		}
	}, [])

	return (
		<section className="h-screen bg-gray-100 w-full flex flex-col items-center">
			<header className="h-18 bg-white shadow-sm flex items-center p-5 max-w-[1600px] w-full rounded-sm justify-between">
				<h5 className="font-medium">Rocketask</h5>
				<Session/>
			</header>
			<TaskList/>
		</section>
	)
}

export default Dashboard;
