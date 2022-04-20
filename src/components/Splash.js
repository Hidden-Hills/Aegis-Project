import styled from "styled-components"

import { Container } from "@material-ui/core";



function Splash(props){
    function changedTheme(){
        if (props.theme === "light"){
            props.setTheme("dark");
        }
        else{
            props.setTheme("light");
        }
    };

    {/*const icon = props.theme === "light" ? <Moon size={40} /> : <Sun size={40} />;*/}
}