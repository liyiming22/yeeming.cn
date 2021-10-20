import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'data/post')

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDir)
	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.mdx?$/, '')
			}
		}
	})
}

export function getAllFilesFrontMatter() {
	const fileNames = fs.readdirSync(postsDir)
	const allFrontMatter = fileNames
		.reduce((frontMatters, fileName) => {
			const fullPath = path.join(postsDir, fileName)
			const source = fs.readFileSync(fullPath, 'utf-8')
			const { data } = matter(source)
			if (!data.draft) {
				frontMatters.push({ ...data })
			}
			return frontMatters
		}, [])
		.sort((a, b) => {
			return a.date < b.date ? 1 : -1
		})
	return allFrontMatter
}
