import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', () => {
    const censusData = ref([])
  
    return { censusData }
});