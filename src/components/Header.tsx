import React from 'react'

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<header className='fixed top-0 left-0 w-full bg-[#212121] shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50'>
			<div className='container mx-auto flex h-20 justify-between items-center px-4 md:px-6 lg:px-8'>
				<p className='text-xl md:text-2xl font-semibold text-white'>
					<a href='index.html'>Artak N.</a>
				</p>
				<nav className='hidden md:block'>
					<ul className='flex gap-10 text-white'>
						<li>
							<a
								href='#home'
								className='hover:text-[#007CED] transition-colors duration-300'
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='#about'
								className='hover:text-[#007CED] transition-colors duration-300'
							>
								About
							</a>
						</li>
						<li>
							<a
								href='#projects'
								className='hover:text-[#007CED] transition-colors duration-300'
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href='#contact'
								className='hover:text-[#007CED] transition-colors duration-300'
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className='md:hidden cursor-pointer' onClick={toggleMobileMenu}>
					<div className='w-8 h-1 bg-white mb-1'></div>
					<div className='w-8 h-1 bg-white mb-1'></div>
					<div className='w-8 h-1 bg-white'></div>
				</div>
				{isMobileMenuOpen && (
					<div className='fixed top-0 left-0 w-full h-full bg-[#212121] z-50 flex flex-col items-center justify-center'>
						<div
							className='absolute top-4 right-4 cursor-pointer'
							onClick={toggleMobileMenu}
						>
							<img
								src='img/icons/close.svg'
								alt='Menu close icon'
								className='w-8 h-8'
							/>
						</div>
						<nav className='text-white text-2xl'>
							<ul className='flex flex-col items-center gap-6'>
								<li>
									<a
										href='#home'
										className='hover:text-[#007CED] transition-colors duration-300'
										onClick={toggleMobileMenu}
									>
										Home
									</a>
								</li>
								<li>
									<a
										href='#about'
										className='hover:text-[#007CED] transition-colors duration-300'
										onClick={toggleMobileMenu}
									>
										About
									</a>
								</li>
								<li>
									<a
										href='#projects'
										className='hover:text-[#007CED] transition-colors duration-300'
										onClick={toggleMobileMenu}
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href='#contact'
										className='hover:text-[#007CED] transition-colors duration-300'
										onClick={toggleMobileMenu}
									>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}
