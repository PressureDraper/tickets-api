export const getDays = (year: number, month: number) => {
    const numDays: any = new Date(year, month, 0).getDate();

    return numDays;
}

export const getDate = (year: string, complement: string, days: number = 0) => {
    if (days === 0) {
        return new Date(`${year}${complement}`).toISOString();
    } else {
        return new Date(`${year}${complement}${days}`).toISOString();
    }
}