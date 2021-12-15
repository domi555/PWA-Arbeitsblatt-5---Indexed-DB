async function getSpace() {
  const estimate = await navigator.storage.estimate();
  const totalSpace = (estimate.quota / 10 ** 9).toFixed(2);

  document.getElementById('space').innerHTML = totalSpace;
}
getSpace();
