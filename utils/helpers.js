export const extractErrorMessage = (errorString) => {
  const errorMessageRegex = /Firebase: Error \((.+)\)./;
  const errorMessageMatch =
    JSON.stringify(errorString).match(errorMessageRegex);
  if (errorMessageMatch && errorMessageMatch.length > 1) {
    let errorMessage = errorMessageMatch[1];
    const prefixIndex = errorMessage.indexOf("/");
    errorMessage = errorMessage.slice(prefixIndex + 1);
    errorMessage = errorMessage.replace(/-/g, " ");
    errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    return errorMessage;
  }
  return null;
};
