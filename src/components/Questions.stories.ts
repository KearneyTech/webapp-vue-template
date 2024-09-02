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
        await expect(
            canvas.getByText('Begin')
        ).toBeInTheDocument();
        await userEvent.click(canvas.getByText('Begin'));
        await expect(
            canvas.getByText('What do you want to say?')
        ).toBeInTheDocument();
        await userEvent.type(canvas.getByTestId('text'), 'Storybook');
        await userEvent.click(canvas.getByText('Submit'));
        await expect(
            canvas.getByText('Choose an option')
        ).toBeInTheDocument();
        await userEvent.selectOptions(canvas.getByTestId('select'), 'First')
        await userEvent.click(canvas.getByText('Submit'));
        await expect(
            canvas.getByText('Which is best?')
        ).toBeInTheDocument();
        await userEvent.click(canvas.getByTestId('radioOne'));
        await userEvent.click(canvas.getByText('Submit'));
        
        // Final page assertions
        await expect(
            canvas.getByText('Text: Storybook')
        ).toBeInTheDocument();
        await expect(
            canvas.getByText('Select: First')
        ).toBeInTheDocument();
        await expect(
            canvas.getByText('Radio: radioOne')
        ).toBeInTheDocument();

        await userEvent.click(canvas.getByText('Reset'));
    }
}