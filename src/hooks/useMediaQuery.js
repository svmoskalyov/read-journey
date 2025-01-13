import { useRef, useSyncExternalStore } from 'react'

export default function useMediaQuery(query) {
  const mediaQuery = useRef(window.matchMedia(query))

  return useSyncExternalStore((callback) => {
    mediaQuery.current.addEventListener('change', callback)
    return () => {
      mediaQuery.current.removeEventListener('change', callback)
    }
  }, () => mediaQuery.current.matches)
}

// import { useState, useEffect } from 'react'
//
// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false)
//
//   useEffect(() => {
//     const media = window.matchMedia(query)
//     if (media.matches !== matches) {
//       setMatches(media.matches)
//     }
//     const listener = () => setMatches(media.matches)
//     window.addEventListener('resize', listener)
//     return () => window.removeEventListener('resize', listener)
//   }, [matches, query])
//
//   return matches
// }
//
// export default useMediaQuery
