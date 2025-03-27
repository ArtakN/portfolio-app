import { Project } from '../model/types'

export const projects: Project[] = [
	{
		title: 'Crypto View',
		description:
			'CryptoView is a web application for cryptocurrency enthusiasts and traders. It offers real-time tracking of the top 50 cryptocurrencies, sourced directly from CoinGecko. The platform also provides learning resources to help users understand the world of cryptocurrencies.',
		imageUrl: 'img/project-1.png',
		liveUrl: 'https://myportfolio-crytoview.netlify.app',
		repoUrl: 'https://github.com/ArtakN/crypto-app',
		tech: [
			{
				title: 'HTML',
				icon: 'img/icons/tech/html.png',
			},
			{
				title: 'CSS',
				icon: 'img/icons/tech/css.png',
			},
			{
				title: 'JavaScript',
				icon: 'img/icons/tech/javascript.png',
			},
		],
	},
	{
		title: 'Task Flow',
		description:
			'TaskFlow is a task management web app inspired by Trello. It allows users to create boards, lists, and tasks, with real-time data storage using Firebase Firestore. The app features a clean and intuitive UI for organizing tasks efficiently.',
		imageUrl: 'img/project-2.png',
		liveUrl: 'https://task-flow-6c09a.web.app',
		repoUrl: 'https://github.com/ArtakN/taskflow',
		tech: [
			{
				title: 'HTML',
				icon: 'img/icons/tech/html.png',
			},
			{
				title: 'Tailwind CSS',
				icon: 'img/icons/tech/tailwind.png',
			},
			{
				title: 'TypeScript',
				icon: 'img/icons/tech/typescript.png',
			},
			{
				title: 'React',
				icon: 'img/icons/tech/react.png',
			},
			{
				title: 'Zustand',
				icon: 'img/icons/tech/zustand.png',
			},
			{
				title: 'FireBase',
				icon: 'img/icons/tech/firebase.png',
			},
			{
				title: 'Feature Sliced Design',
				icon: 'img/icons/tech/fsd.png',
			},
		],
	},
]
