# Random

## getFloat(min, max)

Get a random floating point number between `min` to `max`.

### Parameters

1. `min` - `Number`: A min number instance, default is 0.
2. `max` - `Number`: A max number instance.

### Returns

`Number`: A random floating point number.

### Example

```
mingtool.math.random.getFloat(2, 5);
> 3.9429785036629608
mingtool.math.random.getFloat(1);
> 0.25353569976983903
```

---

## getInt(min, max)

Get a random integer between `min` to `max`.

### Parameters

1. `min` - `Number`: A min number instance, default is 0.
2. `max` - `Number`: A max number instance.

### Returns

`Number`: A random integer number.

### Example

```
mingtool.math.random.getInt(2, 5);
> 3
mingtool.math.random.getInt(1);
> 1
```

---

## getBool()

Get a random boolean value.

### Parameters

none

### Returns

`Boolean`

### Example

```
mingtool.math.random.getBool();
> true
```

---

## getSha256()

Get a random sha256 hex string.

### Parameters

none

### Returns

`String`: A random sha256 hex string.

### Example

```
mingtool.math.random.getSha256();
> 16e54955b77a8825359c71ce7ad5b8ecb8636e26bd92690eb00e822b57e34c4f
```