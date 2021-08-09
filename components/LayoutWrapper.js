import SectionContainer from "./SectionContainer"
import Link from './Link'
import Logo from '@/data/logo.svg'

export default function LayoutWrapper({ children }) {
  return (
		<SectionContainer>
			<div className="flex flex-col justify-between h-screen">
				<header className="flex justify-between items-center py-10">
					<div>
						<Link href="/" aria-label="Tailwind CSS Blog">
							<div className="flex justify-between items-center">
								<div className="mr-3">
									<Logo />
								</div>
							</div>
						</Link>
					</div>
				</header>
			</div>
			<main className="mb-auto">{ children }</main>
		</SectionContainer>
	)
}
