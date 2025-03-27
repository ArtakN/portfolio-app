import { techStack } from '../store/techStack'

export function Hero() {
	return (
		<section id='home' className='py-32 lg:py-40 px-4 lg:px-0'>
			<div className='container mx-auto max-w-5xl flex flex-col gap-10'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-10'>
					<div className='text-center md:text-left'>
						<p className='text-3xl md:text-4xl font-semibold leading-tight'>
							Hi, I am <br />
							<span className='text-5xl md:text-6xl'>Artak Navoyan</span>
						</p>
						<p className='text-xl md:text-2xl text-gray-400 mt-2'>
							Front-End Developer
						</p>
					</div>
					<div>
						<img
							src='img/hero.jpg'
							alt='Profile photo'
							className='w-full max-w-[400px] rounded-lg'
						/>
					</div>
				</div>
				<div className='flex flex-col md:flex-row items-center gap-10 '>
					<p className='text-xl md:text-2xl font-semibold text-white relative'>
						Tech Stack
						<span className='absolute bottom-[-6px] left-0 md:h-0 h-[2px] w-[114px] bg-[#007ced]'></span>
					</p>
					<ul className='flex flex-wrap justify-center gap-4 md:gap-6'>
						{techStack.map(tech => (
							<li key={tech.title} className='relative group'>
								<img
									src={tech.icon}
									alt={`${tech.title} Icon`}
									className='h-10 hover:scale-110 transition-all duration-200'
								/>
								<span className='absolute left-1/2 -translate-x-1/2 bottom-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md py-1 px-2 transition-opacity duration-200'>
									{tech.title}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
