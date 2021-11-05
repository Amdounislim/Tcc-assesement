import { mount } from "@vue/test-utils";
import UserCard from "@/components/UserCard.vue";

describe('UserCard Component unit tests', () => {

   test('is a Vue instance', () => {
        const wrapper = mount(UserCard, {
            propsData: {
                user: {
                    firstName: "Johnny",
                    lastName: "Depp",
                    email: "jhonny@gmail.com"
                }
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

    test('renders the user firstName', () => {
        const userFirstName = "Jason";
        const userLirstName = "Momoa";
        const userEmail = "json@gmail.com";

        const wrapper = mount(UserCard, {
            propsData: {
                user: {
                    firstName: userFirstName,
                    lastName: userLirstName,
                    email: userEmail
                }
            }
        })
        expect(wrapper.html()).toContain(userFirstName, userLirstName, userEmail)
    })

    test('calls deleteUser when the delete button is clicked', () => {
        const wrapper = mount(UserCard, {
            propsData: {
                user: {
                    firstName: "Steve",
                    lastName: "Harvey",
                    email: "steve@gmail.com",
                }
            }
        })
        const deleteUser = jest.fn();

        wrapper.setMethods({
            deleteUser:deleteUser
        })

        wrapper.find('v-btn').trigger('click');

        expect(deleteUser).toHaveBeenCalled()
    })

})