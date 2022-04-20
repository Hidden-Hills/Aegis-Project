import React from 'react';
import {ThemeProvider} from "styled-components";
import Splash from '../components/Splash.js';
import '../componentStyles/dark-light.css';

const LightTheme = {
    pageBackground: "white",
    titleColor: "#121212",
    tagLineColor: "black",
};

const DarkTheme = {
    pageBackground: "#121212",
    titleColor: "e7e7e7",
    tagLineColor: "lavender"
};

const themes = {
    light: LightTheme,
    dark: DarkTheme
};

export {DarkTheme, LightTheme, themes};