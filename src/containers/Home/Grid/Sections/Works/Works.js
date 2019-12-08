import React from 'react'
import styled from 'styled-components'
import {WorkCard} from 'components/Cards'
import centilCover from 'images/centilCover.jpg'
import agromirCover from 'images/agromirCover.jpg'
import lpCover from 'images/lpCover.jpg'
import rhythmCover from 'images/workCover.jpg'
import {mediaQueries} from 'constants/mediaQueries'

const Wrap = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 20px;
   @media ${mediaQueries.tabletS}{
     flex-flow: column nowrap;
     justify-content: center;
     align-self: flex-start;
   }
`
const Bar = styled('div')`
  width: calc(50% - 20px);
  @media ${mediaQueries.tabletS}{
    width: 100%;
    & > div {
      margin: 0 auto 40px;
    }
  }
  @media ${mediaQueries.tabletS}{
    & > div {
      margin: 0 auto 20px;
    }
  }
`
const LeftBar = styled(Bar)``
const RightBar = styled(Bar)`
  margin-top: 40px;
  @media ${mediaQueries.tabletS}{
   margin-top: 0;
  }
`

const Works = () => {
  return (
    <Wrap>
      <LeftBar>
        <WorkCard
          title={'Rhythm Mobile ERP'}
          subtitle={'ReactJS PWA'}
          year={'2019'}
          link={'#'}
          img={rhythmCover}
        />
        <WorkCard
          title={'Control system for Agromir'}
          subtitle={'ReactJS PWA'}
          year={'2019'}
          img={agromirCover}
        />
      </LeftBar>
      <RightBar>
        <WorkCard
          title={'Trainings Forum for Centil'}
          subtitle={'ReactJS'}
          year={'2019'}
          img={centilCover}
        />
        <WorkCard
          title={'Rhythm LP'}
          subtitle={'ReactJS'}
          year={'2019'}
          img={lpCover}
        />
      </RightBar>
    </Wrap>
  )
}

export default Works
