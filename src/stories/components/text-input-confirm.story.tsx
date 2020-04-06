import * as React from "react"
import { storiesOf } from "@storybook/react"
import { TextInputConfirm } from '../../components/text-input-confirm';

storiesOf("TextInputConfirm", module)
	.add("Show component", () => {
    const printAlarm = (mess: string) => alert(mess);
    return (
      <TextInputConfirm 
        onConfirm={printAlarm}
        initialValue="initialValue"
      />
    );
  })