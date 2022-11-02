import {ArticleParts, ArticleRenderer} from "../BlogMarkdown";
import React from "react";

const HorizontalScroll: ArticleParts = (content, entry, imageSize) => {
  const contents = content.split('\n\n').filter(e => e.trim() !== '')
  return (
    <div style={{display: 'flex', overflowX: 'scroll', gap: '1em', whiteSpace: 'nowrap'}}>
      {contents.map((e, idx) => (
        <div
          key={'horizontal-element-key-' + idx}
          style={{display: 'inline-block', whiteSpace: 'initial'}}
        >
          <ArticleRenderer
            toRender={e}
            entry={entry}
            imageSize={imageSize}
          />
        </div>
      ))}
    </div>
  )
}

export default HorizontalScroll