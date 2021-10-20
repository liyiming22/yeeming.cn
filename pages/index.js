// import { useTheme } from 'next-themes'
import { getAllFilesFrontMatter } from '@/lib/posts'


export default function Home ({ allFilesFrontMatter }) {
	// const { theme, setTheme } = useTheme()

  return (
    <>
      { allFilesFrontMatter.map(frontMatter => {
        const { date, title, summary } = frontMatter
        return (
          <div key={ title }>
            <h3>{ date }</h3>
            <h3>{ title }</h3>
            <h3>{ summary }</h3>
            <br />
          </div>
        )
      }) }
      <h1>fsdfs</h1>
    </>
  )
}

export function getStaticProps() {
  const allFilesFrontMatter = getAllFilesFrontMatter()
  return { props: { allFilesFrontMatter } }
}
