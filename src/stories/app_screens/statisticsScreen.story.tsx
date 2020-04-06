import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Title } from '../../components/title';
import { AppContainer, ApplicationColumn, ApplicationRowWide } from '../../components/appContainer';
import { TextInputConfirm } from '../../components/text-input-confirm';
import { Statistics } from '../../components/statistics';
import { nullStatistics } from '../../models/reducers/statistics';

storiesOf("Statistics screen story", module)
	.add("Screen", () => {
    const confirmName = () => alert('confirmName');
    const resetStatistics = () => alert('resetStatistics');
    return (
      <AppContainer>
        <Title text="Hi, Bob)" />
        <ApplicationRowWide>
          <ApplicationColumn>
            <TextInputConfirm
              onConfirm={confirmName}
              initialValue={"Bob"}
            />
          </ApplicationColumn>
          <ApplicationColumn>
            <Statistics
              statistic={nullStatistics}
              resetStatistics={resetStatistics}
            />
          </ApplicationColumn>
        </ApplicationRowWide>      
      </AppContainer>
      
    );
  })
