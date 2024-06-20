import { shallowMount } from "@vue/test-utils";
import Child from "@/components/Child.vue";

test('emits an event with the input value when the button is clicked', async () => {
    const wrapper = shallowMount(Child);
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    await input.setValue('texto');
    await button.trigger('click');

    expect(wrapper.emitted().ChildMessage).toBeTruthy();
    expect(wrapper.emitted().ChildMessage[0]).toEqual(['texto']);
});