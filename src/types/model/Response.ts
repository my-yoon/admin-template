/**
 * 데이터 처리 결과 코드
 */
export enum BizResultCode {
  SUCCESS = 1000,
  ERROR = 9000,
  BAD_REQUEST = 2002,
  UNREGISTED_EMAIL = 4030,
  // 알 수 없는 회원 정보입니다.
  UNKNOW_MEMBER = 4010,
  // OTP 정보가 만료 되었습니다.
  EXPIRED_OTP = 3003,
  // 이미 등록된 상품입니다
  EXIST_BRF_ITEM = 4190

}

/**
 * 공통 Response
 */
export class PagingModel {
  first: boolean = true
  last: false
  totalElements: number = 0
  totalPages: number = 1
  size: number = 100
  hasNext: boolean
  hasPrevious: boolean
  number: number = 0
  pageNumber: number = 0
  totalRows: number = 0
  rowSize: number = 100
  page: number = 1
}
/**
 * 공통 Response
 */
export default class Response {
    isSuccess: boolean = false
    result: BizResultCode
    description: string
    isList: boolean = false
    data!: any
    pageInfo: PagingModel

    constructor (response: any) {
      const resdt = response.data
      this.result = resdt.result
      if (this.result === BizResultCode.SUCCESS) {
        this.isSuccess = true
      }
      this.description = resdt.description
      if (!resdt.isList) {
        this.data = resdt.response.data
      } else {
        try {
          // -------------
          // 리스트의 경우
          this.pageInfo = resdt.response.pagingModel
          this.data = resdt.response.list
          this.isList = true
        } catch (err) {
          this.isList = true
          this.data = resdt.response.list
        }
      }
    }
}
