import React from 'react';
import * as Styles from './styles';
import Introduction from './Introduction';
import ButtonProx from './button_prox';
import Details from './details';

const documentation = () => {
  return (
    <Styles.Container>
      <Introduction
        title='Pagination'
      />
      <Styles.TextBody>
      The API also supports pagination. /positions.json, 
      for example, will only return 50 positions at a time. 
      You can paginate results by adding a page parameter to your queries.
      Pagination starts by default at 0.       
      </Styles.TextBody>
      <Styles.TextSubDescription>
        Examples
      </Styles.TextSubDescription>
      <Styles.TextSubDescription>
      https://jobs.github.com/positions.json?description=ruby&page=1       
      </Styles.TextSubDescription>
      <Styles.TextSubDescription>
      https://jobs.github.com/positions.json?page=1&search=code      
      </Styles.TextSubDescription>
      <Introduction
        title='Retrieving a specific job'
      />
      <Styles.TextBody>
      Retrieve the JSON representation of a single job posting.
      </Styles.TextBody>
      <Styles.TextSubDescription>
      Parameters
      </Styles.TextSubDescription>
      <Details 
        title='markdown - '
        details='Set to TRUE to get the description and how_to_apply fields as Markdown.'
      />
      <Styles.TextSubDescription>
        Examples
      </Styles.TextSubDescription>
      <Styles.TextSubDescription>
      https://jobs.github.com/positions/21516.json      
      </Styles.TextSubDescription>
      <Styles.TextSubDescription>
      https://jobs.github.com/positions/21516.json?markdown=true      
      </Styles.TextSubDescription>
      <Styles.ViewBody/>
    </Styles.Container>
  )
}

export default documentation;