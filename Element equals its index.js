function find(a, i, j) {
    if (a.length == 1) {
        if (a[0] == 0) {
            return 0;
        } else {
            return -1;
        }
    }
    let result;
    let index = Math.trunc(((j - i) + 1) / 2) + i;
    if (a[index] >= index) {
        if (index == 1) {
            if (a[index - 1] == index - 1) {
                return a[index - 1];
            } else if (a[index] == index) {
                return a[index];
            } else {
                return -1;
            }
        }
        result = find(a, i, index);

    }
    if (a[index] < index) {
        if (j - index == 1) {
            if (a[index + 1] == index + 1) {
                return a[index + 1];
            } else if (a[index] == index) {
                return a[index];
            } else {
                return -1;
            }
        }
        result = find(a, index, j);
    }
    return result;

}
function indexEqualsValue(arr) {
    return find(arr, 0, arr.length);
}