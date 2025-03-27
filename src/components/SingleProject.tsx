import { Project } from '../model/types'

interface SingleProjectProps {
	project: Project
}

export function SingleProject({ project }: SingleProjectProps) {
	const techStack = project.tech

	return (
		<div className='bg-[#212121] p-4 rounded-xl shadow-lg hover:bg-[#292929] transition-all duration-300'>
			<div>
				<div className='flex flex-col md:flex-row gap-6 items-stretch '>
					<div className='md:w-1/2'>
						<img
							className='w-full h-full object-fill rounded-xl'
							src={project.imageUrl}
							alt='Project image'
						/>
					</div>
					<div className='md:w-1/2 flex flex-col justify-between'>
						<div className='flex flex-col'>
							<h3 className='text-xl font-semibold text-start mb-6'>
								{project.title}
							</h3>
							<p className='text-gray-300 text-lg text-justify flex-grow'>
								{project.description}
							</p>
						</div>
						<ul className='flex gap-4 justify-center my-8'>
							{techStack.map(tech => (
								<li key={tech.title} className='relative group'>
									<img
										src={tech.icon}
										alt={`${tech.title} Icon`}
										className='h-8 hover:scale-110 transition-all duration-200'
									/>
									<span className='absolute left-1/2 -translate-x-1/2 bottom-10 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md py-2 px-2 transition-opacity duration-200'>
										{tech.title}
									</span>
								</li>
							))}
						</ul>
						<div className='flex gap-4 sm:gap-6'>
							<a
								href={project.liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='w-full'
							>
								<button className='w-full bg-transparent border border-[#007ced] hover:bg-[#007ced] font-bold py-2 rounded-lg transition-all duration-300'>
									View Live
								</button>
							</a>
							<a
								href={project.repoUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='w-full'
							>
								<button className='w-full bg-transparent hover:bg-[#007ced] font-bold py-2 rounded-lg border border-[#007ced] transition-all duration-300'>
									Github Repo
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
