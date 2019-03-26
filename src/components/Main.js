import React, { Component } from 'react';
import logo from '../logo.svg';
import {
  Alert,
  Badge,
  Button,
  Input,
  Themes,
  Panel,
  Spinner,
  CopyToClipboard,
} from '@tkxs/cast-ui';
import styled from 'styled-components';

// const SButton = styled(Button)`
//   background: red;
// `;

class Main extends Component {
  componentDidMount() {
    console.log('We mounted app', Themes);
  }
  textClicks(e) {
    CopyToClipboard.prototype.copyToClipboard(e);
  }
  render() {
    return (
      <div>
        <div>
          <Alert lightMode> Hey! I am a message </Alert>
          <br />
          <Badge>123</Badge>
          <br />
          <br />
          <Button> Greetings </Button>
          <br />
          <br />
          <CopyToClipboard
            copyText="Some text that is usually copied to clipboard."
            copyContainerClass="copy-container"
            background="disabledBackground"
            includeCopyButton={true}
            copyButtonText="copy"
            copyButtonClass="copy-button"
            theme={Themes.defaultTheme}
          />
          <br />
          <br />

          <a
            href="/#"
            onClick={() =>
              CopyToClipboard.copyToClipboard(
                'https://www.npmjs.com/package/@tkxs/cast-ui',
              )
            }
          >
            Copy Me
          </a>
          <br />
          <br />
          <Input
            inputSize="lg"
            disabled={false}
            type="text"
            required={false}
            autoComplete="on"
            maxLength="1000"
            theme={Themes.defaultTheme}
          />
          <br />
          <br />
          <Panel
            theme={Themes.defaultTheme}
            title={'Enroll'}
            isCollapsed
            collapsible
            panelStyle="success"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea!
            Culpa, dignissimos dolores! Delectus fugiat numquam doloremque
            consequuntur tempora ipsam excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, reiciendis culpa incidunt
            corporis dolorem eum ullam totam cum iusto voluptate, maxime modi
            porro aperiam eveniet tempore ea? Quidem, at harum!
          </Panel>
          <Spinner
            color="lightGray"
            size={40}
            animationSpeed={2}
            theme={Themes.defaultTheme}
          />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Main;
