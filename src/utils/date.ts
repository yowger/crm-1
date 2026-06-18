export const renderDateRange = (startDate: Date, endDate: Date) => {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })

    const timeFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
    })

    return `${dateFormatter.format(startDate)} • ${timeFormatter.format(
        startDate,
    )} - ${timeFormatter.format(endDate)}`
}
