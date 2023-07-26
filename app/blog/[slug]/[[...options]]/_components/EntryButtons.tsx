import Link from "next/link";
import EntryButton from "@blog/_components/EntryButton";
import {faArrowLeft, faPencil} from "@fortawesome/free-solid-svg-icons";
import ShareSpan from "./ShareSpan";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {UDFontButton} from "@blog/_components/UDFontBlock";
import TogglePageViewLink from "@blog/_components/TogglePageViewLink";
import React from "react";
import BlogPost from "@blog/_lib/blogPost";

type Props = {
  post: BlogPost
  extended?: boolean
}

export function RichEntryButtons({ post, extended }: Props) {
  return (
    <>
      <Link href={'/blog'}>
        <EntryButton icon={faArrowLeft} text={'記事一覧'}/>
      </Link>
      <ShareSpan slug={post.slug}>
        <EntryButton icon={faTwitter} text={'ツイート'}/>
      </ShareSpan>
      <a href={'https://github.com/TrpFrog/next-trpfrog-net/issues'}>
        <EntryButton icon={faPencil} text={'訂正依頼'}/>
      </a>
      {extended && (
        <>
          <UDFontButton/>
          {post.numberOfPages >= 2 && <TogglePageViewLink post={post}/>}
        </>
      )}
    </>
  )
}

export function EntryButtons({ post }: Props) {
  return (
    <>
      <p className={'link-area'} style={{textAlign: 'center'}}>
        <Link href={'/blog'}>
          記事一覧
        </Link>
        <ShareSpan slug={post.slug}>
          <a>ツイート</a>
        </ShareSpan>
        <a href={'https://github.com/TrpFrog/next-trpfrog-net/issues'}>
          訂正リクエスト
        </a>
      </p>
    </>
  )
}