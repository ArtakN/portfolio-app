export function Contact() {
	return (
		<section id='contact' className='bg-[#212121] py-20 lg:py-28'>
			<div className='container mx-auto max-w-5xl px-4 lg:px-0'>
				<h2 className='text-3xl text-start font-semibold mb-20 relative pb-4'>
					Contact
					<span className='absolute bottom-[-6px] left-0 h-[2px] w-[130px] bg-[#007ced]'></span>
				</h2>
				<div className='flex flex-col gap-10 items-center md:flex-row md:justify-between '>
					<div className='flex flex-col gap-10 items-start md:flex-row md:gap-20'>
						<div className='flex gap-4'>
							<img
								className='w-[26px] h-[40px] mt-[6px]'
								src='img/icons/location.png'
								alt='Location icon'
							/>
							<div>
								<p className='text-start text-xl'>Location</p>
								<p className='text-base text-gray-400 leading-[27px]'>
									Hamburg, Germany
								</p>
							</div>
						</div>
						<div className='flex gap-4'>
							<img
								className='w-[40px] h-[28px] mt-[6px]'
								src='img/icons/mail.png'
								alt='Mail icon'
							/>
							<div>
								<p className='text-start text-xl'>Mail</p>
								<a
									className='text-base text-gray-400 leading-[27px] hover:text-white transition-colors duration-300'
									href='mailto:navoyan.ab@gmail.com'
								>
									navoyan.ab@gmail.com
								</a>
							</div>
						</div>
					</div>
					<div className='flex gap-6'>
						<div className='transition-transform hover:scale-110'>
							<a
								target='_blank'
								href='https://github.com/ArtakN'
								rel='noopener noreferrer'
								aria-label='Open GitHub profile'
							>
								<img src='img/icons/github.png' alt='GitHub icon' />
							</a>
						</div>
						<div className='transition-transform hover:scale-110'>
							<a
								target='_blank'
								href='https://www.linkedin.com/in/artak-navoyan-7564a4149/'
								rel='noopener noreferrer'
								aria-label='Open LinkedIn profile'
							>
								<img src='img/icons/linkedin.png' alt='LinkedIn icon' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
