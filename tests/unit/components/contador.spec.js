import { shallowMount } from "@vue/test-utils";
import { createStore } from 'vuex'

import Contador from '@/components/Contador'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    }
  }
})

describe('Pruebas sobre el contador:', () => {
  test('Prueba 1: valor inicial', () => {
    const wrapper = shallowMount(Contador, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.html()).toContain('Count: 0')
  })

  test('Prueba 2: incrementar valor', async() => {
    const wrapper = shallowMount(Contador, {
      global: {
        plugins: [store]
      }
    })
    await wrapper.find('.incrementar').trigger('click')
    expect(wrapper.html()).toContain('Count: 1')
  })

  test('Prueba 3: decrementar valor', async() => {
    const wrapper = shallowMount(Contador, {
      global: {
        plugins: [store]
      }
    })
    await wrapper.find('.decrementar').trigger('click')
    expect(wrapper.html()).toContain('Count: 0')
  })

})