

export const daysAgo = (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().substring(0, 10)
};

export const formatDay = (value) => {
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
};

export const toRelativeDate = (isoDate) => {
    switch (isoDate) {
        case daysAgo(0):
            return "Today";
        case daysAgo(1):
            return "Yesterday";
        case daysAgo(2):
            return "Two days ago";
        default:
            return formatDay(isoDate);
    }

};
