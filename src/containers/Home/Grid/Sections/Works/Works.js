import React from 'react'
import styled from 'styled-components'
import {WorkCard} from 'components/Cards'
import centilCover from 'images/centilCover.jpg'
import agromirCover from 'images/agromirCover.jpg'
import lpCover from 'images/lpCover.jpg'
import rhythmCover from 'images/workCover.jpg'

const Wrap = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`
const Bar = styled('div')`
  width: 50%;
`
const LeftBar = styled(Bar)`
  margin-right: 40px;
`
const RightBar = styled(Bar)`
  margin-top: 40px;
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
