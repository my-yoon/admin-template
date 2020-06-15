/**
 * 공통 Response
 */
export default class PagingModel {
    first: boolean
    last: false
    totalElements: number
    totalPages: number
    size: number
    hasNext: boolean
    hasPrevious: boolean
    number: number
    pageNumber: number
    totalRows: number
    rowSize: number
    page: number

    constructor (data: any) {
      this.first = data.first
      this.last = data.last
      this.totalElements = data.totalElements
      this.totalPages = data.totalPages
      this.size = data.size
      this.hasNext = data.hasNext
      this.hasPrevious = data.hasPrevious
      this.number = data.number
      this.pageNumber = data.pageNumber
      this.totalRows = data.totalRows
      this.rowSize = data.rowSize
      this.page = data.page
    }
}
