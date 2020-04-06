import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Title } from '../../components/title';
import { AppContainer, ApplicationRow } from '../../components/appContainer';
import { Board, BoardRow } from '../../components/boardCell/elements';
import { BoardCell } from '../../components/boardCell';
import { Button } from '../../components/button';
import { doNothing } from '../../modules/doNothing';

storiesOf("Game screen", module)
	.add("Game end", () => {
    const restartThis = () => alert('restartThis');
    const startNew = () => alert('startNew');
    return (
      <AppContainer>
        <Title text={"Winner: Player"} />

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
        <ApplicationRow>
          <Button onClick={restartThis}>Restart this</Button>
          <Button onClick={startNew}>Start new</Button>
        </ApplicationRow>
      </AppContainer>
    );
  })	
	.add("Game in process", () => {
    const restartThis = () => alert('restartThis');
    const startNew = () => alert('startNew');
    return (
      <AppContainer>
        <Title text={"Turn: Player"} />
        <Board>
          <BoardRow>
            <BoardCell cellId={1} symbol={true} isDisabled={true} moveHere={doNothing}/>
            <BoardCell cellId={2} symbol={true} isDisabled={true} moveHere={doNothing}/>
            <BoardCell cellId={3} symbol={true} isDisabled={true} moveHere={doNothing}/>
          </BoardRow>
          <BoardRow>
            <BoardCell cellId={4} symbol={true} isDisabled={true} moveHere={doNothing}/>
            <BoardCell cellId={5} symbol={true} isDisabled={true} moveHere={doNothing}/>
            <BoardCell cellId={6} symbol={true} isDisabled={true} moveHere={doNothing}/>
          </BoardRow>
          <BoardRow>
            <BoardCell cellId={7} symbol={false} isDisabled={true} moveHere={doNothing}/>
            <BoardCell cellId={8} symbol={false} isDisabled={true} moveHere={doNothing}/>
            <BoardCell cellId={9} symbol={false} isDisabled={true} moveHere={doNothing}/>
          </BoardRow>
        </Board>
        <ApplicationRow>
          <Button onClick={restartThis}>Restart this</Button>
          <Button onClick={startNew}>Start new</Button>
        </ApplicationRow>
      </AppContainer>
    );
  })	
	.add("Game in process free moves", () => {
    const restartThis = () => alert('restartThis');
    const startNew = () => alert('startNew');
    return (
      <AppContainer>
        <Title text={"Turn: Player"} />
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
        <ApplicationRow>
          <Button onClick={restartThis}>Restart this</Button>
          <Button onClick={startNew}>Start new</Button>
        </ApplicationRow>
      </AppContainer>
    );
  })
	