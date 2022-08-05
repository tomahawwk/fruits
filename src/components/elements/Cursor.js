import AnimatedCursor from "react-animated-cursor"

const Cursor = (props) => {
    return (
        <AnimatedCursor
            innerSize={5}
            outerSize={35}
            color="251, 226, 1"
            outerAlpha={0}
            innerScale={0.5}
            hasBlendMode={true}
            outerScale={2} 
            outerStyle={{
                border: '1px solid rgba(255, 255, 255, .3)'
            }}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    )
}

export default Cursor;