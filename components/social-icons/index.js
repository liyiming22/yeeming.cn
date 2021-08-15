import Mail from './mail.svg'
import Github from './github.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]
  // const hoverCssStr = `hover:text-${kind}`

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        // className={`fill-current text-gray-700 dark:text-gray-200 hover:text-${kind} dark:hover:text-${kind} h-${size} w-${size}`}
        className={`fill-current text-gray-700 dark:text-gray-200 h-6 w-6`}
      />
    </a>
  )
}

export default SocialIcon
