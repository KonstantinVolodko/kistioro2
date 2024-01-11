<script setup lang="ts">
    const props = defineProps({
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
    })
</script>

<template>
    <div class="inputGroup">
        <input :type="type" autocomplete="off">
        <label for="name">{{ label }}</label>
    </div>
</template>

<style lang="scss">
.inputGroup {
    font-family: Gilroy;
    color: var(--Black, #2C2C2C);
    leading-trim: both;

    text-edge: cap;
    font-family: Gilroy;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
    position: relative;
}

.inputGroup input {
  outline: none;
  border: .1rem solid rgba(44, 44, 44, 0.30);
  background-color: transparent;
  border-radius: .8rem;
  width: 42.5rem;
  height: 3.9rem;
  padding-left: 1.1rem;
  color: var(--Black, #2C2C2C);
}

.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgba(44, 44, 44, 0.30);
}

.inputGroup :is(input:focus, input:valid)~label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.1rem;
  padding: 0rem;
  background-color: white;
}

.inputGroup :is(input:focus, input:valid) {
  border-color: rgba(44, 44, 44, 0.30);
}
</style>