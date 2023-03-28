'use client';

import React from "react";

const share = (slug: string) => {
  if (typeof window === 'undefined') return;
  const articleURL = 'https://trpfrog.net/blog/' + slug
  const tweetURL = 'https://twitter.com/intent/tweet?'
    + "text=" + encodeURIComponent(document.title) + "&"
    + "url=" + encodeURIComponent(articleURL);
  window.open(tweetURL);
}

export default function ShareSpan(props: {
  slug: string,
  children: React.ReactNode
}) {
  return (
    <span onClick={() => share(props.slug)}>
      {props.children}
    </span>
  )
}
