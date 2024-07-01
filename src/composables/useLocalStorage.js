import { ref, watch, onMounted, onBeforeUnmount } from "vue";

export function useLocalStorage(key) {
  const storageValue = ref(localStorage.getItem(key));
  const updateToken = (event) => {
    if (event.key === key) {
      storageValue.value = event.newValue;
    }
  };

  onMounted(() => {
    window.addEventListener("storage", updateToken);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("storage", updateToken);
  });

  watch(storageValue, async () => {
    storageValue.value = localStorage.getItem(key);
  });

  return storageValue.value;
}
