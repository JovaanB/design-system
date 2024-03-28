import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import { CollapseCard } from "./CollapseCard";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Agent/Components/Accordion",
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on.*" },
  },
};

export default meta;

type StoryProps = {
  numberOfItems: number;
  onlyOne: boolean;
  classModifier: string;
};

export const AccordionStory: StoryObj<StoryProps> = {
  name: "Accordion",
  render: ({ numberOfItems, onlyOne, classModifier }) => {
    return (
      <div>
        <Accordion onlyOne={onlyOne} classModifier={classModifier}>
          {Array.from({ length: numberOfItems }, (_, i) => (
            <CollapseCard key={i} onToggle={action("onToggle")}>
              <CollapseCard.Header>
                Socle de garantie {i + 1}
              </CollapseCard.Header>
              <CollapseCard.Body>
                Bonjour le socle de garantie
              </CollapseCard.Body>
            </CollapseCard>
          ))}
        </Accordion>
      </div>
    );
  },

  args: {
    numberOfItems: 3,
    onlyOne: true,
  },
  argTypes: {
    numberOfItems: {
      control: { type: "range", min: 1, max: 10 },
    },
    onlyOne: {
      control: "boolean",
    },
    classModifier: {
      control: "select",
      options: ["", "light", "arrow-right"],
    },
  },
};
