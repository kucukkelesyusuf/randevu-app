export enum ErrorCode {
    VLD="VLD",
    NOAUTH="NOAUTH",
    SEXPIRE="SEXPIRE",
    SANSWEF="SEANSWEF",
    PERNOTF="PERNOTF"
}

export enum StatusCode {
    "VLD"=400,
    "NOAUTH"=401,
    "SEXPIRE"=599,
    "SEANSWEF"=400,
    "PERNOTF"=404
}