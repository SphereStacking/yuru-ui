<script setup lang="ts">
import { ref, computed, nextTick, useId } from 'vue'
import { useClickOutside } from '../../composables/useClickOutside'

const props = defineProps<{
  modelValue?: string | number
  options: Array<{ value: string | number; label: string }>
  placeholder?: string
  disabled?: boolean
  id?: string
  name?: string
  label?: string
  error?: string
  required?: boolean
  helperText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const isOpen = ref(false)
const highlightedIndex = ref(-1)
const wrapperRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLButtonElement | null>(null)

const generatedId = useId()
const selectId = computed(() => props.id ?? generatedId)
const listboxId = computed(() => `${selectId.value}-listbox`)
const optionId = (index: number) => `${selectId.value}-option-${index}`
const errorId = computed(() => `${selectId.value}-error`)
const helperId = computed(() => `${selectId.value}-helper`)

const describedBy = computed(() => {
  if (props.error) return errorId.value
  if (props.helperText) return helperId.value
  return undefined
})

const errorClass = computed(() =>
  props.error
    ? 'yr:border-secondary-300 yr:dark:border-secondary-400'
    : ''
)

const activeDescendant = computed(() =>
  highlightedIndex.value >= 0 ? optionId(highlightedIndex.value) : undefined
)

const selectedLabel = computed(() => {
  const found = props.options.find((o) => o.value === props.modelValue)
  return found?.label
})

function open() {
  if (props.disabled) return
  isOpen.value = true
  const selectedIndex = props.options.findIndex((o) => o.value === props.modelValue)
  highlightedIndex.value = selectedIndex >= 0 ? selectedIndex : 0
}

function close() {
  isOpen.value = false
  highlightedIndex.value = -1
}

function toggle() {
  if (props.disabled) return
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

function select(value: string | number) {
  emit('update:modelValue', value)
  close()
  nextTick(() => triggerRef.value?.focus())
}

function onKeydown(e: KeyboardEvent) {
  if (props.disabled) return

  switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault()
      if (!isOpen.value) {
        open()
      } else if (highlightedIndex.value >= 0) {
        select(props.options[highlightedIndex.value].value)
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      if (!isOpen.value) {
        open()
      } else {
        highlightedIndex.value = Math.min(highlightedIndex.value + 1, props.options.length - 1)
        scrollOptionIntoView(highlightedIndex.value)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if (!isOpen.value) {
        open()
      } else {
        highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
        scrollOptionIntoView(highlightedIndex.value)
      }
      break
    case 'Home':
      if (isOpen.value) {
        e.preventDefault()
        highlightedIndex.value = 0
        scrollOptionIntoView(0)
      }
      break
    case 'End':
      if (isOpen.value) {
        e.preventDefault()
        highlightedIndex.value = props.options.length - 1
        scrollOptionIntoView(props.options.length - 1)
      }
      break
    case 'Escape':
      if (isOpen.value) {
        e.preventDefault()
        close()
        triggerRef.value?.focus()
      }
      break
  }
}

function scrollOptionIntoView(index: number) {
  nextTick(() => {
    const el = document.getElementById(optionId(index))
    el?.scrollIntoView({ block: 'nearest' })
  })
}

useClickOutside(wrapperRef, () => {
  close()
})
</script>

<template>
  <div class="yr:w-full">
    <label
      v-if="label"
      :for="selectId"
      class="yr:block yr:text-sm yr:font-body yr:text-gray-700 yr:dark:text-gray-300 yr:mb-1"
    >
      {{ label }}
      <span v-if="required" class="yr:text-secondary-500 yr:ml-0.5">*</span>
    </label>
    <div
      ref="wrapperRef"
      class="yr:relative yr:w-full"
      :class="disabled ? 'yr:opacity-50 yr:cursor-not-allowed' : ''"
    >
      <input v-if="name" type="hidden" :name="name" :value="modelValue" />
      <button
        ref="triggerRef"
        :id="selectId"
        type="button"
        role="combobox"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
        :aria-controls="isOpen ? listboxId : undefined"
        :aria-activedescendant="isOpen ? activeDescendant : undefined"
        :aria-invalid="!!error"
        :aria-describedby="describedBy"
        :aria-required="required || undefined"
        :class="[
          'yr:flex yr:items-center yr:justify-between yr:w-full',
          'yr:px-md yr:py-xs yr:font-sans yr:text-base yr:font-body',
          'yr:text-gray-700 yr:bg-white yr:border-theme yr:border-solid yr:border-gray-200',
          'yr:rounded-input yr:outline-none yr:cursor-pointer',
          'yr:transition-all yr:transition-theme',
          'yr:focus-visible:outline-none yr:focus-visible:ring-2 yr:focus-visible:ring-primary-200/50 yr:focus-visible:ring-offset-2',
          'yr:focus:border-primary-300',
          'yr:dark:text-gray-200 yr:dark:bg-gray-800 yr:dark:border-gray-600',
          'yr:dark:focus:border-primary-400 yr:dark:focus-visible:ring-primary-400/30 yr:dark:ring-offset-gray-900',
          errorClass,
        ]"
        :disabled="disabled"
        @click="toggle"
        @keydown="onKeydown"
      >
        <span v-if="selectedLabel">{{ selectedLabel }}</span>
        <span v-else class="yr:text-gray-400">{{ placeholder }}</span>
        <svg
          aria-hidden="true"
          class="yr:shrink-0 yr:text-gray-400 yr:transition-transform yr:duration-200"
          :class="isOpen ? 'yr:rotate-180' : ''"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <ul
        v-if="isOpen"
        :id="listboxId"
        role="listbox"
        class="yr:animate-dropdown-in yr:absolute yr:top-[calc(100%+4px)] yr:left-0 yr:right-0
               yr:bg-white yr:rounded-card yr:border-theme yr:border-solid yr:border-gray-200
               yr:shadow-theme-md yr:max-h-[200px] yr:overflow-y-auto yr:z-[100]
               yr:m-0 yr:p-0 yr:list-none
               yr:dark:bg-gray-800 yr:dark:border-gray-600"
      >
        <li
          v-for="(option, index) in options"
          :id="optionId(index)"
          :key="option.value"
          role="option"
          :aria-selected="option.value === modelValue"
          class="yr:px-md yr:py-xs yr:cursor-pointer yr:transition-colors yr:duration-100
                 yr:dark:text-gray-200"
          :class="[
            option.value === modelValue ? 'yr:font-heading yr:text-primary-500 yr:dark:text-primary-400' : '',
            highlightedIndex === index
              ? 'yr:bg-gray-100 yr:dark:bg-gray-700'
              : 'yr:hover:bg-gray-100 yr:dark:hover:bg-gray-700'
          ]"
          @click="select(option.value)"
          @mouseenter="highlightedIndex = index"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
    <p
      v-if="error"
      :id="errorId"
      role="alert"
      class="yr:mt-1 yr:text-xs yr:text-error-text"
    >
      {{ error }}
    </p>
    <p
      v-else-if="helperText"
      :id="helperId"
      class="yr:mt-1 yr:text-xs yr:text-gray-500 yr:dark:text-gray-400"
    >
      {{ helperText }}
    </p>
  </div>
</template>
