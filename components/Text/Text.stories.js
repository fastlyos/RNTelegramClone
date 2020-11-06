import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Text from './index';
import CenterView from '@app/components/CenterView';

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => <Text>{text('Text', 'Hello Button')}</Text>)
  .add('with some emoji', () => <Text>😀 😎 👍 💯</Text>);
