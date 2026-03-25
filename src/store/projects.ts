import { Project } from '../model/types'

export const projects: Project[] = [
	{
		title: 'Playzy',
		description:
			'Playzy is a production full-stack Telegram Mini App for party games with localized flows, premium features, and a backend powered by PostgreSQL and Redis.',
		imageUrl: 'img/project-4.png',
		imagePosition: 'center 8%',
		imageScaleClass: 'scale-[1.12] md:scale-[1.18] origin-top',
		liveUrl: 'https://t.me/PlayzyOfficialBot/playzyapp?startapp=home',
		tech: [
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
				title: 'Tailwind CSS',
				icon: 'img/icons/tech/tailwind.png',
			},
		],
	},
	{
		title: 'Recipe Radar',
		description:
			'Recipe Radar is a recipe discovery app that helps users find meals based on available ingredients, browse popular dishes, view detailed cooking steps, and save favorites for later.',
		imageUrl: 'img/project-3.jpg',
		imagePosition: 'center center',
		liveUrl: 'https://recipe-radar-250325.web.app',
		repoUrl: 'https://github.com/ArtakN/recipe-radar',
		tech: [
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
				title: 'Firebase',
				icon: 'img/icons/tech/firebase.png',
			},
			{
				title: 'Feature Sliced Design',
				icon: 'img/icons/tech/fsd.png',
			},
		],
	},
	{
		title: 'Crypto View',
		description:
			'CryptoView is a web application for cryptocurrency enthusiasts and traders. It offers real-time tracking of the top 50 cryptocurrencies, sourced directly from CoinGecko. The platform also provides learning resources to help users understand the world of cryptocurrencies.',
		imageUrl: 'img/project-1.png',
		liveUrl: 'https://crypto-view-app-7e881.web.app',
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
]
