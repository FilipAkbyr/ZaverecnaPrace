import * as admin from "firebase-admin";

const firebaseAdminConfig = {
  type: "service_account",
  project_id: "notable-b0fb9",
  private_key_id: "c92c5b55fb8e63e63b6836ea60b53eae62e9998d",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDk6QoyGkc4wVt4\n7s4aEZ0EP9IXs7V1WE29J5Tnwk2F+w5WX8kkUJ54qadKOjg6PLoN7ilCjd1xwffO\nW9uV0PzsfBP3Z4ooYjVO9RmmOTYjekwoSHKaiw9x4V8ClSVW7I89p48094GBGfwi\nAkElD/Abc3XuEq0/ks3Hl3p+SLCxFFY3vOSUcW7f2sJu36bH1TmopouOVPi3v3DU\n7AqiR7RR3pl4QekAZdQrcTW5HVxWc3m27AeIrxm+gVJQa0jEJgVpayb7aIcDu3K/\nIV8c4YM74iIZfd2y/T1nsfWRY5X+4nBN8YJViozOYS79Sn3fO8nDZFWGnCeYlvrb\noYjzbx0ZAgMBAAECggEAI4u3eFfBywOlgWYtzXkCNZx2cpVGnnnvmmmY0xNGSAGX\n9Jwrpw64yPppPprDS/HNn2el8w6F/kn1Qc9cTguVluBellq25rX3WrMvQDNen4w4\nYsH7P9nLtG6few5vbavOw29vSrWLX+GJ2Dsa5BcxPQYFIEq4qehROYbhb9Y4T8rS\nNxYsfobWofD+kIEB+R/UNG5CuHsKckXKawmWyDggSGYlHvTGuLprQjcWy3IpBNkR\n3MlAyM5gck1cp8U9oZvRk9RxUERvswQihijB2NjUPvE5PHclfiGndpYvf1t5Pajp\nDNkFGZlevV+KzbW1BLnPyqtIMhZdtW9wEULC2swcnQKBgQD1lv074vjhigx3RxPJ\ne7BUXLB5+GUJIW41WSSYF99EHKYmvgeItWLgbOw9rP2HZaohEMfNMlFceTIItmN5\n+vGAVLvivoA69gRotSHWhIWFvghKOC2F892Yeg3yrVP3D5+9Ep+0fseRXucFY/L0\nffE+eeGkJMsvcXEr/a1+2Vjr3QKBgQDunQ26BS+Y9Mp54bFZ648JbQdgyaGal4M0\ne2hqOa/JAxTT3/7A4IGkJ8+i2fwJXTqnRPt0nVaIQe/7K5AyR34h47APxwKsX+1M\nYQQhbI2YIj37e5ncQ7BSshGpVi3a6gyxSctxt4gxGsjWeRYQZAGGHKZ8ciWY4Cls\nkT8LKcpwbQKBgQCINGxP2WrE02ZkhLQRq5q4vwtVKhEHBlZ0GfN0stCtmuH/XKcb\nB9ZFt8Mx1Y5qmFTJr9/QCxcanVDFijoTfbyQuu3VLGg7yxPY6pRQwAC5kxJP72Y4\nA28j0JWJwN1viWfDWd/fH+0Yz7R6xdsKBAtW5gvhmFJkBpuIlVGyp2JstQKBgDoE\nh/TmE+euBZlTDiteAj55eyTGgfuzwVw+cWn6sso+bI8D1M6TCBKg93SSahzgxUUs\nmbOGGicxWSeKNRp0la+pzAJaEkVVYb6DjFyQJ3GJSebe689JyhKhZ3f0E1w6MnHd\nDpGM3ZmK+LBlar77gf9Y8gYqPwgH4Sqbumd9dtKVAoGBANurgnm/vo33C2Oo9AQE\nhkKEGEyp79pDZpQ/GBiqBKAub7xNAOmubrKu+iaWoeIK+tsnOVIBpFvaYFdP7V0Q\naBieA575vAGFT6jtimVh9Lw5su7u1wMgM2dQZ3oqetyEIctI5WqMaRfoytCLxJQp\nfCKzItCT9G6eHxf10aw5LA9T\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-u7wgm@notable-b0fb9.iam.gserviceaccount.com",
  client_id: "111863761291294880208",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u7wgm%40notable-b0fb9.iam.gserviceaccount.com",
};

if (admin.apps.length === 0) {
  // Initialize Firebase
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
  });
}

export const { firestore, auth: adminAuth } = admin;