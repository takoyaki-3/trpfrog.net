'use client'

import * as React from 'react'

import useSWR from 'swr'

import { fetchOGP } from '@/components/organisms/LinkCard/fetchOGP'
import { LinkCard } from '@/components/organisms/LinkCard/LinkCard'
import { SkeletonLinkCard } from '@/components/organisms/LinkCard/SkeletonLinkCard'

type ClientLinkCardProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'children'> & {
  href: string
}

export function ClientLinkCard(props: ClientLinkCardProps) {
  const { href, ...rest } = props
  const { data, error, isLoading } = useSWR(href, fetchOGP)

  if (isLoading) {
    return <SkeletonLinkCard {...rest} />
  }

  if (error || !data) {
    return <LinkCard title={href} href={href} {...rest} />
  }

  return (
    <LinkCard
      title={data.ogTitle ?? ''}
      description={data.ogDescription}
      href={href}
      imageUrl={data.ogImage?.[0]?.url}
      favicon={data.favicon}
      {...rest}
    />
  )
}
