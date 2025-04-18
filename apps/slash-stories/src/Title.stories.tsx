import { Button, Title } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};
export default meta;

const MODIFIERS = ["", "content"];

type StoryProps = Omit<
  React.ComponentProps<typeof Title>,
  "classModifier" | "children"
> & {
  children: string;
  classModifier: string;
};
type Story = StoryObj<StoryProps>;

export const Template: Story = {
  name: "Title",
  render: ({ children: text, classModifier, ...args }) => (
    <Title classModifier={classModifier} {...args}>
      {text}
    </Title>
  ),
  args: {
    children: "Sample Title",
    classModifier: "",
    className: "",
    heading: "h2",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
  },
};

export const DefaultTitle: StoryObj<typeof Title> = {
  args: {
    children: "Default Title",
    heading: "h2",
  },
};

export const ContentTitle: StoryObj<typeof Title> = {
  args: {
    children: "Content Title",
    classModifier: "content",
    className: "",
    heading: "h2",
  },
};

export const ContentTitleWithLink: StoryObj<typeof Title> = {
  name: "Content Title With Button",
  render: (args) => {
    return (
      <Title
        heading={args.heading}
        classModifier="content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Content Title
        <Button> Click Me </Button>
      </Title>
    );
  },
  args: {
    children: "Content Title",
    classModifier: "content",
    className: "",
    heading: "h2",
  },
};
