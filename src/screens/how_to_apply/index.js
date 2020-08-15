import React from 'react';
import * as Styles from './styles';
import colors from '../../fontes/colors';
import { MaterialIcons } from '@expo/vector-icons';

const how_to_apply = () => {
  return (
      <Styles.Container>
          <Styles.ContainerInformations>
          <Styles.ViewIcon>
                <Styles.constTitleIntroduction color={colors.secundary}>
                1 - first stage
                </Styles.constTitleIntroduction>
                <MaterialIcons name='add' size={80} color={colors.secundary} />
                </Styles.ViewIcon>
                <Styles.constTitleIntroduction color={colors.secundary}>
                Create & preview your listing
                </Styles.constTitleIntroduction>
                <Styles.ContainerDescriptionPlan color={colors.secundary}>
                See exactly how your listing will look before you publish live. Before creating 
                a listing, you must login with your GitHub account and verify your email address.
                </Styles.ContainerDescriptionPlan>
          </Styles.ContainerInformations>
          <Styles.ContainerInformations>
          <Styles.ViewIcon>
                <Styles.constTitleIntroduction color={colors.quinary}>
                2 - second stage
                </Styles.constTitleIntroduction>
                <MaterialIcons name='attach-money' size={80} color={colors.quinary} />
                </Styles.ViewIcon>
                <Styles.TextValue color={colors.quinary}>
                $450
                </Styles.TextValue>
                <Styles.constTitleIntroduction color={colors.quinary}>
                Pay with a major credit card
                </Styles.constTitleIntroduction>
                <Styles.ContainerDescriptionPlan color={colors.quinary}>
                Invoicing available on request for bulk orders. Email jobs@github.com for more info. Sorry, 
                no recruitment agencies.
                </Styles.ContainerDescriptionPlan>
          </Styles.ContainerInformations>
          <Styles.ContainerInformations>
          <Styles.ViewIcon>
                <Styles.constTitleIntroduction color={colors.quartenary}>
                3 - third stage
                </Styles.constTitleIntroduction>
                <MaterialIcons name='check' size={80} color={colors.quartenary} />
          </Styles.ViewIcon>
                <Styles.constTitleIntroduction color={colors.quartenary}>
                Your listing goes live immediately
                </Styles.constTitleIntroduction>
                <Styles.ContainerDescriptionPlan color={colors.quartenary}>
                Listings are live for 30 days. We’ll send you a receipt and a link to change the listing.
                </Styles.ContainerDescriptionPlan>
          </Styles.ContainerInformations>
      </Styles.Container>
  )
}

export default how_to_apply;