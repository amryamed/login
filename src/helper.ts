const EMAIL_VALIDATION_REGEX = /\S+@\S+\.\S+/;

export function validateEmail(email: string): boolean {
    return EMAIL_VALIDATION_REGEX.test(email);
}
