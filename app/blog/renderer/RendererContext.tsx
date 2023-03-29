'use client';

import {createContext} from "react";
import {ReactMarkdownOptions} from "react-markdown/lib/react-markdown";

const RendererContext = (
  createContext<Partial<ReactMarkdownOptions>>({})
);

export default RendererContext;
