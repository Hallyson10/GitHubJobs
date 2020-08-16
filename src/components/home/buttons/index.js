import React,{useContext } from 'react';
import { FlatList,View, Text } from 'react-native';
import * as Styles from './styles';
import Button from './button';
import JobsContext from '../../../contexts/jobs';

const botoes = (props) => {
  const {
    dataOptionsSelected,
    selectedOption
     } = useContext(JobsContext);

  return (
      <Styles.Container>
      <FlatList
        style={{paddingHorizontal:10}}
        data={dataOptionsSelected}
        ListHeaderComponent={<Button onPress={props.documentationScreen} api={true} title='API doc'/>}
        ListFooterComponent={<View style={{marginBottom:20}} />}
        ListFooterComponentStyle={{marginHorizontal:10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        key={props => props.id}
        keyExtractor={props => props.id}
        renderItem={({item,position})=>(
          <Button onPress={()=>selectedOption(item)} marked={item.marked} title={item.title}/>
        )}
      />
      </Styles.Container>
  )
}

export default React.memo(botoes);