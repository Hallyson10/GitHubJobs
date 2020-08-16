import React from 'react';
import * as Styles from './styles';
import Introduction from './Introduction';
import ButtonProx from './button_prox';
import Details from './details';

const documentation = (props) => {
  return (
    <Styles.Container>
      <Introduction
        title='Seeking data return in JSON format'
      />
      <Styles.ViewBody>
        <Styles.TextBody>
        To get the JSON representation I just use positions.json:
        </Styles.TextBody>
        <Styles.TextSubDescription>
        https://jobs.github.com/positions.json?description=python&location=new+york       
        </Styles.TextSubDescription>
      </Styles.ViewBody>
        <Styles.TextSubDescription>
        GET /positions.json
        </Styles.TextSubDescription>
      <Styles.TextBody>
      Search for jobs by term, location, full time vs part time, 
      or any combination of the three. All parameters are optional.        
      </Styles.TextBody>
      <Styles.TextSubDescription>
        Parameters
        </Styles.TextSubDescription>
        <Details
          title='Description - '
          details='A search term, such as "ruby" or "java". This parameter is aliased to search.'
        />
        <Details
          title='Location - '
          details='A city name, zip code, or other location search term.'
        />
        <Details
          title='Lat - '
          details='A specific latitude. If used, you must also send long and must not send location.'
        />
        <Details
          title='Long - '
          details='A specific longitude. If used, you must also send lat and must not send location.'
        />
        <Details
          title='FullTime - '
          details='If you want to limit results to full time positions set this parameter to TRUE.'
        />
        <Styles.TextSubDescription>
        Parameters
        </Styles.TextSubDescription>
        <Styles.TextSubDescription>
        https://jobs.github.com/positions.json?description=python&full_time=true&location=sf
        </Styles.TextSubDescription>
        <Styles.TextSubDescription>
        https://jobs.github.com/positions.json?search=node
        </Styles.TextSubDescription>
        <Styles.TextSubDescription>
        https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823
        </Styles.TextSubDescription>
        <ButtonProx onPress={()=>props.navigation.navigate('PageDocumentation3')}/>
    </Styles.Container>
  )
}

export default documentation;