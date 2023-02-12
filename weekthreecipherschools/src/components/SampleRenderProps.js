import React from 'react'
import RenderPropsComponent from './RenderPropsComponent'
import {useCookies} from "react-cookie"

// class SampleRenderProps extends React.Component{
const SampleRenderProps = () => {    
    const [cookies,setCookie ,removeCookie] = useCookies(["name"]);
    console.log(cookies)
    return(
        <RenderPropsComponent 
        render={() =>{
        return(
            <div>
                <h2 onClick={(e) => setCookie("age",22)}>
                    This is from render props</h2>
            </div>
        )
        } }/>
    
    )
}

export default SampleRenderProps;