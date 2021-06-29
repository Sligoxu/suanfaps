let sort = (numbers) => {
    if (numbers.length > 2) {
        let index = minIndex(numbers)
        let min = numbers[index]
        numbers.splice(index, 1)
        return [min].concat(sort(numbers))
    } else {
        return numbers[0] < numbers[1] ? numbers : numbers.reverse()
    }
}
let minIndex = (numbers) => {
    let index = 0
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[index]) {
            return index = i
        }
    }
    return index
}
let min = (numbers) => {
    if (numbers.length > 2) {
        return min([numbers[0], min(numbers.slice(1))])
    } else {
        Math.min.apply(null, numbers)
    }
}