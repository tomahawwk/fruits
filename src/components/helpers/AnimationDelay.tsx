import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAnimationSelector } from '../../redux/animation/selectors';

const AnimationDelay = () => {
    const [delay, setDelay] = useState<boolean>(false);
    const {appearAnimate} = useSelector(getAnimationSelector);
    useEffect(() => {
        appearAnimate && setDelay(true);
    }, [appearAnimate])
}
export default AnimationDelay;