export interface Tech {
	title: string
	icon: string
}

export interface Project {
	title: string
	description: string
	imageUrl: string
	liveUrl: string
	repoUrl: string
	tech: Tech[]
}
