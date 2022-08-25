import {keyframes} from 'styled-components'

export const AsideAppear = keyframes`
	0% { transform: translateX(-100%) }
	100% { transform: translateX(0) }
`

export const FadeY = keyframes`
	0% {
        transform: translateY(-20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

export const FadeYUp = keyframes`
	0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

export const FadeYDown = keyframes`
	0% {
        transform: translateY(-20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

export const MoveY = keyframes`
	0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

export const ScaleX = keyframes`
	0% {
		transform: scaleX(0);
	}
	100% {
		transform: scaleX(1);
	}
`

export const Scale = keyframes`
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
`

export const zoomIn = keyframes`
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(1.2);
	}
`

export const ScaleYOut = keyframes`
	0% {
		transform: scaleY(1);
	}
	100% {
		transform: scaleY(0);
	}
`

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