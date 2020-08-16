import React from 'react';
import * as Styles from './styles';
import Introduction from './Introduction';
import ButtonProx from './button_prox';

const documentation = (props) => {
  return (
      <Styles.Container>
          <Introduction
              title='Knowing the api'
          />
          <Styles.ViewBody>
              <Styles.TextBody>
              The GitHub Jobs API allows you to search, and view jobs with JSON over HTTP.
                To get the JSON representation 
              of any search result or job listing, append .json to the URL you'd use on the HTML GitHub Jobs site.
              For example, when searching for Python jobs near New York on the site I am taken to this url:
              </Styles.TextBody>
              <Styles.TextSubDescription>
              https://jobs.github.com/positions?description=python&location=new+york
              </Styles.TextSubDescription>
              <ButtonProx onPress={()=>props.navigation.navigate('PageDocumentation2')}/>
          </Styles.ViewBody>
      </Styles.Container>
  )
}

export default documentation;