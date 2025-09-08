function calculateROI(capEx, revenue) {
  return ((revenue - capEx) / capEx * 100).toFixed(2) + "%";
}
