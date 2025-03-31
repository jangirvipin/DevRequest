function getStatusColor(status: number): string {
    if (status >= 200 && status < 300) {
        return "green"; // Success
    } else if (status >= 300 && status < 400) {
        return "blue"; // Redirect
    } else if (status === 400) {
        return "orange"; // Bad Request
    } else if (status === 401 || status === 403) {
        return "red"; // Unauthorized / Forbidden
    } else if (status === 404) {
        return "gray"; // Not Found
    } else if (status >= 500) {
        return "darkred"; // Server Error
    } else {
        return "black"; // Default (unknown status)
    }
}
export default getStatusColor;