import React from 'react'

function useResize() {
	const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

	React.useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth)
		}

		handleResize()

		let timeoutId: NodeJS.Timeout

		const delayedHandleResize = () => {
			clearTimeout(timeoutId)

			timeoutId = setTimeout(() => {
				handleResize()
			}, 500)
		}

		window.addEventListener('resize', delayedHandleResize)

		return () => {
			window.removeEventListener('resize', delayedHandleResize)
			clearTimeout(timeoutId)
		}
	}, [])

	return screenWidth
}

export default useResize
