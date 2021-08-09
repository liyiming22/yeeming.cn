import SectionContainer from "./SectionContainer"

export default function LayoutWrapper({ children }) {
  return (
		<SectionContainer>
			<div className="flex flex-col justify-between h-screen">
				{ children }
			</div>
		</SectionContainer>
	)
}
