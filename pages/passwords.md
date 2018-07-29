I'm not sure what you expected to find here. Password standards.

* Stored in EnPass. Used: iPhone & Mac applications.
* Password design: randomized, length exceeding 12 always.
* Items stored: 130.

Randomization can be achieved through `openssl` in the terminal:

```
openssl rand -base64 <length>
```

Or just letting Safari suggest a strong password.