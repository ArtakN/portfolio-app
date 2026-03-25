export function About() {
	return (
		<section id='about' className='bg-[#212121] py-20 lg:py-28'>
			<div className='container mx-auto max-w-5xl px-4 lg:px-0'>
				<h2 className='text-3xl text-start font-semibold mb-20 relative pb-4'>
					About Me
					<span className='absolute bottom-[-6px] left-0 h-[2px] w-[157px] bg-[#007ced]'></span>
				</h2>
				<div className='flex flex-col md:flex-row md:items-start justify-between items-end gap-10 '>
					<div className='md:w-1/2 w-full'>
						<img
							src='img/about.png'
							alt='Artak working on a laptop'
							className='w-full h-full object-fill rounded-lg'
						/>
					</div>
					<div className='md:w-1/2'>
						<p className='text-gray-300 text-justify text-lg'>
							I am a full-stack developer experienced with modern web
							technologies such as React, TypeScript, Node.js, Express,
							and MongoDB or SQL. I enjoy building scalable, performant
							applications with clean architecture and user-friendly design.
						</p>
						<p className='text-gray-300 text-justify text-lg mt-5'>
							I am a motivated and fast-learning developer who enjoys solving
							challenging problems and delivering high-quality code. I work
							well in team environments and value clear communication, code
							maintainability, and continuous learning. In projects, I aim
							to balance strong frontend UX with reliable backend
							functionality to build efficient applications.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
