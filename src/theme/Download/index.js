import React from 'react'
import Link from '@docusaurus/Link';

function fileNameFromPath(path){
    return path.replace(/^.*[\\\/]/, '')
}

// path has to start in static
export const DownloadLink = ({path, text, name}) => {
    let fileName = name ? name : fileNameFromPath(path)
    return (
        <Link download={fileName} to={path} target="_blank">
            {text ? text : fileName }
            <i class="fas fa-download margin-left--xs"></i>
        </Link>
    )
}


export const DownloadButton = ({path, text, name})=>{
    let fileName = name ? name : fileNameFromPath(path)
    return (
        <Link download={fileName} to={path} target="_blank">
            <button class="button button--outline button--primary padding-left--md margin-bottom--md">
                <i class="fas fa-download margin-right--sm"></i>
                {text ? text : fileName }
            </button>
        </Link>
        
    )
}