export function About() {
	return (
		<section id='about' className='bg-[#212121] py-20 lg:py-28'>
			<div className='container mx-auto max-w-5xl px-4 lg:px-0'>
				<p className='text-3xl text-start font-semibold mb-20 relative pb-4'>
					About Me
					<span className='absolute bottom-[-6px] left-0 h-[2px] w-[157px] bg-[#007ced]'></span>
				</p>
				<div className='flex flex-col md:flex-row md:items-start justify-between items-end gap-10 '>
					<div className='md:w-1/2 w-full'>
						<img
							src='img/about.png'
							alt='About me section image'
							className='w-full h-full object-fill rounded-lg'
						/>
					</div>
					<div className='md:w-1/2'>
						<p className='text-gray-300 text-justify text-lg'>
							As a Front-End Developer, I have a strong skill set in HTML, CSS,
							SCSS, JavaScript, React, Redux Toolkit and TypeScript. I am
							passionate about designing and building responsive websites that
							provide a seamless user experience. My expertise lies in creating
							dynamic and engaging interfaces through writing clean and
							optimized code, and utilizing the latest development tools and
							techniques. I am also a team player who enjoys collaborating with
							cross-functional teams to deliver outstanding web applications.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
