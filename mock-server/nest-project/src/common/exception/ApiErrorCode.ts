export enum ApiErrorCode {
    TIMEOUT = -1, // 系统繁忙
    SUCCESS = 0, // 成功

    USER_ID_INVALID = 10001, // 用户id无效
    USER_ID_HAS_EXSIT=10002,//用户id已存在
    USER_NAME_INVALID=10003,
    LONGIN_FAIL = 10004,
    INPUT_ERROR=10005

}