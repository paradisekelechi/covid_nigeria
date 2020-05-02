type getFormattedNumberType = (number: number) => string;

export const getFormattedNumber: getFormattedNumberType = (number) => {
    return new Intl.NumberFormat('en').format(number);
}