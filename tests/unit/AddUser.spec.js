import { mount } from "@vue/test-utils";
import AddUser from "@/components/AddUser.vue";

describe('AddUser Component unit tests', () => {

    test('is a Vue instance', () => {
         const wrapper = mount(AddUser, {
             propsData: {
                 user: {
                     firstName: "Taylor",
                     lastName: "Swift",
                     email: "taylor@gmail.com",
                 },
                 isEdit:Boolean
             }
         })
         expect(wrapper.isVueInstance()).toBeTruthy();
     })


    test('calls action when the save button is clicked', () => {
        const wrapper = mount(AddUser, {
            propsData: {
                user: {
                    firstName: "Yannick",
                    lastName: "Noah",
                    email: "noah@gmail.com",
                },
                isEdit: Boolean
            }
        })
        const action = jest.fn();

        wrapper.setMethods({
            action: action
        })

        wrapper.find('v-btn.save').trigger('click');

        expect(action).toHaveBeenCalled()
    })

})