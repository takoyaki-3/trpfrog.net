import React from 'react'
import {GetStaticProps, NextPage} from "next";
import Link from 'next/link'

import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import Block from "../../../components/Block";


import {BlogPost, getAllPostSlugs, getPostData} from "../../../lib/blog";
import BlogMarkdown from "../../../components/BlogMarkdown";

import styles from '../../../styles/blog.module.scss'

type PageProps = {
    entry: BlogPost
}

type Params = {
    slug: string
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async ({params}) => {
    const entry = await getPostData(params!.slug)
    return {
        props: {
            entry: JSON.parse(JSON.stringify(entry)),
        }
    }
}

export const getStaticPaths = async () => {
    const paths = await getAllPostSlugs()
    return {
        paths,
        fallback: false
    }
}

const Article: NextPage<PageProps> = ({ entry }) => {

    return (
        <Layout>
            <Title title={entry.title} description={entry.description}>
                <p>
                    {entry.date}
                </p>
                <p>
                    <Link href={'/blog'}>
                        <a className={'linkButton'}>記事一覧に戻る</a>
                    </Link>
                </p>
            </Title>
            <Block>
                <BlogMarkdown markdown={entry.content}/>
            </Block>
            <Block style={{background: 'none', boxShadow: 'none', padding: 0}}>
                <p className={'link-area'} style={{textAlign: 'center'}}>
                    <Link href={'/blog'}>
                        <a>記事一覧</a>
                    </Link>
                    <Link href={'https://github.com/TrpFrog/next-trpfrog-net/issues'}>
                        <a>ツイート</a>
                    </Link>
                    <Link href={'https://github.com/TrpFrog/next-trpfrog-net/issues'}>
                        <a>訂正リクエスト</a>
                    </Link>
                </p>
            </Block>
        </Layout>
    )
}

export default Article