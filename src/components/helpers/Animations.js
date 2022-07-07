import styled, {css, keyframes} from 'styled-components'

export const Grain = keyframes`
  0%,
	to {
		transform: translate(0)
	}

	10% {
		transform: translate(-5%, -10%)
	}

	20% {
		transform: translate(-15%, 5%)
	}

	30% {
		transform: translate(7%, -25%)
	}

	40% {
		transform: translate(-5%, 25%)
	}

	50% {
		transform: translate(-15%, 10%)
	}

	60% {
		transform: translate(15%)
	}

	70% {
		transform: translateY(15%)
	}

	80% {
		transform: translate(3%, 35%)
	}

	90% {
		transform: translate(-10%, 10%)
	}
`;