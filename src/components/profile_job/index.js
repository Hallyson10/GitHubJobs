import React from 'react';
import * as Styles from './styles';
import MiniaturaImage from '../image_job/miniature';
import moment from 'moment';

const profile_job = (props) => {
   
  return (
      <Styles.Container>
          <Styles.ContainerHeader>
                <Styles.ContainerImageTitle>
                    <MiniaturaImage resizeMode='contain' uri={props.company_logo} />
                    <Styles.TitleJob>
                        {props.titleJob}
                    </Styles.TitleJob>
                    <Styles.SubTitleCompany>
                        {props.company}
                    </Styles.SubTitleCompany>
                    <Styles.ViewTypeJob>
                    <Styles.TitleTypeTemp>
                        {props.typeJob}
                    </Styles.TitleTypeTemp>
                    </Styles.ViewTypeJob>
                </Styles.ContainerImageTitle>
          </Styles.ContainerHeader>
          <Styles.ContainerBody>
            <Styles.ContainerRequirements>
                <Styles.TitleRequirement>
                    Requeriments
                </Styles.TitleRequirement>
                <Styles.SubTitleCompany>
                posted: {moment(new Date(props.created_at)).startOf('day').fromNow()}
                </Styles.SubTitleCompany>
            </Styles.ContainerRequirements>
            <Styles.DescriptionRequirements>
             {props.description}
            </Styles.DescriptionRequirements>
          </Styles.ContainerBody>
      </Styles.Container>
  )
}

export default React.memo(profile_job);