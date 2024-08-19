export function checkEmail(email: string): CheckResult {
    const reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!reg.test(email)) {
        return {
            result: false,
            message: '이메일 형식이어야 합니다.'
        }
    }
    
    return { result: true }
}

export function checkPassword(password: string): CheckResult {
    const reg = /^[a-zA-Z0-9\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]{8,32}$/;

    if (!checkLength(password, 8, 32)) {
        return {
            result: false,
            message: '비밀번호의 길이는 8자 이상 32자 이하이어야 합니다.'
        }
    } else if (!checkAlphabet(password)) {
        return {
            result: false,
            message: '비밀번호 안에 영문자가 있어야 합니다.'
        }
    } else if (!checkNumber(password)) {
        return {
            result: false,
            message: '비밀번호 안에 숫자가 있어야 합니다.'
        }
    } else if (!checkSpecialLetter(password)) {
        return {
            result: false,
            message: '비밀번호 안에 특수문자가 있어야 합니다.'
        }
    } else if (!reg.test(password)) {
        return {
            result: false,
            message: '비밀번호는 영문자, 숫자 및 특수문자로만 구성해야 합니다.'
        }
    }
    
    return { result: true };
}

export function checkNickname(nickname: string): CheckResult {
    const reg = /^[a-zA-Z0-9가-힣]{1,10}$/;

    if (!checkLength(nickname, 1, 10)) return { result: false, message: '닉네임은 1자 이상 10자 이하이어야 합니다.'};
    else if (!reg.test(nickname)) return { result: false, message: '닉네임은 영문, 한글 및 숫자로만 구성되어야 합니다.'}; 
    else return { result: true }
}

function checkLength(value: string, minLength: number, maxLength: number): boolean {
    const length: number = value.length;
    return length >= minLength && length <= maxLength;
}

function checkHangul(value: string): boolean {
    const reg = /[가-힣]/;
    return reg.test(value);
}

function checkAlphabet(value: string): boolean {
    const reg = /[a-zA-Z]/;
    return reg.test(value);
}

function checkNumber(value: string): boolean {
    const reg = /[0-9]/;
    return reg.test(value);
}

/**
 * 특수문자가 들어있는지 검사하는 함수
 * 특수 문자 : 
 * ! " # $ % & ' ( ) * 
 * + , - . / : ; < = >
 * ? @ [ \ ] ^ _ ` { |
 * } ~
 * @param value 
 * @returns 특수문자가 들어있으면 true이고 그렇지 않으면 false입니다.
 */
function checkSpecialLetter(value: string): boolean {
    const reg = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]/;
    return reg.test(value);
}