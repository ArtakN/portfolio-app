import { projects } from '../store/projects'
import { SingleProject } from './SingleProject'

export function Projects() {
	return (
		<section id='projects' className='py-20 lg:py-28 bg-[#171717]'>
			<div className='container mx-auto max-w-5xl px-4 lg:px-0'>
				<p className='text-3xl text-start font-semibold mb-20 relative pb-4'>
					Projects
					<span className='absolute bottom-[-6px] left-0 h-[2px] w-[130px] bg-[#007ced]'></span>
				</p>
				<div className='flex flex-col gap-10'>
					{projects.map((project, index) => (
						<SingleProject key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}
