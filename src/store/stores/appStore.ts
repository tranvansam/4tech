import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DEFAULT_LANGUAGE } from '~/constants'

const useAppStore = defineStore(
  'appStore',
  () => {
    const currentLanguage = ref(DEFAULT_LANGUAGE)

    const setLanguage = (language: string) => {
      currentLanguage.value = language
    }

    return {
      currentLanguage,
      setLanguage
    }
  },
  {
    persist: true
  }
)

export default useAppStore
