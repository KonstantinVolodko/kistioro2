<script setup>
import { ref, watch, defineProps } from "vue";

const props = defineProps({
  fetchSuggestions: {
    type: Function,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const inputText = ref("");
const suggestions = ref([]);
const showSuggestions = ref(false);

watch(inputText, async (newValue) => {
  if (newValue && newValue.length > 0) {
    suggestions.value = await props.fetchSuggestions(newValue);
    showSuggestions.value = suggestions.value.length > 0;
  } else {
    showSuggestions.value = false;
    suggestions.value = [];
  }
});

function onInput(event) {
  inputText.value = event.target.value;
}
</script>

<template>
  <div class="input-container">
    <input
      type="text"
      v-model="inputText"
      :placeholder="placeholder"
      @input="onInput"
    />
    <div v-if="showSuggestions" class="helper-block">
      <ul>
        <li v-for="(suggestion, index) in suggestions" :key="index">
          <slot name="suggestion" :suggestion="suggestion">
            {{ suggestion }}
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  color: rgba(44, 44, 44, 0.6);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.0016rem;
  padding: 0.8rem 0rem 1rem 0rem;
  border: none;
  outline: none;
  border-bottom: 0.1rem solid rgba(44, 44, 44, 0.2);
}

.helper-block {
  border-radius: 1rem;
  background: var(--white);
  box-shadow: 0px 0px 0, 8rem 0.2rem rgba(188, 188, 188, 0.25);
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 1.4rem 1.6rem;
  overflow-y: scroll;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    li {
      padding-bottom: 0.8rem;
      border-bottom: 0.1rem solid rgba(44, 44, 44, 0.1);
      color: var(--black);
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 0.0016rem;
    }
  }
}
.input-container {
  position: relative;
}

</style>
