import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const useAPIStore = defineStore('api', () => {

  const ax = axios.create({ baseURL: "http://localhost:3003" });


  async function getCampoColorato(latitude: number, longitude: number) {
    const response = await ax.post('/campoColorato',
      { latitude, longitude },
      { responseType: 'arraybuffer' }
    )
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    return blob;
  }

  async function getCampoMoisture(latitude: number, longitude: number) {
    const response = await ax.post('/campoMoisture',
      { latitude, longitude },
      { responseType: 'arraybuffer' }
    )
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    return blob;
  }

  async function getVegetation(latitude: number, longitude: number) {
    const response = await ax.post('/vegetation',
      { latitude, longitude },
      { responseType: 'arraybuffer' }
    )
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    return blob;
  }

  async function getReflectance(latitude: number, longitude: number) {
    const response = await ax.post('/reflectance',
      { latitude, longitude },
      { responseType: 'arraybuffer' }
    )
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    return blob;
  }

  async function suggestions(weatherData: any) {
    const response = await ax.post('/suggestions',
      { weatherData }
    )
    return response.data as { name: string, description: string }[];
  }

  return { getCampoColorato, getCampoMoisture, getVegetation, getReflectance, suggestions }
})

export default useAPIStore;