import React from 'react'

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

	React.useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

		return () => {
			document.body.style.overflow = ''
		}
	}, [isMobileMenuOpen])

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev)
	}

	return (
		<header className='fixed top-0 left-0 w-full bg-[#212121] shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50'>
			<div className='container mx-auto flex h-20 justify-between items-center px-4 md:px-6 lg:px-8'>
				<p className='text-xl md:text-2xl font-semibold text-white'>
					<a href='#home'>Artak N.</a>
				</p>
				<nav className='hidden md:block' aria-label='Primary navigation'>
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
				<button
					type='button'
					className='md:hidden cursor-pointer'
					onClick={toggleMobileMenu}
					aria-expanded={isMobileMenuOpen}
					aria-controls='mobile-menu'
					aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
				>
					<div className='w-8 h-1 bg-white mb-1'></div>
					<div className='w-8 h-1 bg-white mb-1'></div>
					<div className='w-8 h-1 bg-white'></div>
				</button>
				{isMobileMenuOpen && (
					<div
						id='mobile-menu'
						className='fixed top-0 left-0 w-full h-full bg-[#212121] z-50 flex flex-col items-center justify-center'
					>
						<button
							type='button'
							className='absolute top-4 right-4 cursor-pointer'
							onClick={toggleMobileMenu}
							aria-label='Close menu'
						>
							<img
								src='img/icons/close.svg'
								alt='Menu close icon'
								className='w-8 h-8'
							/>
						</button>
						<nav className='text-white text-2xl' aria-label='Mobile navigation'>
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
