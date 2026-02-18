import { ref, type Ref } from 'vue'

export interface Toast {
  id: number
  message: string
  variant: 'success' | 'warning' | 'error' | 'info'
  duration: number
}

const toasts: Ref<Toast[]> = ref([])
let nextId = 0

export function useToast() {
  function addToast(options: { message: string; variant?: Toast['variant']; duration?: number }) {
    const id = nextId++
    const toast: Toast = {
      id,
      message: options.message,
      variant: options.variant ?? 'info',
      duration: options.duration ?? 3000,
    }
    toasts.value.push(toast)
    if (toast.duration > 0) {
      setTimeout(() => removeToast(id), toast.duration)
    }
    return id
  }

  function removeToast(id: number) {
    const index = toasts.value.findIndex(t => t.id === id)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  return { toasts, addToast, removeToast }
}
