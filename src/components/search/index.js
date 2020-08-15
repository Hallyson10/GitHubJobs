import React from 'react';
import Input from './search_job_description';
import Button from './button';
import ButtomSearch from './button_search';

import * as Styles from './styles';

const search = (props) => {
  return (
      <>
      <Input
          titleSearch='Search Job'
          placeholder='Search Job, title, expertise'
          value={props.inputSearch}
          onChangeText={(text)=>props.setInputSearch(text)}
      />
      <Input
          titleSearch='Location'
          placeholder='ex : Boston'
          value={props.inputLocation}
          onChangeText={(text)=>props.setLocation(text)}
      />
        <Button
            atived={props.fulltime}
            onPress={props.setFullTime}
        />

      <Styles.ContainerSeacherOptions>
      <ButtomSearch
          onPress={props.search}
      />
      </Styles.ContainerSeacherOptions>
      </>
  )
}

export default search;