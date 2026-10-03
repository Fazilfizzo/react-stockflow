export const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
    });
}