import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Title } from '../../components/title';

storiesOf("Title", module)
	.add("Title", () => {
    return (
      <Title
        text={'This is title'}
      />
    );
  })
	.add("Another Title", () => {
    return (
      <Title 
        text={'Another title..'}
      />
    );
  })