import React from "react";
import { PostHeader } from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighLighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';


SyntaxHighLighter.registerLanguage('js', js);
SyntaxHighLighter.registerLanguage('css', css);

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img: (image) => (
      <Image
        src={`/images/posts/${post.slug}/${image.src}`}
        alt={image.alt}
        width={600}
        height={300}
      />
    ),
    code: ({ node, inline, className, children, ...props }) => {
      //const {className, value} = code;
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighLighter
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, "")}
          style={atomDark}
          language={match[1]}
          PreTag="div" 
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
