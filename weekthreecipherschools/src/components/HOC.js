import React from 'react'

function higherOrderComponent(HocComponent) {
    return class HOC extends React.Component {
        render() {
            return (
                <di>
                    <h1>inside HOC</h1>
                    <HocComponent/>
                </di>
            )
        }
    }
}

export default higherOrderComponent;