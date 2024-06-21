import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ComponentName',
  props: {},
  emit: [''],
  setup(props, { emit }) {
    const store = useStore()

    const count = ref(0)

    return () => {
      return (
        <div class="home-page">
          <h1>Home</h1>
          <h1>{store.state.title}</h1>
          <div>count:{count.value}</div>
          <button
            onClick={() => {
              count.value++
            }}
          >
            click
          </button>
        </div>
      )
    }
  }
})
