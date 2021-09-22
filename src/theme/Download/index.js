import React from 'react'
import Link from '@docusaurus/Link';

// path has to start in static
export const DownloadLink = ({path}) => {
    let fileName = path.replace(/^.*[\\\/]/, '')
    return <Link download={fileName} to={path} target="_blank">{fileName}</Link>
}