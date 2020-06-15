/**
 * 이메일 형식 유효성 검사 수행
 * @param value 유효성 검사 대상 문자열
 */
export const eMail = (value: string = '') => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return (pattern.test(value) || value.length < 1) || '이메일주소 형식이 올바르지 않습니다.'
}

/**
 * 이메일 필수 입력 규칙 유효성 검사
 * @param value 유효성 검사 대상 이메일
 */
export const requiredEMail = (value: string) => {
  return !!value || '이메일을 입력해 주세요.'
}
/**
 * 패스워드 규칙 유효성 검사 수행
 * 규칙: 영문 + 숫자 + 특수기호 총합 8자리이상
 * @param value 유효성 검사 대상 문자열
 */
export const password = (value: string = '') => {
  const pattern = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  return (pattern.test(value) || value.length < 1) || '영문+숫자+특수기호를 포함하는 8자리이상 문자가 아닙니다.'
}

/**
 * 비밀번호 필수 입력 규칙 유효성 검사
 * @param value 유효성 검사 대상 비밀번호
 */
export const requiredPwd = (value: string) => {
  return !!value || '비밀번호를 입력해 주세요.'
}

/**
 * 최대입력 문자 유효성 검사 (생년월일)
 * @param value 입력값 글자 수
 */
export const maxLength6 = (value: string = '') => {
  return value.length <= 6 || '6자리를 넘을 수 없습니다.'
}

export interface IValidator {
  eMail(value: string): any
  password(value: string): any
  requiredPwd(value: string): any
  maxLength6(value: any): any
}

export default {
  eMail,
  password,
  requiredPwd,
  maxLength6
}
