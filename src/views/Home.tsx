import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()

    const count = ref(0)

    return () => (
      <>
        <h1>Home</h1>
        <h1>{store.state.title}</h1>
        <div>count:{count.value}</div>
        <div class="button" onClick={() => {
          count.value++
        }}>
          click
        </div>
      </>
    );
  }
});