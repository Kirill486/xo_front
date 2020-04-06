import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from '../../components/button';

storiesOf("Button", module)
	.add("Show component", () => {
    const printAlarm = () => alert('Button clicked');
    return (
      <Button
        onClick={printAlarm}
      >
        Button Name
      </Button>
    );
  })