import { FineArt } from "@/models/FineArt.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"


class FineArtsService {
  async getFineArts() {
    const response = await api.get('api/artworks')
    console.log('GOT FINE ARTS 🖼️', response.data)
    const newFineArts = response.data.artworks.map(artworkPOJO => new FineArt(artworkPOJO))
    AppState.finearts = newFineArts
  }
}

export const fineArtsService = new FineArtsService()