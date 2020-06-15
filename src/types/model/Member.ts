import { YnFlag } from '@/types/enum'
/**
 * 회원 구분
 */
export enum MemberType {
  NORMAL = 'N',
  DESIGNER = 'D',
  BUSINESS = 'B',
  ADMIN = 'A'
}
/**
 * 로그인 구분
 */
export enum LoginType {
  EMAIL = 'EM',
  NAVER = 'NA',
  KAKAO = 'KA',
  FACEBOOK = 'FA'
}
/**
 * 성별 구분
 */
export enum Gender {
  MALE = 'M',
  FEMALE = 'F'
}
/**
 * 회원 기본 Class
 */
export default class Member {
  loginType: LoginType | string = LoginType.EMAIL
  memberType: MemberType = MemberType.NORMAL
  email: string
  password: string
  dayOfBirth: string
  gender: Gender
  termsOfUse: YnFlag
  adOfAgree: YnFlag
  olderThan14: YnFlag
  mobileNo: string
  bizNumber: string
  accessToken?: string
  roles: any[]

  constructor (user?: Member) {
    if (user) {
      this.loginType = user.loginType
      this.memberType = user.memberType
      this.email = user.email
      this.dayOfBirth = user.dayOfBirth
      this.gender = user.gender
      this.termsOfUse = user.termsOfUse
      this.adOfAgree = user.adOfAgree
      this.olderThan14 = user.olderThan14
      this.mobileNo = user.mobileNo
      this.bizNumber = user.bizNumber
    }
  }
  toString (): string {
    return `memberTyoe: ${this.memberType}, email: ${this.email}, dayOfBirth: ${this.dayOfBirth}, gender: ${this.gender}, mobileNo: ${this.mobileNo}`
  }
}
