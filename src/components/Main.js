import React, { Component } from 'react';
import logo from '../logo.svg';
import {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  DatePicker,
  Draggable,
  DraggableInfo,
  DraggableFooter,
  DraggableItem,
  DraggableParent,
  IconButton,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Themes,
  Panel,
  Spinner,
  Title,
  CopyToClipboard,
  styled,
} from '@tkxs/cast-ui';
import Icon from 'react-icons-kit';
import { userSecret } from 'react-icons-kit/fa/userSecret';
// import styled from 'styled-components';

const STitle = styled(Title)`
  background: red;
`;
const SButton = styled(Button)`
  background: red;
`;

class Main extends Component {
  componentDidMount() {
    console.log('We mounted app', Themes);
  }
  textClicks(e) {
    CopyToClipboard.copy(e);
  }
  render() {
    return (
      <div>
        <div>
          <br />
          <Pagination
            pageCount={10}
            onPageChange={() => console.log('Pagination Page changed')}
          />
          <br />
          <Navbar
            background="lightBackground"
            height="80px"
            borderBottom="1px solid grey"
          >
            <Nav left>
              <img
                src="https://www.tkxs.com/hubfs/TKXS-brand/TKXS%20Official%20Logo%20(black).svg"
                alt="TKXS"
                style={{ width: '100px' }}
              />
              <h2 style={{ padding: '0 16px' }}>Cast UI</h2>
            </Nav>
            <Nav center>
              <h3 style={{ padding: '0 12px' }}>Center Item</h3>
              <h3 style={{ padding: '0 12px' }}>Center Item</h3>
            </Nav>
            <Nav right>
              <h3 style={{ padding: '0 0 0 16px' }}>Right Item</h3>
              <h3 style={{ padding: '0 0 0 16px', cursor: 'pointer' }}>
                <Icon icon={userSecret} size={32} />
              </h3>
            </Nav>
          </Navbar>
          <br />
          <InputGroup label="This is my label" vertical>
            <Input />
          </InputGroup>
          <br />
          <Input />
          <br />
          <Draggable>
            <DraggableInfo>
              <IconButton
                rounded
                icon={{
                  viewBox: '0 0 640 1792',
                  children: [
                    {
                      name: 'path',
                      attribs: {
                        d:
                          'M640 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-…',
                      },
                    },
                  ],
                }}
                iconsize={10}
                pixelbuttonsize={18}
                btnSize="sm"
                btnStyle="success"
              />
              To create a new group, drag one qualification on top of another
            </DraggableInfo>
            {/* <DraggableParent.ParentContainer
              parentActive={false}
              parenthandlesize={30}
              showparenthandle
              draggable
            >
              <DraggableParent.ParentMainContent>
                <DraggableItem.ItemContainer
                  showitemhandle
                  itemhandlesize={30}
                  draggable
                >
                  <DraggableItem.ItemMainContent>
                    <b>Qualification:</b>
                    Geography - AK: Aleutian East - AZ, NC, WA
                  </DraggableItem.ItemMainContent>
                  <DraggableItem.ItemRightContent>
                    <Icon
                      icon={{
                        viewBox: '0 0 24 24',
                        children: [
                          {
                            name: 'path',
                            attribs: {
                              d:
                                'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z',
                            },
                          },
                        ],
                      }}
                      size={24}
                    />
                  </DraggableItem.ItemRightContent>
                </DraggableItem.ItemContainer>
                <DraggableItem.ItemContainer showitemhandle itemhandlesize={30}>
                  <DraggableItem.ItemMainContent>
                    <b>Qualification:</b>
                    Geography - AK: Aleutian East - AZ, NC, WA
                  </DraggableItem.ItemMainContent>
                  <DraggableItem.ItemRightContent>
                    <Icon
                      icon={{
                        viewBox: '0 0 24 24',
                        children: [
                          {
                            name: 'path',
                            attribs: {
                              d:
                                'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z',
                            },
                          },
                        ],
                      }}
                      size={24}
                    />
                  </DraggableItem.ItemRightContent>
                </DraggableItem.ItemContainer>
                <DraggableItem.ItemContainer showitemhandle itemhandlesize={30}>
                  <DraggableItem.ItemMainContent>
                    <b>Qualification:</b>
                    Geography - AK: Aleutian East - AZ, NC, WA
                  </DraggableItem.ItemMainContent>
                  <DraggableItem.ItemRightContent>
                    <Icon
                      icon={{
                        viewBox: '0 0 24 24',
                        children: [
                          {
                            name: 'path',
                            attribs: {
                              d:
                                'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z',
                            },
                          },
                        ],
                      }}
                      size={24}
                    />
                  </DraggableItem.ItemRightContent>
                </DraggableItem.ItemContainer>
              </DraggableParent.ParentMainContent>
              <DraggableParent.ParentRightContent>
                <IconButton
                  rounded
                  icon={{
                    viewBox: '0 0 24 24',
                    children: [
                      {
                        name: 'path',
                        attribs: { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' },
                      },
                    ],
                  }}
                  iconsize={20}
                  pixelbuttonsize={32}
                  btnSize="sm"
                  btnStyle="primary"
                />
              </DraggableParent.ParentRightContent>
            </DraggableParent.ParentContainer> */}
            <DraggableFooter>
              <IconButton
                rounded
                icon={{
                  viewBox: '0 0 24 24',
                  children: [
                    {
                      name: 'path',
                      attribs: { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' },
                    },
                  ],
                }}
                iconsize={20}
                pixelbuttonsize={32}
                btnSize="sm"
                btnStyle="primary"
              />
            </DraggableFooter>
          </Draggable>
          <br />
          {/* <DatePicker
            id="datepicker"
            placeholder="Select start date"
            datepickerstyle={'primary'}
            datepickersize={'md'}
            dayPickerProps={{
              selectedDays: [
                new Date('2019-2-5'),
                { from: new Date('2019-2-5'), to: new Date('2019-2-9') },
              ],
            }}
          /> */}
          <br />
          <div>
            <CopyToClipboard
              copyContent="
                &lt;CopyToClipboard
                  copyContent=&#39;So…"
              copyContainerClass="copy-container"
              background="lightBackground"
              includeCopyButton
              copyButtonContent="copy"
              copyButtonClass="copy-button"
              fullWidth
            />
            <br />
            <CopyToClipboard copyContent="CBA6697-67895" fullWidth={false} />
            <br />
            <br />

            <a
              href="/#"
              onClick={() =>
                CopyToClipboard.copy(
                  'https://www.npmjs.com/package/@tkxs/cast-ui',
                )
              }
            >
              Copy Me
            </a>
          </div>
          <br />
          <div>
            <Checkbox
              id="myInput1"
              cbSize="md"
              defaultChecked
              disabled={false}
              value="1"
            >
              One
            </Checkbox>
            <Checkbox
              id="myInput2"
              cbSize="md"
              defaultChecked
              disabled={false}
              value="2"
            >
              Two
            </Checkbox>
          </div>
          <br />
          <ButtonGroup role="group" mode="checkbox">
            <Button value="1">One</Button>
            <SButton value="2">Two</SButton>
            <Button
              value="3"
              onClick={e => console.log('button group 3', e.target)}
            >
              Three
            </Button>
          </ButtonGroup>
          <br />
          <Alert lightMode> Hey! I am a message </Alert>
          <br />
          <Badge>123</Badge>
          <br />
          <br />
          <SButton> Greetings </SButton>
          <br />
          <br />
          <Card cardStyle="default" highlightBorder="top" bgColor="#FFFFFF">
            <STitle>Card Header</STitle>
            <div>
              <b>Nullam mattis egestas tortor</b>
              <p>Aliquam porttitor aliquet fringilla.</p>
              <b>Nullam mattis egestas tortor</b>
              <p>
                Duis pellentesque, risus id faucibus porttitor,
                <br />
                dolor arcu tristique ligula, id tincidunt odio nisl id tellus.
                dolor arcu tristique ligula, id tincidunt odio nisl id tellus.
              </p>
            </div>
          </Card>
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
