import type { Meta, StoryObj } from '@storybook/vue3';

import { userEvent, within, expect } from '@storybook/test';

import Questions from './Questions.vue';

const meta: Meta<typeof Questions> = {
    component: Questions,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Questions>;

export const Primary: Story = {
    render: (args: any) => ({
        components: { Questions },
        setup() {
            return { args };
        },
        template: '<Questions/>'
    }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByText('Submit'));
        await expect(
            //canvas.getByText('What do you want to say?')
            canvas.getByText('Choose an option')
        ).toBeInTheDocument();
    }
}