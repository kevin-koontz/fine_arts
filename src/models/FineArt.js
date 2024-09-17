export class FineArt {
  constructor(data) {
    this.id = data.id
    this.originalLink = data.originalLink
    this.description = data.description
    this.altDescription = data.altDescription
    this.attribution = data.attribution
    this.admirers = data.admirers
    this.rawImgUrl = data.imgUrls.raw
    this.regularImgUrl = data.imgUrls.regular
    this.smallImgUrl = data.imgUrls.small
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }


}




// const data = {
//   slug: String,
//   height: Number,
//   width: Number,
//   originalLink: String,
//   imgUrls: undefined,
//   description: String,
//   altDescription: String,
//   attribution: String,
//   color: String,
//   admirers: undefined,
//   *createdAt: ISO Timestamp(Virtual Added by Database)
//     *updatedAt: ISO Timestamp(Virtual Added by Database)
// }
