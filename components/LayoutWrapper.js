import SectionContainer from "./SectionContainer"
import Link from './Link'
import Logo from '@/data/logo.svg'
import { headerTitle } from '@/data/siteMetadata'
import navLinks from '@/data/navLinks'
import ThemeSwitch from "./ThemeSwitch"
import MobileNav from './MobileNav'
import Footer from './Footer'

export default function LayoutWrapper({ children }) {
  return (
		<SectionContainer>
			<div className="flex flex-col justify-between h-screen">
				<header className="flex justify-between items-center py-8">
					<div>
						<Link href="/" aria-label="Yeeming's Blog">
							<div className="flex justify-between items-center">
								<div className="mr-3 hidden sm:block">
									<Logo />
								</div>
								<div className="text-2xl font-medium">
									{ headerTitle }
								</div>
							</div>
						</Link>
					</div>
					<div className="flex items-center text-base leading-5">
						<div className="hidden sm:block">
							{
								navLinks.map(link => 
									<Link
										key={link.title}
										href={link.href}
										className="p-1 sm:p-4 font-medium text-gray-900 dark:text-gray-100"
									>
										{ link.title }
									</Link>
								)
							}
						</div>
						<ThemeSwitch />
						<MobileNav />
					</div>
				</header>
			</div>
			<main className="mb-auto">{ children }</main>
			<Footer />
		</SectionContainer>
	)
}
