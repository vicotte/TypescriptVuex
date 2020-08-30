import { ref, computed } from 'vue';

const status = ref(true);

export default function useStatus() {
  function toggleStatus(): void {
    console.log('essais');
    status.value = !status.value;
  }

  function setStatus(payload: { value: boolean }): void {
    status.value = payload.value;
  }

  return {
    toggleStatus,
    setStatus,
    status: computed(() => status.value),
  };
}
