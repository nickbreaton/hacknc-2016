import React from 'react';

export default (props) => (
  <iframe
    style={{opacity: 0.8}}
    width={props.width}
    height={window.innerHeight + 50}
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    title="Example"
    src="//nickbreaton.maps.arcgis.com/apps/Embed/index.html?webmap=754383b8c86a42b6b64dbe0156f1f7bd&amp;extent=-122.2038,25.7531,-68.239,48.7436&amp;zoom=true&amp;scale=true&amp;disable_scroll=true&amp;theme=light"
  />
)
