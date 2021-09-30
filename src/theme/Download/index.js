import React from 'react'
import Link from '@docusaurus/Link';

// path has to start in static
export const DownloadLink = ({path, text, name}) => {
    let fileName = name ? name : path.replace(/^.*[\\\/]/, '')
    return <Link download={fileName} to={path} target="_blank">{text ? text : fileName }</Link>
}
