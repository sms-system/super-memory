module.exports = (arr = []) => {
  let headLength = 1
  while (headLength !== arr.length) {
    let current = arr[headLength], newPos
    for (let i=headLength - 1; i >= 0; i--) {
      if (current > arr[i]) { break }
      newPos = i
    }
    if (newPos !== undefined) {
      arr = arr.slice(0, newPos).concat(
        current,
        arr.slice(newPos, headLength),
        arr.slice(headLength+1)
      )
    }
    headLength++
  }
  return arr
}