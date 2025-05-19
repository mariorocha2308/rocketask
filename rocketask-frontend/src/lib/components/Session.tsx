'use client'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next';

const Logout = () => {
	const router = useRouter()

	const handleLogout = () => {
		deleteCookie('session')
		router.push('/')
	}

	return (
		<button className="bg-green-300 py-2 px-4 rounded-sm cursor-pointer font-medium active:scale-90 text-sm" onClick={handleLogout}>Logout</button>
	)
}

export default Logout;
