# Math

## isInteger(value)

Check value is a integer.

### Parameters

1. `value` - `String|Number`: A integer instance.

### Returns

`boolean`

### Example

```
mingtool.math.isInteger(123)
> true
```

---

## isHex(value)

Check value is a hex number.

### Parameters

1. `value` - `String|Number`: A hex instance.

### Returns

`boolean`

### Example

```
mingtool.math.isHex('0xfff');
> true
```

---

## strToHex(str)

Encode your string to hex string.

### Parameters

1. `str` - `String`: a string instance.

### Returns

`String`: a encode hex string.

### Example

```
mingtool.math.strToHex('Hi math.');
> 4869206d6174682e
```

---

## hexToStr(hex)

Decode your hex string to string.

### Parameters

1. `hex` - `String`: a hex string instance.

### Returns

`String`: a decode string.

### Example

```
mingtool.math.hexToStr('4869206d6174682e');
> Hi math.
```