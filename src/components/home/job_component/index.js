import React from 'react';
import * as Styles from './styles';
import { Fontisto ,Entypo } from '@expo/vector-icons';
import ImageMiniature from '../../image_job/miniature'; 
import moment from 'moment';

const job_component = (props) => {
  return (
      <Styles.Container
      onPress={props.onPress}
      activeOpacity={0.9}
      >
          <Styles.ImageContainer>
              <ImageMiniature uri={props.company_logo}/>
          </Styles.ImageContainer>
          <Styles.ContainerInformationsJobComponent>
          <Styles.ViewInformations>
          <Styles.ContainerTextIcons>
              <Styles.TitleTypeJob>
              {props.titleCarg}
              </Styles.TitleTypeJob>
              </Styles.ContainerTextIcons>
              <Styles.SubTitleJob>
                  {props.location}{' '}
                  <Fontisto name='map-marker-alt' size={14} color={'black'} style={{marginTop:-100}} />
              </Styles.SubTitleJob>
              <Styles.ContainerTextIcons>
              <Styles.TitleCityJob>
              {props.company}
              </Styles.TitleCityJob>
                <Entypo name='suitcase' size={10} color={'#4F4F4F'} style={{marginLeft:4}} />
              </Styles.ContainerTextIcons>
              </Styles.ViewInformations>
              <Styles.ContainerTemp>
                  <Styles.TitleTypeTemp>{props.typeJob}</Styles.TitleTypeTemp>
              </Styles.ContainerTemp>
              <Styles.TitleHoursPosted>
              {moment(new Date(props.created_at)).startOf('day').fromNow()}
              </Styles.TitleHoursPosted>
          </Styles.ContainerInformationsJobComponent>
      </Styles.Container>
  )
}

export default job_component;