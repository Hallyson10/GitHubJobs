import React from 'react';
import * as Styles from './styles';
import MiniaturaImage from '../image_job/miniature';

const profile_job = (props) => {
   
  return (
      <Styles.Container>
          <Styles.ContainerHeader>
                <Styles.ContainerImageTitle>
                    <MiniaturaImage uri={props.uri} />
                    <Styles.TitleJob>
                        Senior / Lead DevOps Enginner mhnvjhy hjvjhv hvjhvjh jhv
                        hvhjgvhgjhvhj hvhjvjhv hjvjhvjbkjbkjbkjbkj
                    </Styles.TitleJob>
                    <Styles.SubTitleCompany>
                        OpSourced
                    </Styles.SubTitleCompany>
                    <Styles.ViewTypeJob>
                    <Styles.TitleTypeTemp>
                        Fulltime
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
                    2 hours agor
                </Styles.SubTitleCompany>
            </Styles.ContainerRequirements>
            <Styles.DescriptionRequirements>
            We are a fast-growing full-service agency and technology company with digital at the core of everything we do. We are dedicated to working in healthcare and partner with our customers to improve the lives of patients. Technology is the backbone of our organisation. We pride ourselves on our expertise and the value we create for our customers. We have created and continue to run several software platforms and services for our customers. We are looking for brilliant backend developers to join our team during this period of exciting growth based in our offices in Braintree, Essex. You will be working with an existing team developing cutting edge PHP / Laravel web-based software. You should enjoy the buzz of working in a fast-paced environment.
             Working on some cool, challenging projects and you will have ownership over your work.
            </Styles.DescriptionRequirements>
          </Styles.ContainerBody>
      </Styles.Container>
  )
}

export default profile_job;