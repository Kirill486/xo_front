import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Board, BoardRow } from '../../components/boardCell/elements';
import { BoardCell } from '../../components/boardCell';
import { doNothing } from '../../modules/doNothing';

storiesOf("Board", module)
	.add("Show all X", () => {
    return (
      <Board>
        <BoardRow>
          <BoardCell cellId={1} symbol={true} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={2} symbol={true} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={3} symbol={true} isDisabled={false} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={4} symbol={true} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={5} symbol={true} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={6} symbol={true} isDisabled={false} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={7} symbol={true} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={8} symbol={true} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={9} symbol={true} isDisabled={false} moveHere={doNothing}/>
        </BoardRow>
      </Board>
    );
  })
	.add("Show all O", () => {
    return (
      <Board>
        <BoardRow>
          <BoardCell cellId={1} symbol={false} isDisabled={true} moveHere={doNothing}/>
          <BoardCell cellId={2} symbol={false} isDisabled={true} moveHere={doNothing}/>
          <BoardCell cellId={3} symbol={false} isDisabled={true} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={4} symbol={false} isDisabled={true} moveHere={doNothing}/>
          <BoardCell cellId={5} symbol={false} isDisabled={true} moveHere={doNothing}/>
          <BoardCell cellId={6} symbol={false} isDisabled={true} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={7} symbol={false} isDisabled={true} moveHere={doNothing}/>
          <BoardCell cellId={8} symbol={false} isDisabled={true} moveHere={doNothing}/>
          <BoardCell cellId={9} symbol={false} isDisabled={true} moveHere={doNothing}/>
        </BoardRow>
      </Board>
    );
  })
	.add("Show all empty", () => {
    return (
      <Board>
        <BoardRow>
          <BoardCell cellId={1} symbol={null} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={2} symbol={null} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={3} symbol={null} isDisabled={false} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={4} symbol={null} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={5} symbol={null} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={6} symbol={null} isDisabled={false} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={7} symbol={null} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={8} symbol={null} isDisabled={false} moveHere={doNothing}/>
          <BoardCell cellId={9} symbol={null} isDisabled={false} moveHere={doNothing}/>
        </BoardRow>
      </Board>
    );
  })
	.add("Show all success / failure", () => {
    return (
      <Board>
        <BoardRow>
          <BoardCell cellId={1} symbol={true} isDisabled={true} isSuccess={true} moveHere={doNothing}/>
          <BoardCell cellId={2} symbol={true} isDisabled={true} isSuccess={true} moveHere={doNothing}/>
          <BoardCell cellId={3} symbol={true} isDisabled={true} isSuccess={true} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={4} symbol={true} isDisabled={true} isSuccess={true} moveHere={doNothing}/>
          <BoardCell cellId={5} symbol={true} isDisabled={true} isSuccess={true} moveHere={doNothing}/>
          <BoardCell cellId={6} symbol={true} isDisabled={true} isSuccess={true} moveHere={doNothing}/>
        </BoardRow>
        <BoardRow>
          <BoardCell cellId={7} symbol={false} isDisabled={true} isSuccess={false} moveHere={doNothing}/>
          <BoardCell cellId={8} symbol={false} isDisabled={true} isSuccess={false} moveHere={doNothing}/>
          <BoardCell cellId={9} symbol={false} isDisabled={true} isSuccess={false} moveHere={doNothing}/>
        </BoardRow>
      </Board>
    );
  })