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
  Popover,
  RadioButton,
  RadioButtonGroup,
  Themes,
  Panel,
  Select,
  Spinner,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  Textarea,
  Title,
  Toggle,
  Tooltip,
  CopyToClipboard,
  SectionHeader,
  SubHeading,
  Display,
  Headline,
  SubTitle,
  Caption,
  Link,
  Digits,
} from '@tkxs/cast-ui';
import Icon from 'react-icons-kit';
import { userSecret } from 'react-icons-kit/fa/userSecret';
import { ic_keyboard_arrow_down as IKAD } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';
import { info } from 'react-icons-kit/fa/info';
import styled from 'styled-components';

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

          <SectionHeader>Section header</SectionHeader>
          <Display>Display</Display>
          <Headline>Headline</Headline>
          <Title>Title</Title>
          <SubTitle>Etiam mauris tellus</SubTitle>
          <p>
            Etiam ullamcorper, metus sed luctus auctor, tortor lorem auctor
            quam, ut condimentum massa tellus at turpis.
          </p>
          <Caption>Use for hero images and website headers</Caption>
          <Link solo={true} href="https://www.tkxs.com" target="_blank">
            Read More
          </Link>
          <br />
          <SubHeading>Subheader</SubHeading>
          <p>
            Lorem ipsum dolor sit amet, consectetur{' '}
            <Link href="https://theuselessweb.com/" target="_blank">
              unvisited link in text
            </Link>{' '}
            over a{' '}
            <Link href="https://www.tkxs.com" target="_blank">
              visited link in text
            </Link>{' '}
            elit.
          </p>
          <Button btnStyle="primary">Read More Button</Button>
          <br />
          <br />
          <br />
          {/* <Tooltip content="Tooltip text appears here">
            <span>
              <Button btnStyle="primary" outline={true}>
                Read More
              </Button>
            </span>
          </Tooltip> */}
          <Digits>$25,855.90</Digits>
          <br />
          {/* <Tooltip content={`String Tooltip`} isVisible={true} trigger="manual">
            <button>This button has a controlled tooltip</button>
          </Tooltip> */}
          <br />
          <div>
            <Toggle id="toggleId" value="1">
              One
            </Toggle>
          </div>
          <br />
          <Textarea
            id="myTextarea"
            placeholder="Placeholder Text"
            required={false}
            rows={8}
            cols={80}
          />
          <br />
          <Tabs defaultIndex={2}>
            <TabList>
              <Tab title="Tab Page 01" />
              <Tab title="Tab Page 02" disabled />
              <Tab title="Tab Page 03" />
            </TabList>
            <TabPanel>
              <h2>Any content 1</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus.
            </TabPanel>
          </Tabs>
          <br />
          <Spinner />
          <br />
          <Select
            id="mySelect"
            disabled={false}
            inputSize="md"
            invalid={false}
            invalidText="A valid value is required"
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            style={{ background: 'blue' }}
          />
          <br />
          <RadioButtonGroup name="myRadioButtonGroup" defaultChecked="1">
            <RadioButton id="myInput1" disabled={false} value="1">
              One
            </RadioButton>
            <RadioButton id="myInput2" disabled={false} value="2">
              Two
            </RadioButton>
          </RadioButtonGroup>
          <br />
          <RadioButton
            id="myInput12"
            value="1"
            defaultChecked
            className="radio-1"
            onChange={(value, name, e) =>
              console.log('RadioBtn changed ', value, name, e)
            }
          >
            One
          </RadioButton>
          <br />
          {/* <Popover
            content={'String content'}
            arrow={false}
            size="regular"
            placement="bottom-start"
          >
            <span>
              <Button btnStyle="primary">
                This button has a controlled popover
              </Button>
            </span>
          </Popover> */}
          <br />
          <Panel
            name="Catchy Name"
            title="Catchy title"
            bodyBackgroundColor="red"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea!
            Culpa, dignissimos dolores! Delectus fugiat numquam doloremque
            consequuntur tempora ipsam excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, reiciendis culpa incidunt
            corporis dolorem eum ullam totam cum iusto voluptate, maxime modi
            porro aperiam eveniet tempore ea? Quidem, at harum!
          </Panel>
          <br />
          <Pagination pageCount={10} />
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
                icon={info}
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
                icon={icAdd}
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
