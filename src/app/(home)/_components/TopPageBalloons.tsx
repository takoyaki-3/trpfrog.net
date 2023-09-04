'use client'

import Block from '@/components/molecules/Block'
import styles from '@/app/(home)/style.module.scss'
import Link from 'next/link'
import { useBalloonState } from '@/app/balloon/_components/BalloonArray'
import Balloon from '@/app/balloon/_components/Balloon'
import Button from '@/components/atoms/Button'

type Props = {
  id?: string
}

const TopPageBalloons = ({ id }: Props) => {
  const balloonAmount = 7
  const { isBurst, balloonColorArray, onBurst } = useBalloonState(
    balloonAmount,
    id ?? '',
  )

  return (
    <Block
      title={'風船コーナー'}
      h2icon={'ice'}
      id={id}
      style={{ overflow: 'hidden' }}
    >
      <div id={styles.top_balloon_grid}>
        {Array.from(Array(7), (v, k) => (
          <Balloon
            key={k}
            width={'100%'}
            height={'100%'}
            isBurst={isBurst[k]}
            color={balloonColorArray[k]}
            onBurst={() =>
              onBurst({
                index: k,
                currentAmount: balloonAmount,
              })
            }
          />
        ))}
      </div>
      <p>
        <Button href={'/balloon'}>もっと割る</Button>
      </p>
    </Block>
  )
}

export default TopPageBalloons
